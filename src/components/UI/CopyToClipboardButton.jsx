import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function CopyToClipboardButton() {
  const [textToCopy, setTextToCopy] = useState("khodievm@gmail.com");
  const [isCopied, setIsCopied] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setIsCopied(true);
  };

  return (
    <div className="flex">
      <button onClick={handleCopyClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icon">
            <path
              id="Vector"
              d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z"
              stroke={theme === "light" ? "#4B5563" : "white"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317"
              stroke={theme === "light" ? "#4B5563" : "white"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default CopyToClipboardButton;
