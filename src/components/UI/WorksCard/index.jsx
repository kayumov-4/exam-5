import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import "./index.scss";

const index = ({
  state: { img1x, img2x, company, technologies, position },
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="works_card hover:shadow-xl duration-200">
      <div className={`works_card_wrapper ${position && "flex-row-reverse"}`}>
        <div
          className={`left border-r border-[#f3f4f6] bg-[#f3f4f6] ${
            position && "border-none"
          }  ${theme == "dark" && "!bg-[#1F2937] border-[#030712]"}`}
        >
          <picture>
            <img
              className="img"
              src={img1x}
              alt=""
              srcset={`
                      ${img1x} 1x,
                      ${img2x} 2x
                    `}
            />
          </picture>
        </div>
        <div className={`right ${theme == "dark" && "!bg-[#1F2937]"}`}>
          <h3 className={`${theme == "dark" && "text-white"}`}>{company}</h3>
          <p className={`${theme == "dark" && "text-[#6B7280]"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="technologies">
            {technologies.map((el) => {
              return (
                <a
                  className={`text-[#4B5563] text-sm font-medium font-[Medium] px-5 py-1 bg-[#E5E7EB] ${
                    theme == "dark" && "!bg-[#4B5563] !text-[#E5E7EB]"
                  } text-center rounded-xl`}
                  href="#"
                >
                  {el}
                </a>
              );
            })}
          </div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
