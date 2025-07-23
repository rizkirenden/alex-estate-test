import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Label } from "../atoms/Label";
import { ProgressBar } from "../atoms/ProgressBar";
import { Icon } from "../atoms/Icon";

import icon1 from "../../assets/images/receipt-text1.png";
import icon2 from "../../assets/images/banknote-arrow-up21.png";
import icon3 from "../../assets/images/banknote-arrow-down1.png";
import icon4 from "../../assets/images/hand-coins1.png";
import icon5 from "../../assets/images/banknote1.png";
import icon6 from "../../assets/images/triangle-alert2.png";
import icon7 from "../../assets/images/triangle-alert2.png";
import icon8 from "../../assets/images/triangle-alert2.png";

export const CardProduction = () => {
  const financialDetails = [
    { icon: icon1, label: "Стоимость", amount: "5 000 000 000 Rp" },
    { icon: icon2, label: "Оплачено", amount: "140 000 000 Rp" },
    { icon: icon3, label: "Прямые расходы", amount: "3 500 000 000 Rp" },
    { icon: icon4, label: "Валовая прибыль", amount: "1 500 000 000 Rp" },
    { icon: icon5, label: "Баланс", amount: "-1 360 000 000 Rp" },
    { icon: icon6, label: "Штраф на сегодня", amount: "0 Rp" },
    { icon: icon7, label: "За 1 день просрочки", amount: "50 000 000 Rp" },
    { icon: icon8, label: "Максимально", amount: "500 000 000 Rp" },
  ];

  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 w-full max-w-md">
      <div className="bg-[#1F2937] text-white px-4 py-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">PT Amadeus Rock Reality</h3>
        <MoreHorizontal className="w-5 h-5 text-white cursor-pointer" />
      </div>

      <div className="bg-white px-4 py-5 space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-bold text-black">Контракт</Label>
          <Label className="text-sm font-bold text-black">
            001-06/IV/MBI-2025
          </Label>
        </div>
        <div className="flex items-center justify-between">
          <Label className="text-xs font-bold text-black">
            Старт / завершение
          </Label>
          <Label className="text-xs font-bold text-black">
            25.01.2024 - 25.01.2025
          </Label>
        </div>

        <div className="w-full">
          <ProgressBar value={20} max={100} color="blue" className="w-full" />
          <div className="flex justify-between mt-1">
            <Label className="text-xs font-bold text-black">BAST</Label>
            <Label className="text-xs font-bold text-black">20%</Label>
          </div>
        </div>

        <div className="w-full">
          <ProgressBar value={80} max={100} color="red" className="w-full" />
          <div className="flex justify-between mt-1">
            <Label className="text-xs font-bold text-black">
              Всего - прошло - осталось
            </Label>
            <div className="flex space-x-3">
              <Label className="text-xs font-medium text-gray-400 opacity-50">
                365
              </Label>
              <Label className="text-xs font-medium text-gray-400 opacity-50">
                215
              </Label>
              <Label className="text-xs font-bold text-gray-400">150</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {financialDetails.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon src={item.icon} size={15} />
                <Label className="text-xs text-black">{item.label}</Label>
              </div>
              <Label className="text-xs text-black">{item.amount}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
