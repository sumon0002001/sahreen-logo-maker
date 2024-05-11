import React, { useState, useEffect, useContext } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";

const LogoPlayground = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      console.log("btn is cicked");
    }
  }, [downloadIcon]);

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: ` rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="items-center justify-center flex h-screen border shadow-md">
      <div
        className="bg-gray-300  w-[400px] h-[400px]  outline-dashed outline-gray-600"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          className="flex items-center justify-center bg-transparent h-full w-full"
          style={{
            borderRadius: storageValue?.bgRounded,

            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPlayground;
