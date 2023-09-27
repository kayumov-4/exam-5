import React, { useContext, useState } from "react";

import "./style.scss";
import SectionHeadings from "../UI/SectionHeadings";
import data from "../../db";
import { ThemeContext } from "../../context/ThemeContext";

const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className={` ${theme == "dark" && "!bg-[#030712]"} `} id="skills">
      <div className="container">
        <div className="flex items-center justify-center">
          <SectionHeadings title="Skills" />
        </div>
        <h3 className={`heading ${theme == "dark" && "!text-white"} `}>
          The skills, tools and technologies I am really good at:
        </h3>
        <div className="skills_wrapper ">
          {data.technologies.map((el, i) => {
            return (
              <div
                className="flex items-center justify-center flex-col gap-2 w-[110px]"
                key={i}
              >
                <img
                  src={theme == "dark" && el.dark_img ? el.dark_img : el.img}
                  alt=""
                />
                <p className={` ${theme == "dark" && "!text-white"} `}>
                  {el.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
