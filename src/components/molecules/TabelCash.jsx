import React from "react";
import { Label } from "../atoms/Label";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../atoms/ProgressBar";
import { Button } from "../atoms/Button";

import icon1 from "../../assets/images/receipt-text1.png";
import icon2 from "../../assets/images/banknote-arrow-up21.png";
import icon3 from "../../assets/images/banknote-arrow-down1.png";
import icon4 from "../../assets/images/hand-coins1.png";
import icon5 from "../../assets/images/hand-coins1.png";
import icon6 from "../../assets/images/hand-coins1.png";
import icon7 from "../../assets/images/hand-coins1.png";
import icon8 from "../../assets/images/hand-coins1.png";
import icon9 from "../../assets/images/hand-coins1.png";
import icon10 from "../../assets/images/hand-coins1.png";

export const TabelCash = () => {
  const Cash = [
    { icon: icon1, label: "Стоимость", amount: "5 000 000 000 Rp" },
    { icon: icon2, label: "Оплачено", amount: "140 000 000 Rp" },
    { icon: icon3, label: "Прямые расходы", amount: "3 500 000 000 Rp" },
    { icon: icon4, label: "Валовая прибыль", amount: "1 500 000 000 Rp" },
    { icon: icon5, label: "Баланс", amount: "-1 360 000 000 Rp" },
    { icon: icon6, label: "Штраф на сегодня", amount: "0 Rp" },
    { icon: icon7, label: "За 1 день просрочки", amount: "50 000 000 Rp" },
    { icon: icon8, label: "Максимально", amount: "500 000 000 Rp" },
    { icon: icon9, label: "Максимально", amount: "500 000 000 Rp" },
    { icon: icon10, label: "Максимально", amount: "500 000 000 Rp" },
  ];

  return <div></div>;
};
