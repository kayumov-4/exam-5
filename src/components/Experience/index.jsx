import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ExperienceCard from "../UI/ExperienceCard";
import SectionHeadings from "../UI/SectionHeadings";
import data from "../../db";
import "./style.scss";

const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section
      id="experience"
      className={`${theme == "dark" && "!bg-[#111827]"}`}
    >
      <div className="container">
        <div className="flex justify-center mb-4">
          <SectionHeadings title="Experience" />
        </div>
        <h2
          className={`text-[#4B5563] text-center ${
            theme == "dark" && "!text-white"
          }`}
        >
          Here is a quick summary of my most recent experiences:
        </h2>
        <div className="experience_wrapper flex flex-col gap-12">
          {data.experience.map((el, i) => {
            return <ExperienceCard key={i} state={el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
