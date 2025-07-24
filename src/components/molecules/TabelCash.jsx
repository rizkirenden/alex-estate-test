import React from "react";
import { Label } from "../atoms/Label";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../atoms/ProgressBar";

import icon1 from "../../assets/images/receipt-text1.png";
import icon2 from "../../assets/images/banknote-arrow-up21.png";
import icon3 from "../../assets/images/banknote-arrow-down1.png";
import icon4 from "../../assets/images/hand-coins1.png";
import icon5 from "../../assets/images/banknote1.png";
import icon6 from "../../assets/images/banknote1.png";
import icon7 from "../../assets/images/banknote1.png";
import icon8 from "../../assets/images/banknote1.png";
import icon9 from "../../assets/images/target1.png";
import icon10 from "../../assets/images/activity1.png";
import icon11 from "../../assets/images/funnel4.png";
import icon12 from "../../assets/images/chart-column-increasing1.png";

export const TabelCash = () => {
  const Cash = [
    {
      icon: icon1,
      label: "Всего контрактов на сумму",
      amount: "5 000 000 000 Rp",
    },
    { icon: icon2, label: "Оплачено", amount: "140 000 000 Rp" },
    {
      icon: icon3,
      label: "Всего оплачено клиентами",
      amount: "3 500 000 000 Rp",
    },
    { icon: icon4, label: "Всего прямых расходов", amount: "1 500 000 000 Rp" },
    {
      icon: icon5,
      label: "Всего валовой прибыли",
      amount: "-1 360 000 000 Rp",
    },
    { icon: icon6, label: "Баланс клиентов", amount: "0 Rp" },
    { icon: icon7, label: "Баланс компании", amount: "50 000 000 Rp" },
    {
      icon: icon8,
      label: "Баланс компании и клиентов",
      amount: "500 000 000 Rp",
    },
    { icon: icon9, label: "Баланс в банке", amount: "500 000 000 Rp" },
    { icon: icon10, label: "Максимально", amount: "500 000 000 Rp" },
    { icon: icon11, label: "Максимально", amount: "500 000 000 Rp" },
  ];

  const col1 = Cash.slice(0, 4);
  const col2 = Cash.slice(4, 8);
  const col3 = Cash.slice(8, 11);

  const renderCol = (items, isCenter = false) =>
    items.map((item, index) => (
      <div
        key={index}
        className={`flex items-center justify-between gap-2 ${
          isCenter ? "text-base" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <Icon src={item.icon} size={isCenter ? 18 : 15} />
          <Label className={isCenter ? "text-base font-semibold" : "text-sm"}>
            {item.label}
          </Label>
        </div>
        <Label
          className={`text-xs font-bold text-black ${
            isCenter ? "text-sm" : ""
          }`}
        >
          {item.amount}
        </Label>
      </div>
    ));

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex gap-6">
        {/* Kolom 1 */}
        <div className="flex flex-col gap-4 w-1/4">{renderCol(col1)}</div>

        {/* Kolom 2 */}
        <div className="flex flex-col gap-4 w-1/4">{renderCol(col2)}</div>

        {/* Kolom 3 */}
        <div className="flex flex-col gap-4 w-1/4 mt-6">{renderCol(col3)}</div>

        {/* Kolom 4: Progress */}
        <div className="flex flex-col gap-3 w-1/4 justify-between">
          <div className="flex gap-2 items-center justify-between">
            <Icon src={icon12} size={20} />
            <div className="flex flex-col leading-tight">
              <Label className="text-sm font-semibold">Выполненный объем</Label>
              <Label className="text-xs text-gray-600">
                по контрактам с клиентами
              </Label>
            </div>
          </div>

          <ProgressBar value={20} max={100} color="blue" className="w-full" />

          <div className="flex justify-between text-sm font-medium">
            <Label className="text-gray-800">1 319 500 000 Rp</Label>
            <Label className="text-blue-600">20%</Label>
          </div>
        </div>
      </div>
    </div>
  );
};
