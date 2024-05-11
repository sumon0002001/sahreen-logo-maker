import React, { useState } from "react";
import { icons, Smile } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icons";

const IconListDialog = ({ selectedIcon }) => {
  const [openList, setOpenList] = useState(false);
  const [icon, setIcon] = useState("Anchor");

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div>
      <div>
        <label>Icon</label>

        <div
          onClick={() => setOpenList(true)}
          className="p-3 cursor-pointer bg-gray-300 rounded-md 
 w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          <Icon name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={openList}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Icon</DialogTitle>
            <DialogDescription className="overflow-auto h-[400px]">
              <div
                className="grid grid-cols-2 md:grid-cols-4
                 gap-4 lg:grid-cols-5 p-6 "
              >
                {iconList.map((icon, index) => (
                  <div
                    className="p-3 border flex rounded-sm 
                         items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setIcon(icon);
                      setOpenList(false);
                    }}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconListDialog;
