import React from "react";

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded transition ${className}`}
    >
      {children}
    </button>
  );
};
