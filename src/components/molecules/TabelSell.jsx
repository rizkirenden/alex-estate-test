import React from "react";
import { Icon } from "../atoms/Icon";
import { Label } from "../atoms/Label";

import icon1 from "../../assets/images/hard-hat22.png";
import icon2 from "../../assets/images/drill1.png";
import icon3 from "../../assets/images/cuboid1.png";
import icon4 from "../../assets/images/funnel4.png";
import icon5 from "../../assets/images/file-check-21.png";
import icon6 from "../../assets/images/file-question-mark1.png";
import icon7 from "../../assets/images/file-question-mark1.png";
import icon8 from "../../assets/images/file-question-mark1.png";
import icon9 from "../../assets/images/user-plus1.png";
import icon10 from "../../assets/images/message-square-text1.png";
import icon11 from "../../assets/images/square-pen1.png";
import icon12 from "../../assets/images/trash-21.png";
import icon13 from "../../assets/images/calendar-fold1.png";

export const TabelSell = () => {
  const headers = [
    "Номер контракта",
    "Сумма контракта",
    "Название проекта",
    "Оплачено",
    "Сотрудник",
    "Назначение",
    "Отправитель",
    "Получатель",
    "Сумма оплаты",
    "Дата оплаты",
    "Документы",
    "Настройки",
  ];

  const dummyData = [
    {
      no: "001-06/IV/MBI-2025",
      nama: "8 000 000 000 Rp",
      kategori: "PT Alex Estate Product...",
      harga: "180 000 000 Rp",
      stok: "Alex Sanbayev",
      terjual: "KBLI 78932",
      tanggal: "Mandiri 012356...",
      supplier: "Mandiri 012356...",
      diskon: "15 800 000 Rp",
      aksi: "Edit",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-md shadow border">
      <div className="bg-[#1F2937] text-white px-4 py-3 flex items-center justify-between rounded-t-md">
        <span className="text-sm font-semibold">
          Внесение денежных средств по контракту
        </span>
        <div className="flex items-center gap-4">
          <Icon src={icon1} size={10} />
          <Icon src={icon2} size={10} />
          <Icon src={icon3} size={10} />
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-xs text-gray-800">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left border-b border-gray-200"
              >
                <div className="flex items-center gap-2">
                  {header}
                  <Icon src={icon4} size={10} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 text-sm">
              <td className="px-4 py-2 border-b text-xs">{row.no}</td>
              <td className="px-4 py-2 border-b text-xs">{row.nama}</td>
              <td className="px-4 py-2 border-b text-xs">{row.kategori}</td>
              <td className="px-4 py-2 border-b text-xs">{row.harga}</td>
              <td className="px-4 py-2 border-b text-xs">{row.stok}</td>
              <td className="px-4 py-2 border-b text-xs">{row.terjual}</td>
              <td className="px-4 py-2 border-b text-xs">{row.tanggal}</td>
              <td className="px-4 py-2 border-b text-xs">{row.supplier}</td>

              <td className="px-4 py-2 border-b font-bold text-xs">
                {row.diskon}
              </td>

              <td className="px-4 py-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex items-center h-full gap-[2px]">
                    <Icon src={icon13} size={18} />
                  </div>
                  <div className="flex flex-col items-start">
                    <Label className="text-[10px]">3Q 2025</Label>
                    <Label className="text-xs">25.05.2025</Label>
                  </div>
                </div>
              </td>

              <td className="px-4 py-2 border-b">
                <div className="flex items-center text-yellow-400 gap-[2px]">
                  <Icon src={icon5} size={12} />
                  <Icon src={icon6} size={12} />
                  <Icon src={icon7} size={12} />
                  <Icon src={icon8} size={12} />
                </div>
              </td>

              <td className="px-4 py-2 border-b">
                <div className="flex items-center gap-2 text-blue-600">
                  <Icon src={icon9} size={12} />
                  <Icon src={icon10} size={12} />
                  <Icon src={icon11} size={12} />
                  <Icon src={icon12} size={12} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
