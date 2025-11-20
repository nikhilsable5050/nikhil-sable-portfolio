import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track mouse
  useEffect(() => {
    const moveHandler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  // Smooth trailing
  useEffect(() => {
    const animation = () => {
      setCursorPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25, // slightly faster trailing
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      requestAnimationFrame(animation);
    };
    animation();
  }, [position]);

  // Hover effect on links/buttons
  useEffect(() => {
    const addHover = () => setScale(1.8);
    const removeHover = () => setScale(1);
    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${cursorPos.x - 25}px, ${cursorPos.y - 25}px) scale(${scale})`,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.8) 20%, rgba(255,0,150,0.4) 60%, rgba(0,0,255,0.1) 100%)",
        filter: "blur(15px)",
        transition: "transform 0.1s ease-out",
        animation: "pulse 0.6s infinite ease-in-out", // faster pulse
      }}
    />
  );
}
