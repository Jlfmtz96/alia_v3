"use client";

import { useState, useEffect } from "react";

interface MouseCircleProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const MouseCircle = ({ containerRef }: MouseCircleProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<"<" | ">">(">");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        setIsVisible(isInside);

        if (isInside) {
          setPosition({ x: event.clientX, y: event.clientY });
          const viewportWidth = rect.width;
          const relativeX = event.clientX - rect.left;
          setDirection(relativeX < viewportWidth / 2 ? "<" : ">");
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>{direction}</span>
    </div>
  );
};

export default MouseCircle;