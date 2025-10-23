"use client";

import { useEffect, useState } from "react";
import Sparkle from "./Sparkle";

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = {
        id: Date.now(),
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 2 + "s",
        size: Math.random() * 0.5 + 0.5,
      };

      setSparkles((prev) => [...prev, sparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 3000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.animationDelay,
            transform: `scale(${sparkle.size})`,
          }}
        />
      ))}
    </>
  );
}
