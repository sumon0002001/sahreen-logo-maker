import React, { useState } from "react";

const SideNav = ({ selectedIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "Icon",
    },
    {
      id: 2,
      name: "Background",
    },
    {
      id: 3,
      name: "Upgrade",
    },
  ];
  return (
    <div className="border shadow-md h-screen flex flex-col">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            key={index}
            className={`p-2 text-lg px-7 text-gray-400 my-2 cursor-pointer hover:bg-primary hover:text-white ${
              activeIndex == index && "bg-primary text-white"
            }`}
          >
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
