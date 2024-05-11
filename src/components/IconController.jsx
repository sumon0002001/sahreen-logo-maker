import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconListDialog from "./IconListDialog";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [selectedIcon, setSelectedIcon] = useState(storageValue ? storageValue?.icon : "smile");
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#000"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: selectedIcon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, selectedIcon]);

  return (
    <div>
      <div>
        <IconListDialog selectedIcon={(icon) => setSelectedIcon(icon)} />
        <div className="p-3">
          <label className="p-2 flex justify-between my-2 text-sm">
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(e) => setSize(e[0])}
          />
        </div>
        <div className="py-3">
          <label className="p-2 flex justify-between my-2 text-sm">
            Rotate <span>{rotate} °</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(e) => setRotate(e[0])}
          />
        </div>
        <div className="py-3">
          <label className="p-2 flex justify-between my-2 text-sm">
            Border Color
          </label>
          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
