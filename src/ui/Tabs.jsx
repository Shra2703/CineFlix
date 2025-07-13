import { useState } from "react";
import Divider from "./Divider";

const Tabs = ({ tabs, classname = "" }) => {
  const firstAvailableTab = tabs.find((tab) => tab.obj?.length !== 0);
  const [activeTab, setActiveTab] = useState(firstAvailableTab?.id);
  console.log(tabs)
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };
  return (
    <div>
      <div
        className={
          "flex gap-10 font-[600] text-xl  mb-9 text-gray-400  transition-all duration-500 " +
          classname
        }
      >
        {tabs.map(
          (tab, index) =>
            tab.obj?.length !== 0 && (
              <span
                className={`cursor-pointer hover:text-white transition-all duration-500 ${
                  activeTab === tab.id && "text-white"
                }`}
                onClick={() => handleScroll(tab.id)}
                key={index}
              >
                {tab.type}
              </span>
            )
        )}
      </div>
      {tabs.length > 0 && <Divider /> }
    </div>
  );
};

export default Tabs;
