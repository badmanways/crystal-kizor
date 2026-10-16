"use client";

import React, { useState } from "react";
import { ImageIcon } from "lucide-react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export default function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  objectPosition = "center",
  fallbackLabel,
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#E4E0D8] border border-[#BFB9AC]/60 text-[#605D57] overflow-hidden select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(#3F5243 0.75px, transparent 0.75px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
          <ImageIcon className="w-6 h-6 text-[#3F5243] stroke-[1.5]" />
          <span className="text-xs font-medium tracking-wider uppercase text-[#1C1B19]">
            {fallbackLabel || alt}
          </span>
          <span className="text-[11px] text-[#605D57] font-mono">
            {src || "Asset placeholder"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => setHasError(true)}
        style={{ objectPosition }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

