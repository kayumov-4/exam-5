import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import user from "../../../assets/icons/user.svg";
import "./index.scss";
const index = ({ state: { desc, creator, company } }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`testimonials_card p-12 flex flex-col items-center max-w-[373.33px] rounded-xl shadow_bx gap-6 hover:shadow-xl duration-200 ${
        theme == "dark" && "bg-[#1F2937]"
      }`}
    >
      <a className="bg-[#9CA3AF] rounded-full p-3" href="#">
        <img src={user} alt="" />
      </a>
      <p className={`text-[#4B5563] ${theme == "dark" && "text-white"}`}>
        {desc}
      </p>
      <div className="flex items-center justify-center flex-col">
        <a
          className={`text-[#111827] font-[Semibold] text-[20px] ${
            theme == "dark" && "text-white"
          }`}
          href="#"
        >
          {creator}
        </a>
        <p className={`text-[#4B5563] ${theme == "dark" && "text-white"}`}>
          {company}
        </p>
      </div>
    </div>
  );
};

export default index;
