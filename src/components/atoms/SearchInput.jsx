import React from "react";

export const SearchInput = ({ placeholder = "Search...", className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};
