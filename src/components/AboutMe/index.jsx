import React, { useContext, useState } from "react";

import SectionHeadings from "../UI/SectionHeadings";
import avatar from "../../assets/icons/avatar.png";
import { ThemeContext } from "../../context/ThemeContext";

import "./style.scss";
const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className={` ${theme == "dark" && "!bg-[#111827]"} `} id="about">
      <div className="container ">
        <div className="flex items-center justify-center">
          <SectionHeadings title="About me" />
        </div>
        <div className="about_wrapper">
          <div
            className={`about_wrapper_left ${
              theme == "dark" && "!bg-[#9CA3AF]"
            }`}
          >
            <img className="avatar2" src={avatar} alt="" />
          </div>
          <div className="about_wrapper_right">
            <h2
              className={` ${
                theme == "dark" ? "!text-white" : "!text-[#111827]"
              } font-[Semibold] leading-[36px] tracking-[-0.6px]  mb-6`}
            >
              Curious about me? Here you have it:
            </h2>
            <div
              className={`informations  max-w-[584px] ${
                theme == "dark" ? "!text-white" : "!text-[#4B5563]"
              } `}
            >
              <p className="leading-[24px]">
                I'm a passionate, software engineer who specializes in full
                stack development (Vue.js & Node.js). I am very enthusiastic
                about bringing the technical and visual aspects of digital
                products to life. User experience, pixel perfect design, and
                writing clear, readable, highly performant code matters to me.
              </p>
              <p className="leading-[24px]">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="leading-[24px]">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="leading-[24px]">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Linked where I share tech-related bites and build in public, or
                you can follow me on{" "}
                <span className="border-b  border-black">GitHub</span>.
              </p>
              <p className="leading-[24px]">
                Finally, some quick bits about me.
              </p>
              <ul className="flex flex-wrap gap-[10px] list-disc items-center justify-between ml-5 ul_1">
                <li className="leading-[24px] min-w-[45%]">
                  B.E. in Computer Engineering
                </li>
                <li className="leading-[24px] min-w-[45%]">Leadership</li>
                <li className="leading-[24px] min-w-[45%]">Full time coding</li>
                <li className="leading-[24px] min-w-[45%]">
                  Project managment
                </li>
              </ul>
              <ul className="flex flex-wrap gap-[10px] list-disc items-start justify-start ml-5 ul_2">
                <li className="leading-[24px] max-w-[166px]">
                  B.E. in Computer Engineering
                </li>
                <li className="leading-[24px] max-w-[166px] ml-2">
                  Avid learner
                </li>
                <li className="leading-[24px] w-[166px] ml-2">Mentor</li>
                <li className="leading-[24px] max-w-[166px] ml-2">
                  Leadership
                </li>
              </ul>
              <p className="leading-[24px]">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
