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
    <Label className="mx-auto block min-h-28 max-w-5xl text-center text-4xl leading-tight font-semibold md:min-h-36 md:text-7xl">
      <span className="inline whitespace-pre-wrap wrap-break-word">
        {displayedText}
        <span className="inline-block animate-pulse select-none text-primary">|</span>
      </span>
    </Label>
  );
}
