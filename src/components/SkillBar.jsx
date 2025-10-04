import { useEffect, useRef } from "react";

export default function SkillBar({ name, level }) {
  const barRef = useRef(null);
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transition = "width 800ms ease";
          el.style.width = level + "%";
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [level]);

  return (
    <div className="mb-3" data-reveal>
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="skill-track">
        <div ref={barRef} className="skill-bar" />
      </div>
    </div>
  );
}
