import { useState } from "react";
import menu from "../../assets/menu.png";
import plus from "../../assets/plus.png";
import message from "../../assets/message.png";
import question from "../../assets/question.png";
import setting from "../../assets/setting.png";
import history from "../../assets/history.png";

const Sidebar = () => {
  const [Extended, setExtended] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(""); // Track hovered icon

  const tooltipPosition = Extended ? 'translateX(100%)' : 'translateX(50px)';

  return (
    <div className="h-screen flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px] relative">
      {/* Top section with menu and new chat */}
      <div className="top">
        {/* Menu Icon */}
        <div className="relative">
          <img
            onClick={() => setExtended((prev) => !prev)}
            src={menu}
            alt="menu-img"
            className="w-[20px] block ml-[10px] cursor-pointer"
            onMouseEnter={() => setHoveredIcon("Menu")}
            onMouseLeave={() => setHoveredIcon("")}
          />
          {/* Tooltip for Menu Icon */}
          {hoveredIcon === "Menu" && (
            <div
              className={`absolute bg-white text-black text-[12px] p-[5px] rounded-md shadow-md z-10`}
              style={{ width: "100px", transform: tooltipPosition }}
            >
              {Extended ? "Collapse Menu" : "Expand Menu"}
            </div>
          )}
        </div>

        {/* New Chat button */}
        <div
          className="relative inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e5eaf1] rounded-[50px] text-[14px] text-gray-500 cursor-pointer mt-[30px]"
          onMouseEnter={() => setHoveredIcon("New Chat")}
          onMouseLeave={() => setHoveredIcon("")}
        >
          <img src={plus} alt="plus" className="w-[20px]" />
          {Extended && <p>New Chat</p>}
          {/* Tooltip for New Chat */}
          {hoveredIcon === "New Chat" && (
            <div className="absolute bg-white text-black text-[12px] p-[5px] rounded-md shadow-md z-10" 
              style={{ transform: tooltipPosition }}>
              New Chat
            </div>
          )}
        </div>

        {/* Recent Chats */}
        {Extended && (
          <div className="flex flex-col recent">
            <p className="mt-[30px] mb-[20px]">Recent</p> {/* recent-title */}
            <div
              className="relative flex items-center gap-[10px] py-[10px] pl-[10px] pr-[20px] rounded-[50px] bg-transparent hover:bg-[#e2e6eb] text-[#282828] cursor-pointer"
              onMouseEnter={() => setHoveredIcon("Recent Chats")}
              onMouseLeave={() => setHoveredIcon("")}
            >
              <img src={message} alt="message" className="w-[20px]" />
              <p>{Extended ? "what is react..." : null}</p>
              {hoveredIcon === "Recent Chats" && !Extended && (
                <div className="absolute bg-white text-black text-[12px] p-[5px] rounded-md shadow-md z-10"
                  style={{ transform: tooltipPosition }}>
                  Recent Chats
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom section */}
      <div className="flex flex-col ">
        {/* Help */}
        <div
          className="relative flex items-center gap-[10px] py-[10px] pl-[10px] pr-[20px] rounded-[50px] bg-transparent hover:bg-[#e2e6eb] text-[#282828] cursor-pointer"
          onMouseEnter={() => setHoveredIcon("Help")}
          onMouseLeave={() => setHoveredIcon("")}
        >
          <img src={question} alt="question" className="w-[20px]" />
          <p>{Extended ? "Help" : null}</p>
          {/* Tooltip for Help */}
          {hoveredIcon === "Help" && (
            <div className="absolute bg-white text-black text-[12px] p-[5px] rounded-md shadow-md z-10"
              style={{ transform: tooltipPosition }}>
              Help
            </div>
          )}
        </div>

        {/* Activity */}
        <div
          className="relative flex items-center gap-[10px] py-[10px] pl-[10px] pr-[20px] rounded-[50px] bg-transparent hover:bg-[#e2e6eb] text-[#282828] cursor-pointer"
          onMouseEnter={() => setHoveredIcon("Activity")}
          onMouseLeave={() => setHoveredIcon("")}
        >
          <img src={history} alt="history" className="w-[20px]" />
          <p>{Extended ? "Activity" : null}</p>
          {/* Tooltip for Activity */}
          {hoveredIcon === "Activity" && (
            <div className="absolute bg-white text-black text-[12px] p-[5px] rounded-md shadow-md z-10"
              style={{ transform: tooltipPosition }}>
              Activity
            </div>
          )}
        </div>

        {/* Settings */}
        <div
          className="relative flex items-center gap-[10px] py-[10px] pl-[10px] pr-[20px] rounded-[50px] bg-transparent hover:bg-[#e2e6eb] text-[#282828] cursor-pointer"
          onMouseEnter={() => setHoveredIcon("Settings")}
          onMouseLeave={() => setHoveredIcon("")}
        >
          <img src={setting} alt="setting" className="w-[20px]" />
          <p>{Extended ? "Settings" : null}</p>
          {/* Tooltip for Settings */}
          {hoveredIcon === "Settings" && (
            <div className="absolute bg-white text-black text-[12px] p-[5px] rounded-md shadow-md z-10"
              style={{ transform: tooltipPosition }}>
              Settings
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
