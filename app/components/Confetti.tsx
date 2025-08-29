"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#00bfff", "#1e90ff", "#87cefa", "#add8e6", "#4682b4"]
    });
  }, []);

  return null; 
}
