import React from "react";

export const Icon = ({ src, alt = "", size = 24, className = "" }) => {
  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};
