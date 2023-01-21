import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { BsGithub } from 'react-icons/Bs'
import './skills.css'

function Skills() {

    const imageSrc = [<AiFillHtml5 className='skillIcons' />, <DiCss3 className='skillIcons' />, <SiJavascript className='skillIcons' />, <FaReact className='skillIcons' />, <FaNodeJs className='skillIcons' />, <SiTailwindcss className='skillIcons' />, <FaBootstrap className='skillIcons' />, <BsGithub className='skillIcons' />]
    const mappedComp = imageSrc.map((icon, index) => {
        return (
            <span className='flex-center' key={index}>
                {icon}
            </span>
        )
    })

    return (
        <section id='skills' className='flex-center'>
            <h1>Skills</h1>
            <h2>My areas of expertise</h2>
            <div className="skillsGridContainer">
                {mappedComp}
            </div>
        </section>
    )
}

export default Skills