"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const scrollPositions = new Map<string, number>();

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const updateThumb = useCallback(() => {
    const container = containerRef.current;
    const thumb = thumbRef.current;
    const track = trackRef.current;
    if (!container || !thumb || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const trackHeight = track.clientHeight;
    const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 32);
    const maxThumbTop = trackHeight - thumbHeight;
    const rawThumbTop = (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;
    const thumbTop = Math.min(Math.max(rawThumbTop, 0), maxThumbTop);

    // Squish effect ai limiti
    const overTop = Math.max(-rawThumbTop, 0);
    const overBottom = Math.max(rawThumbTop - maxThumbTop, 0);
    const squish = Math.max(1 - (overTop + overBottom) / 60, 0.6);

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${thumbTop}px) scaleY(${squish})`;
    thumb.style.transformOrigin = overTop > 0 ? "top" : "bottom";
    thumb.style.opacity = scrollHeight > clientHeight ? "1" : "0";
  }, []);

  // Ripristina posizione scroll al cambio pagina
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = scrollPositions.get(pathname) ?? 0;
    updateThumb();
    return () => {
      scrollPositions.set(pathname, el.scrollTop);
    };
  }, [pathname, updateThumb]);

  // Aggiorna thumb allo scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    updateThumb();
    return () => {
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [updateThumb]);

  // Drag thumb
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartScroll.current = containerRef.current?.scrollTop ?? 0;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current || !trackRef.current || !thumbRef.current) return;
      const { scrollHeight, clientHeight } = containerRef.current;
      const trackHeight = trackRef.current.clientHeight;
      const thumbHeight = thumbRef.current.clientHeight;
      const delta = e.clientY - dragStartY.current;
      const scrollRatio = (scrollHeight - clientHeight) / (trackHeight - thumbHeight);
      containerRef.current.scrollTop = dragStartScroll.current + delta * scrollRatio;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  // Click sul track per saltare
  const onTrackClick = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || !trackRef.current || !thumbRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const thumbHeight = thumbRef.current.clientHeight;
    const { scrollHeight, clientHeight } = containerRef.current;
    const trackHeight = trackRef.current.clientHeight;
    const scrollRatio = (scrollHeight - clientHeight) / (trackHeight - thumbHeight);
    containerRef.current.scrollTop = (clickY - thumbHeight / 2) * scrollRatio;
  }, []);

  return (
    <div style={{ position: "fixed", top: "65px", left: 0, right: 0, bottom: 0 }}>
      {/* Contenuto scrollabile - scrollbar nativa nascosta */}
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          inset: 0,
          overflowY: "scroll",
          overflowX: "hidden",
          background: "var(--bg)",
          scrollbarWidth: "none",
        }}
        className="[&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Track scrollbar custom */}
      <div
        ref={trackRef}
        onClick={onTrackClick}
        style={{
          position: "absolute",
          right: "3px",
          top: "2px",
          bottom: isMobile ? "10px" : "20px",
          width: isMobile ? "2px" : "6px",
          cursor: "default",
        }}
      >
        {/* Thumb */}
        <div
          ref={thumbRef}
          onMouseDown={onMouseDown}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            borderRadius: "999px",
            background: "rgba(139, 143, 154, 0.4)",
            opacity: 0,
            transition: "opacity 0.2s, background 0.15s",
            cursor: "default",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139, 143, 154, 0.7)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(139, 143, 154, 0.4)")}
        />
      </div>
    </div>
  );
}