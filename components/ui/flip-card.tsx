"use client";

import React, { useState, useEffect, useRef } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, className }) => {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect touch device on mount
  useEffect(() => {
    setMounted(true);
    // Use a more SSR-safe approach
    const checkTouch = () => {
      if (typeof window !== "undefined") {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
      return false;
    };
    setIsTouch(checkTouch());
  }, []);

  // Keyboard accessibility: flip on Enter/Space
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  // Desktop: flip on hover/focus, Mobile: flip on tap
  const handleClick = () => {
    if (isTouch) setFlipped((f) => !f);
  };
  const handleMouseEnter = () => {
    if (!isTouch) setFlipped(true);
  };
  const handleMouseLeave = () => {
    if (!isTouch) setFlipped(false);
  };
  const handleFocus = () => {
    if (!isTouch) setFlipped(true);
  };
  const handleBlur = () => {
    if (!isTouch) setFlipped(false);
  };

  // SSR-safe: render a placeholder until mounted
  if (!mounted) {
    return (
      <div 
        className={className || ""} 
        style={{ 
          minHeight: 240,
          width: "100%",
          height: "100%",
          display: "block"
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          {front}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`flip-card-outer ${className || ""}`}
      tabIndex={0}
      aria-pressed={flipped}
      aria-label="Flip card"
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        outline: "none",
        width: "100%",
        height: "100%",
        cursor: "pointer",
        display: "block",
        perspective: 1200,
        minHeight: 240,
      }}
    >
      <div
        className="flip-card-inner"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transition: "transform 1.5s cubic-bezier(.4,2,.3,1)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          borderRadius: "inherit",
          boxShadow: "inherit",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="flip-card-front"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "inherit",
            boxShadow: "inherit",
            background: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "box-shadow 0.2s",
            zIndex: 2,
            transform: "rotateY(0deg)",
          }}
        >
          {front}
        </div>
        <div
          className="flip-card-back"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "inherit",
            boxShadow: "inherit",
            background: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "box-shadow 0.2s",
            zIndex: 1,
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 