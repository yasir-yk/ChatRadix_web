import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
}

export default function Logo({ 
  className = "", 
  imgClassName = "",
  width = 240,
  height = 140
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="ChatRadix Logo"
        width={width}
        height={height}
        priority
        className={`w-[180px] h-[75px] sm:w-[220px] sm:h-[90px] object-contain ${imgClassName}`}
      />
    </div>
  );
}
