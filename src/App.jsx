import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPlayground from "./components/LogoPlayground";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(e) => setSelectedIndex(e)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="col-span-3 ">
            <LogoPlayground downloadIcon={downloadIcon} />
          </div>
          <div className="col-span-1">body3</div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
};

export default Home;
