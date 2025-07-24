import React, { useState } from "react";
import { Button } from "../atoms/Button";

export const ButtonSell = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const buttons = [
    { label: "транзакции", color: "bg-blue-600 hover:bg-blue-700 text-white" },
    { label: "Полученные", color: "bg-red-600 hover:bg-red-700 text-white" },
    {
      label: "В ожидании",
      color: "bg-yellow-400 hover:bg-yellow-500 text-black",
    },
    {
      label: "Создать транзакцию",
      color: "bg-yellow-400 hover:bg-green-500 text-black",
    },
  ];

  return (
    <div className="flex gap-3">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`transition px-4 py-2 rounded 
              ${
                activeIndex === index
                  ? btn.color
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};
