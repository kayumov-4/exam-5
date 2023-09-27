import js from "./assets/icons/js.svg";
import ts from "./assets/icons/ts.svg";
import react from "./assets/icons/react.svg";
import next from "./assets/icons/next.svg";
import nodejs from "./assets/icons/nodejs.svg";
import express from "./assets/icons/express.svg";
import socket from "./assets/icons/socket.svg";
import mongodb from "./assets/icons/mongodb.svg";
import sass from "./assets/icons/sass.svg";
import tailwind from "./assets/icons/tailwind.svg";
import laravel from "./assets/icons/laravel.svg";
import vue from "./assets/icons/vue.svg";
import nuxt from "./assets/icons/nuxt.svg";
import dark_socket from "./assets/icons/icon-socket.svg";
import dark_express from "./assets/icons/icon-express.svg";
import github from "./assets/icons/github.svg";
import postgresql from "./assets/icons/postgresql.svg";
import nest from "./assets/icons/nest.svg";
import nt from "./assets/images/nt.png";
import cambly1 from "./assets/images/cambly1x.png";
import cambly2 from "./assets/images/cambly2x.png";
import uzum1 from "./assets/images/uzum1x.png";
import uzum2 from "./assets/images/uzum2x.png";
import nasiya1 from "./assets/images/nasiya1x.png";
import nasiya2 from "./assets/images/nasiya2x.png";

const data = {
  experience: [
    {
      company: "Najot Ta'lim",
      logo: nt,
      position: "Foundation Student",
      date: "May 2023 - Present",
      desctiptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      company: "Najot Ta'lim",
      logo: nt,
      position: "Bootcamp Result Student",
      date: "May 2023 - Present",
      desctiptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
      ],
    },
    {
      company: "Najot Ta'lim",
      logo: nt,
      position: "Bootcamp Result Student",
      date: "May 2023 - Present",
      desctiptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
      ],
    },
  ],
  technologies: [
    {
      img: js,
      text: "Javascript",
    },
    {
      img: ts,
      text: "Typescript",
    },
    {
      img: react,
      text: "React",
    },
    {
      img: next,
      text: "Next.js",
    },
    {
      img: nodejs,
      text: "Node.js",
    },
    {
      img: express,
      dark_img: dark_express,
      text: "Express.js",
    },
    {
      img: nest,
      text: "Nest.js",
    },
    {
      dark_img: dark_socket,
      img: socket,
      text: "Socket.io",
    },
    {
      img: postgresql,
      text: "PostgreSQL",
    },
    {
      img: mongodb,
      text: "MongoDB",
    },
    {
      img: sass,
      text: "Sass/Scss",
    },
    {
      img: tailwind,
      text: "Tailwindcss",
    },
    {
      img: laravel,
      text: "Laravel (PHP)",
    },
    {
      img: vue,
      text: "Vue.js",
    },
    {
      img: nuxt,
      text: "Nuxt.js",
    },
    {
      img: github,
      text: "Git",
    },
  ],
  works: [
    {
      company: "Uzum.uz",
      img1x: uzum1,
      img2x: uzum2,
      desctiptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Navie.UI",
        "Git",
      ],
    },
    {
      company: "Uzum nasiya",
      img1x: nasiya1,
      img2x: nasiya2,
      position: "reverse",
      desctiptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Navie.UI",
        "Git",
      ],
    },
    {
      company: "Cambly.com",
      img1x: cambly1,
      img2x: cambly2,
      desctiptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      technologies: [
        "Vue.js",
        "Nuxt.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Navie.UI",
        "Git",
      ],
    },
  ],
  testimonials: [
    {
      company: "Founder - Paymart.uz",
      creator: "Dilshod Buymurodov",
      desc: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    },
    {
      company: "Co-Founder - Uzum.uz",
      creator: "Djasur Djumaev",
      desc: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
    },
    {
      company: "PM - Solution Lab",
      creator: "Avaz Aminov",
      desc: "“Mukhriddin was extremely easy and pleasant to work with and he truly cares about the project being a success. Mukhriddin has a high level of knowledge and was able to work on my Full stack application without any issues.”",
    },
    {
      company: "Founder - Paymart.uz",
      creator: "Dilshod Buymurodov",
      desc: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    },
    {
      company: "Co-Founder - Uzum.uz",
      creator: "Djasur Djumaev",
      desc: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
    },
    {
      company: "PM - Solution Lab",
      creator: "Avaz Aminov",
      desc: "“Mukhriddin was extremely easy and pleasant to work with and he truly cares about the project being a success. Mukhriddin has a high level of knowledge and was able to work on my Full stack application without any issues.”",
    },
  ],
};

export default data;
