import { stackData, toolsData } from "../../data"
import "./skills.css"

function Skills() {
    return (
        <section id='skills'>
            <h1>Stack</h1>
            <div className='wrapper'>
                {stackData.map((skill) => (
                    <div className='skill' key={skill.name}>
                        <div className='skillImg'>{skill.icon}</div>
                        <div className='skillName'>{skill.name}</div>
                        <div className='skillType'>{skill.type}</div>
                    </div>
                ))}
            </div>
            <div className='toolsWrapper'>
                <h2>Dev Tools</h2>
                <div className='wrapper'>
                    {toolsData.map((skill) => (
                        <div className='skill' key={skill.name}>
                            <div className='skillImg'>{skill.icon}</div>
                            <div className='skillName'>{skill.name}</div>
                            <div className='skillType'>{skill.type}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
