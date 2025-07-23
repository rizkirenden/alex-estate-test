import React from "react";
import { Icon } from "../atoms/Icon";
import { SearchInput } from "../atoms/SearchInput";

import logo from "../../assets/images/mitra.png";
import icon1 from "../../assets/images/sliders-horizontal1.png";
import icon2 from "../../assets/images/list-todo1.png";
import icon3 from "../../assets/images/message-circle-warning1.png";
import icon4 from "../../assets/images/bell-dot1.png";
import profile from "../../assets/images/Ellipse4.png";

export const CardHeader = () => {
  return (
    <div className="flex items-center bg-white shadow-md px-6 py-4 rounded-lg">
      {/* KIRI: Logo */}
      <div className="flex items-center w-1/3">
        <Icon src={logo} alt="Logo" size={300} />
      </div>

      {/* TENGAH: Search + Icon1 + RU */}
      <div className="flex justify-center w-1/2">
        <div className="flex items-center">
          <div>
            <SearchInput className="w-64" />
          </div>
          <div className="flex items-center gap-4">
            <Icon src={icon1} size={20} />
            <span className="text-sm font-semibold text-gray-700">RU</span>
          </div>
        </div>
      </div>

      {/* KANAN: Icon 2–4 + Profile */}
      <div className="flex justify-end items-center space-x-4 w-1/3">
        {/* Icons */}
        <div className="flex items-center space-x-2">
          <Icon src={icon2} size={20} />
          <Icon src={icon3} size={20} />
          <Icon src={icon4} size={20} />
        </div>

        {/* Foto dan nama */}
        <div className="flex items-center space-x-2 px-6">
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
          <div className="text-sm leading-tight">
            <div className="font-medium">John Doe</div>
            <div className="text-gray-500 text-xs">Divisi Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
};
