import React, { useContext, useState } from "react";
import SectionHeadings from "../UI/SectionHeadings";
import WorksCard from "../UI/WorksCard";

import { ThemeContext } from "../../context/ThemeContext";
import data from "../../db";

import "./style.scss";
const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section id="work" className={`${theme == "dark" && "!bg-[#030712]"}`}>
      <div className="container">
        <div className="flex justify-center mb-4">
          <SectionHeadings title="Work" />
        </div>
        <h2
          className={`text-[#4B5563] text-center ${
            theme == "dark" && "!text-white"
          }`}
        >
          Some of the noteworthy projects I have built:
        </h2>
        <div className="work_wrapper flex items-center">
          {data.works.map((work) => {
            return <WorksCard state={work} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
