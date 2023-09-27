import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./index.scss";
const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const setDark = () => {
    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("bg-[black]");
    } else {
      setTheme("light");
      document.body.classList.add("bg-white");
      localStorage.setItem("theme", "light");
    }
  };
  function openResume() {
    window.location.href = "https://resume.io/r/okNLV7j3q";
  }
  return (
    <header className={`${theme == "dark" && "bg-[#030712]"} `}>
      <div className="container">
        <nav className="navbar">
          <a className={`${theme == "dark" && "!text-white"} logo`} href="#">
            &lt;MK /&gt;
          </a>
          <ul className="list">
            <li className="list_item item2 ">
              <a
                className={`${theme == "dark" && "!text-white"} `}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="list_item item1">
              <a
                className={`${theme == "dark" && "!text-white"} `}
                href="#work"
              >
                Work
              </a>
            </li>
            <li className="list_item item1">
              <a
                className={`${theme == "dark" && "!text-white"} `}
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>
            <li className="list_item item2">
              <a
                className={`${theme == "dark" && "!text-white"} `}
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="list_item mode_icon">
              <a onClick={setDark} href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2V4"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 20V22"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.92993 4.92999L6.33993 6.33999"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.6599 17.66L19.0699 19.07"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 12H4"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 12H22"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.33993 17.66L4.92993 19.07"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.0699 4.92999L17.6599 6.33999"
                    stroke={`${theme == "dark" ? "white" : "#4B5563"} `}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="list_item ">
              <button
                onClick={openResume}
                className={`${theme == "dark" && "!text-white"} `}
              >
                Download CV
              </button>
            </li>
          </ul>
          <a href="#" className=" menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12H20"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6H20"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default index;
