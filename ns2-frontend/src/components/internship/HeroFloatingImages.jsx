"use client";

import { useEffect, useRef } from "react";

export default function HeroFloatingImages({
  primaryImage,
  secondaryImage,
  overlayTitle,
  overlayDescription,
}) {
  const containerRef = useRef(null);
  const bigCardRef = useRef(null);
  const smallCardRef = useRef(null);
  const rAF = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const big = bigCardRef.current;
    const small = smallCardRef.current;
    if (!container || !big || !small) return;

    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) / rect.width;
      mouseY = (e.clientY - cy) / rect.height;
    }

    function animate() {
      lastX += (mouseX - lastX) * 0.08;
      lastY += (mouseY - lastY) * 0.08;

      const bgX = lastX * 18;
      const bgY = lastY * 18;
      const smX = lastX * 36;
      const smY = lastY * 36;

      big.style.transform = `translate3d(${bgX}px, ${bgY}px, 0) rotate(${lastX * 2}deg)`;
      small.style.transform = `translate3d(${smX}px, ${smY}px, 0) rotate(${lastX * 4}deg)`;

      rAF.current = requestAnimationFrame(animate);
    }

    container.addEventListener("mousemove", onMove);
    rAF.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", onMove);
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl md:max-w-2xl h-[28rem] md:h-[32rem] flex items-center justify-center"
    >
      {/* Big card (Hero Image 1) */}
      <div
        ref={bigCardRef}
        className="absolute w-[26rem] sm:w-[30rem] h-[18rem] sm:h-[20rem] rounded-2xl bg-white shadow-2xl border border-gray-100 flex items-center justify-center"
      >
        {primaryImage ? (
          <img
            src={primaryImage}
            alt={overlayTitle ?? "Hero image 1"}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="text-xl font-semibold text-sky-600">Hero Image 1</div>
        )}
      </div>

      {/* Small card (Hero Image 2) */}
      <div
        ref={smallCardRef}
        className="absolute right-10 bottom-10 w-56 h-32 rounded-xl shadow-lg flex items-center justify-center overflow-hidden border border-slate-800 bg-slate-900/95"
      >
        {secondaryImage ? (
          <img
            src={secondaryImage}
            alt="Hero image 2"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-base text-center text-white">
            <div className="font-semibold">
              {overlayTitle ?? "Hero Image 2"}
            </div>
            <div className="text-sm text-slate-300">
              {overlayDescription ?? "Overlay"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
