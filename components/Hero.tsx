export default function Hero() {
  return (
    <>
      <style>{`
        .hero-inner {
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 130px;
          padding-bottom: 160px;
        }
        .hero-inner h1 {
          font-size: 40px;
        }
        .hero-inner p {
          font-size: 14px;
        }
        @media (min-width: 768px) {
          .hero-inner {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 100px;
          }
          .hero-inner h1 {
            font-size: 45px;
          }
          .hero-inner p {
            font-size: 15px;
          }
        }
        @media (min-width: 1024px) {
          .hero-inner {
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 140px;
            padding-bottom: 160px;
          }
          .hero-inner h1 {
            font-size: 50px;
          }
          .hero-inner p {
            font-size: 16px;
          }
        }
        @media (min-width: 1280px) {
          .hero-inner {
            padding-left: 80px;
            padding-right: 80px;
            padding-top: 180px;
            padding-bottom: 180px;
          }
          .hero-inner h1 {
            font-size: 60px;
          }
          .hero-inner p {
            font-size: 17px;
          }
        }
        .hero-inner h1,
        .hero-inner p {
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }
        .hero-inner p {
          margin-top: 17px;
        }
        @media (min-width: 768px) {
          .hero-inner p {
            margin-top: 18px;
          }
        }
        @media (min-width: 1024px) {
          .hero-inner p {
            margin-top: 19px;
          }
        }
        @media (min-width: 1280px) {
          .hero-inner p {
            margin-top: 20px;
          }
        }
      `}</style>
      <section className="hero-inner">
        <h1
          style={{
            color: "var(--text-primary)",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ display: "block" }}>
            Your AI agent runs the work.
          </span>
          <span style={{ display: "block" }}>
            You run the vision.
          </span>
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          Built for freelancers who move fast and think bigger.
        </p>
      </section>
    </>
  );
}