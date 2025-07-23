import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Icon } from "../atoms/Icon";

// Menu utama & child icons
import dashboardIcon from "../../assets/images/arrow-right-left1.png";
import overviewIcon from "../../assets/images/banknote1.png";
import statsIcon from "../../assets/images/lamp-desk21.png";
import activityIcon from "../../assets/images/calendar-clock11.png";

import profileIcon from "../../assets/images/slack1.png";
import editProfileIcon from "../../assets/images/puzzle1.png";
import accountSettingsIcon from "../../assets/images/send-to-back1.png";
import privacyIcon from "../../assets/images/hard-hat1.png";
import dailyIcon from "../../assets/images/ruler-dimension-line1.png";
import rolesIcon from "../../assets/images/signature1.png";

import settingsIcon from "../../assets/images/user-check1.png";
import systemIcon from "../../assets/images/chart-line1.png";
import preferencesIcon from "../../assets/images/chart-network1.png";
import notificationsIcon from "../../assets/images/chart-bar-stacked1.png";

import menuicon3 from "../../assets/images/hand-coins1.png";
import menuicon4 from "../../assets/images/triangle-alert2.png";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleClick = (menu, child) => {
    console.log(`Clicked ${menu}${child ? ` > ${child}` : ""}`);
  };

  const menuItems = [
    {
      name: "Menu 1",
      icon: null,
      children: [
        { name: "Dashboard", icon: dashboardIcon },
        { name: "Overview", icon: overviewIcon },
        { name: "Stats", icon: statsIcon },
        { name: "Activity", icon: activityIcon },
      ],
    },
    {
      name: "Menu 2",
      icon: null,
      children: [
        { name: "Profile", icon: profileIcon },
        { name: "Edit Profile", icon: editProfileIcon },
        { name: "Account Settings", icon: accountSettingsIcon },
        { name: "Privacy", icon: privacyIcon },
        { name: "Daily", icon: dailyIcon },
        { name: "Roles", icon: rolesIcon },
      ],
    },
    {
      name: "Menu 3",
      icon: null,
      children: [{ name: "menu child 3", icon: menuicon3 }],
    },
    {
      name: "Menu 4",
      icon: null,
      children: [{ name: "menu child 4", icon: menuicon4 }],
    },
    {
      name: "Menu 5",
      icon: null,
      children: [
        { name: "Settings", icon: settingsIcon },
        { name: "System", icon: systemIcon },
        { name: "Preferences", icon: preferencesIcon },
        { name: "Notifications", icon: notificationsIcon },
      ],
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white transition-all duration-300 h-screen overflow-hidden`}
      >
        <div className="px-3 py-6">
          {/* Sidebar Header */}
          <div className="flex items-center space-x-2 mb-4">
            <button onClick={toggleSidebar}>
              <Menu className="w-6 h-6 text-white" />
            </button>
            {isOpen && <h2 className="text-lg font-bold">EURASTROY V 1.0</h2>}
          </div>

          <hr className="border-t border-white/20 mb-4" />

          <ul className="space-y-2">
            {menuItems.map((menu) => (
              <li key={menu.name}>
                <div
                  onClick={() =>
                    isOpen ? toggleDropdown(menu.name) : handleClick(menu.name)
                  }
                  className="flex justify-between items-center hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    {/* Tampilkan icon anak pertama saat sidebar ditutup */}
                    {!isOpen && menu.children?.[0]?.icon && (
                      <Icon src={menu.children[0].icon} size={20} />
                    )}

                    {/* Saat terbuka, pakai icon utama jika ada */}
                    {isOpen && menu.icon && <Icon src={menu.icon} size={20} />}

                    {/* Label menu hanya muncul saat sidebar terbuka */}
                    {isOpen && <span>{menu.name}</span>}
                  </div>

                  {/* Arrow hanya saat sidebar terbuka */}
                  {isOpen && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdowns[menu.name] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown Children */}
                {isOpen &&
                  menu.children &&
                  openDropdowns[menu.name] &&
                  menu.children.length > 0 && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {menu.children.map((child) => {
                        const isMainItem = [
                          "Dashboard",
                          "Profile",
                          "Settings",
                          "menu child 3",
                          "menu child 4",
                        ].includes(child.name);
                        return (
                          <li
                            key={child.name}
                            onClick={() => handleClick(menu.name, child.name)}
                            className={`hover:bg-gray-700 px-3 py-1 rounded cursor-pointer flex items-center space-x-2 ${
                              isMainItem ? "text-[20px] font-medium" : "text-sm"
                            }`}
                          >
                            <Icon
                              src={child.icon}
                              size={isMainItem ? 18 : 16}
                            />
                            <span>{child.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
