import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript, SiTailwindcss } from "react-icons/si"
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import "./skills.css"

function Skills() {
    const imageSrc = [
        { icon: <AiFillHtml5 className='skillIcons' />, text: "HTML" },
        { icon: <DiCss3 className='skillIcons' />, text: "CSS" },
        { icon: <SiJavascript className='skillIcons' />, text: "JavaScript" },
        { icon: <FaReact className='skillIcons' />, text: "ReactJS" },
        { icon: <FaNodeJs className='skillIcons' />, text: "NodeJS" },
        { icon: <SiTailwindcss className='skillIcons' />, text: "TailWind" },
        { icon: <FaBootstrap className='skillIcons' />, text: "Bootstrap" },
        { icon: <BsGithub className='skillIcons' />, text: "GitHub" },
    ]
    const mappedComp = imageSrc.map((iconComp) => {
        return (
            <span
                className='flex-center'
                key={iconComp.text}
                data-text={iconComp.text}>
                {iconComp.icon}
            </span>
        )
    })

    return (
        <section id='skills' className='flex-center'>
            <h1>Skills</h1>
            <h2>My areas of expertise</h2>
            <div className='skillsGridContainer'>{mappedComp}</div>
        </section>
    )
}

export default Skills
