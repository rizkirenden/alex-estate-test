import React from "react";
import { Icon } from "../atoms/Icon";
import { Label } from "../atoms/Label";

import logo from "../../assets/images/mitra.png";
import icon1 from "../../assets/images/sliders-horizontal1.png";
import icon2 from "../../assets/images/list-todo1.png";
import icon3 from "../../assets/images/message-circle-warning1.png";
import icon4 from "../../assets/images/bell-dot1.png";
import profile from "../../assets/images/Ellipse4.png";

export const CardHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-lg">
      <div className="flex items-center space-x-2 ml-8">
        <Icon src={logo} alt="Logo" size={350} />
        <div className="flex items-center ml-6 space-x-3">
          <Label className="text-sm font-medium text-gray-400 opacity-60">
            Поиск по разделу ...
          </Label>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-9">
          <Icon src={icon1} size={20} />
          <Label className="text-sm font-semibold text-gray-700">RU</Label>
        </div>

        <div className="flex items-center space-x-6">
          <Icon src={icon2} size={20} />
          <Icon src={icon3} size={20} />
          <Icon src={icon4} size={20} />
        </div>

        <div className="flex items-center space-x-2 mr-8">
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
          <div className="text-sm leading-tight">
            <div className="font-medium">Moh Rizki</div>
            <div className="text-gray-500 text-xs">IT-FullStack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
