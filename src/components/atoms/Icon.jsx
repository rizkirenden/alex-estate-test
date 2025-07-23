import React from "react";

export const Icon = ({ icon: IconComponent, size = 24, className = "" }) => {
  return IconComponent ? (
    <IconComponent size={size} className={className} />
  ) : null;
};
