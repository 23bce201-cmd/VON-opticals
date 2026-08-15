import logoUrl from "../photos/logoNoBG.png";

const DURATION = 3500; // ms

export default function SplashScreen() {
  return (
    <>
      <style>{`
        .sp-wrap {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #253A79;
          gap: 0px;
          animation: spSlideOutLeft 0.56s cubic-bezier(0.76, 0, 0.24, 1) ${(DURATION - 560) / 1000}s forwards;
        }
        @keyframes spSlideOutLeft {
          to { transform: translateX(-100%); pointer-events: none; }
        }

        /* Logo revealed left → right by a moving clip edge */
        .sp-logo {
          width: min(480px, 82vw);
          height: auto;
          display: block;
          filter: brightness(0) invert(1);
          clip-path: inset(0 100% 0 0);
          animation: spWipe 1.3s cubic-bezier(0.4, 0, 0.15, 1) 0.25s forwards;
        }
        @keyframes spWipe {
          to { clip-path: inset(0 0% 0 0); }
        }

        .sp-tag {
          font-family: Inter, system-ui, sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          margin-top: -30px;
          color: rgba(255, 255, 255, 0.4);
          opacity: 0;
          animation: spTagIn 0.5s ease 1.5s forwards;
        }
        @keyframes spTagIn {
          to { opacity: 1; }
        }
      `}</style>

      <div className="sp-wrap">
        <img src={logoUrl} alt="VON Opticals" className="sp-logo" />
        <span className="sp-tag">Designer Eyewear · Ahmedabad</span>
      </div>
    </>
  );
}
