import React from "react";

export const ProgressBar = ({ value = 0, max = 100, color = "blue" }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className={`h-full bg-${color}-500 transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
