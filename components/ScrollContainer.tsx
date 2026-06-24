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
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const showThumb = useCallback(() => {
    setVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setVisible(false);
    }, 1500);
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

    if (scrollHeight <= clientHeight) {
      thumb.style.opacity = "0";
    }
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
    const onScroll = () => {
      updateThumb();
      showThumb();
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateThumb);
    updateThumb();
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumb);
    };
  }, [updateThumb, showThumb]);

  // Drag thumb - mouse
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    setDragging(true);
    dragStartY.current = e.clientY;
    dragStartScroll.current = containerRef.current?.scrollTop ?? 0;
    if (hideTimer.current) clearTimeout(hideTimer.current);

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
      setDragging(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      hideTimer.current = setTimeout(() => setVisible(false), 1500);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  // Drag thumb - touch
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    setDragging(true);
    dragStartY.current = e.touches[0].clientY;
    dragStartScroll.current = containerRef.current?.scrollTop ?? 0;
    if (hideTimer.current) clearTimeout(hideTimer.current);

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !containerRef.current || !trackRef.current || !thumbRef.current) return;
      const { scrollHeight, clientHeight } = containerRef.current;
      const trackHeight = trackRef.current.clientHeight;
      const thumbHeight = thumbRef.current.clientHeight;
      const delta = e.touches[0].clientY - dragStartY.current;
      const scrollRatio = (scrollHeight - clientHeight) / (trackHeight - thumbHeight);
      containerRef.current.scrollTop = dragStartScroll.current + delta * scrollRatio;
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      setDragging(false);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      hideTimer.current = setTimeout(() => setVisible(false), 1500);
    };

    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd);
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
    showThumb();
  }, [showThumb]);

  const baseWidth = isMobile ? 4 : 6;
  const activeWidth = dragging ? Math.round(baseWidth * 1.5) : baseWidth;

  return (
    <div style={{ position: "fixed", top: "65px", left: 0, right: 0, bottom: 0 }}>
      {/* Contenuto scrollabile */}
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          inset: 0,
          overflowY: "scroll",
          overflowX: "hidden",
          background: "var(--bg)",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
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
          bottom: isMobile ? "0px" : "20px",
          width: `${activeWidth}px`,
          cursor: "default",
          transition: "width 0.15s ease",
        }}
      >
        {/* Thumb */}
        <div
          ref={thumbRef}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            borderRadius: "999px",
            background: dragging
              ? "rgba(139, 143, 154, 0.8)"
              : "rgba(139, 143, 154, 0.4)",
            opacity: visible ? 1 : 0,
            transition: `opacity ${visible ? "0.1s" : "0.4s"} ease, background 0.15s ease`,
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            if (!dragging) e.currentTarget.style.background = "rgba(139, 143, 154, 0.7)";
          }}
          onMouseLeave={(e) => {
            if (!dragging) e.currentTarget.style.background = "rgba(139, 143, 154, 0.4)";
          }}
        >
          {/* Area di touch estesa invisibile su mobile */}
          {isMobile && (
            <div
              onTouchStart={onTouchStart}
              style={{
                position: "absolute",
                top: 0,
                left: "-16px",
                right: "-16px",
                bottom: 0,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}