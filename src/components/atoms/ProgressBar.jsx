import React from "react";
import clsx from "clsx";

export const ProgressBar = ({
  value = 0,
  max = 100,
  color = "blue",
  className = "",
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    gray: "bg-gray-500",
  };

  return (
    <div
      className={clsx(
        "bg-gray-200 rounded-full h-3 overflow-hidden",
        className
      )}
    >
      <div
        className={clsx(
          "h-full transition-all duration-300",
          colorClasses[color]
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
