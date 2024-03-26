import WeatherAppImg from "../assets/portfolioImgs/weatherAndMemesAppImg.webp"
import EasyTodoImg from "../assets/portfolioImgs/easyTodoImg.webp"
import StonePaperScissorsImg from "../assets/portfolioImgs/stonePaperScissorsImg.webp"
import CalculatorImg from "../assets/portfolioImgs/calculatorImg.webp"
import PortfolioImg from "../assets/portfolioImgs/portfolioImg.webp"
import FullStackTodoImg from "../assets/portfolioImgs/fullStackTodoAppImg.webp"
import MovixImg from "../assets/portfolioImgs/movixImg.webp"
import UltimateTodoImg from "../assets/portfolioImgs/ultimateTodoImg.webp"

import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { SiFirebase } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { FaReact } from "react-icons/fa"

import { LiaHtml5 } from "react-icons/lia"
import { LiaCss3 } from "react-icons/lia"
import { RiJavascriptLine } from "react-icons/ri"
import { GrNode } from "react-icons/gr"
import { SiTailwindcss } from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { BiLogoMongodb } from "react-icons/bi"
import { SiPostgresql } from "react-icons/si"
import { TbBrandTypescript } from "react-icons/tb"
import { SiAstro } from "react-icons/si"

import { LuGithub } from "react-icons/lu"
import { TbBrandVscode } from "react-icons/tb"
import { SiPrettier } from "react-icons/si"
import { SiPostman } from "react-icons/si"
import { TbBrandVite } from "react-icons/tb"

export const slidesData = [
    {
        name: "Movix",
        projectURL: "https://devarshi0movix.netlify.app/",
        projectImgURL: MovixImg,
        target_self: false,
        icons: [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />, <FaReact />],
        alt_text: "Image of Movix App",
        repoURL: "https://github.com/Devarshi0-1/Movix",
    },
    {
        name: "MERN Stack Todo",
        projectURL: "https://devarshi-mern-todo.vercel.app/login",
        projectImgURL: FullStackTodoImg,
        target_self: false,
        icons: [
            <AiFillHtml5 />,
            <DiCss3 />,
            <SiJavascript />,
            <FaReact />,
            <FaNodeJs />,
            <SiMongodb />,
        ],
        alt_text: "Image of Full Stack Todo App",
        repoURL: "https://github.com/Devarshi0-1/MERN-Todo-App",
    },
    {
        name: "Ultimate Todo",
        projectURL: "https://devarshi0ultimate0todo.netlify.app/",
        projectImgURL: UltimateTodoImg,
        target_self: false,
        icons: [
            <AiFillHtml5 />,
            <DiCss3 />,
            <SiJavascript />,
            <FaReact />,
            <SiFirebase />,
        ],
        alt_text: "Image of Ultimate Todo App",
        repoURL: "https://github.com/Devarshi0-1/Ultimate-React-Firebase-Todo",
    },
    {
        name: "Weather & Memes",
        projectURL: "https://devarshi0weather0meme.netlify.app/",
        projectImgURL: WeatherAppImg,
        target_self: false,
        icons: [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />],
        alt_text: "Image of Weather and Memes App",
        repoURL: "https://github.com/Devarshi0-1/Weather-Memes-App",
    },
    {
        name: "Calculator",
        projectURL: "https://react0vite0calculator.netlify.app/",
        projectImgURL: CalculatorImg,
        target_self: false,
        icons: [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />, <FaReact />],
        alt_text: "Image of Calculator App",
        repoURL: "https://github.com/Devarshi0-1/Calculator-v3",
    },
    {
        name: "Easy Todo",
        projectURL: "https://devarshi0todolist.netlify.app/",
        projectImgURL: EasyTodoImg,
        target_self: false,
        icons: [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />],
        repoURL: "https://github.com/Devarshi0-1/To-Do",
    },
    {
        name: "Stone Paper Scissors",
        projectURL: "https://devarshi0stonepaperscissors.netlify.app/",
        projectImgURL: StonePaperScissorsImg,
        target_self: false,
        icons: [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />],
        alt_text: "Image of Stone Paper Scissors App",
        repoURL: "https://github.com/Devarshi0-1/Stone-Paper-Scissors",
    },
    {
        name: "Portfolio App",
        projectURL: "#home",
        projectImgURL: PortfolioImg,
        target_self: true,
        icons: [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />, <FaReact />],
        alt_text: "Image of Portfolio Website",
        repoURL: "#",
    },
]

export const stackData = [
    {
        name: "React",
        icon: <FaReact />,
        type: "Frontend Web",
    },
    {
        name: "NodeJS",
        icon: <GrNode />,
        type: "Backend Web",
    },
    {
        name: "Postgresql",
        icon: <SiPostgresql />,
        type: "Database",
    },
    {
        name: "MongoDB",
        icon: <BiLogoMongodb />,
        type: "Database",
    },
    {
        name: "Astro",
        icon: <SiAstro />,
        type: "Frontend",
    },
    {
        name: "Typescript",
        icon: <TbBrandTypescript />,
        type: "Language",
    },
    {
        name: "JS",
        icon: <RiJavascriptLine />,
        type: "Frontend Web",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        type: "Frontend Web",
    },
    {
        name: "SCSS",
        icon: <FaSass />,
        type: "Frontend Web",
    },
    {
        name: "HTML",
        icon: <LiaHtml5 />,
        type: "Frontend Web",
    },
    {
        name: "CSS",
        icon: <LiaCss3 />,
        type: "Frontend Web",
    },
]

export const toolsData = [
    {
        name: "Github",
        icon: <LuGithub />,
        type: "Version Control",
    },
    {
        name: "Vs Code",
        icon: <TbBrandVscode />,
        type: "Text Editor",
    },
    {
        name: "Prettier",
        icon: <SiPrettier />,
        type: "Code Formatter",
    },
    {
        name: "Postman",
        icon: <SiPostman />,
        type: "API Testing",
    },
    {
        name: "Vite",
        icon: <TbBrandVite />,
        type: "Building",
    },
]
