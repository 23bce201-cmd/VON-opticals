import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer-capable (non-touch) devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let rafId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ringRef.current?.classList.add("cursor-visible");
      dotRef.current?.classList.add("cursor-visible");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("cursor-visible");
      dotRef.current?.classList.remove("cursor-visible");
    };

    const onDown = () => ringRef.current?.classList.add("cursor-pressed");
    const onUp = () => ringRef.current?.classList.remove("cursor-pressed");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-ring,
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999;
          opacity: 0;
          transition: opacity 0.3s ease;
          will-change: transform;
        }
        .cursor-ring.cursor-visible,
        .cursor-dot.cursor-visible {
          opacity: 1;
        }
        .cursor-ring {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 0;
          transition: opacity 0.3s ease, transform 0s, width 0.18s ease, height 0.18s ease;
        }
        .cursor-ring.cursor-pressed {
          width: 28px;
          height: 28px;
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          background: #FF4A1C;
          border-radius: 0;
          transition: opacity 0.3s ease, transform 0s;
        }

        @media not all and (hover: hover) {
          .cursor-ring, .cursor-dot { display: none; }
        }
      `}</style>
    </>
  );
}
