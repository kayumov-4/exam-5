import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import "./card.scss";

const index = ({ state: { logo, position, date, desctiptions } }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`card rounded-xl ${
        theme == "dark" && "bg-[#1F2937]"
      } hover:shadow-xl duration-200`}
    >
      <div className="card_header mb-4">
        <a className={`py-2 px-5 bg-white rounded-full `} href="#">
          <img className="w-[120px]" src={logo} alt="" />
        </a>
        <h3
          className={`text-[#111827] font-[Semibold] text-[20px] ${
            theme == "dark" && "!text-white"
          }`}
        >
          {position}
        </h3>
        <p
          className={`text-[#374151] text-[16px] ${
            theme == "dark" && "!text-[#E5E7EB]"
          }`}
        >
          {date}
        </p>
      </div>
      <div className="card_body flex justify-center">
        <ul className="list-disc flex flex-col gap-1">
          {desctiptions.map((desc) => {
            return (
              <li
                className={`text-[#374151] text-[16px] ${
                  theme == "dark" && "!text-white"
                }`}
              >
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default index;
