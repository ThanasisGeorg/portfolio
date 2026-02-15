"use client";

import { useEffect, useState } from "react";
import { Label } from "../ui/label";

export function Typewriter({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <Label className="text-5xl md:text-8xl h-48 text-center font-semibold text-shadow-lg">
      <span className="inline whitespace-pre-wrap wrap-break-word">
        {/*">"*/} {displayedText}
        <span className="inline-block animate-pulse select-none">_</span>
      </span>
    </Label>
  );
}
