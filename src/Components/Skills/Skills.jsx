import { useRef,useEffect } from "react"
import { stackData, toolsData } from "../../data"
import Skill from "./Skill"
import { useActiveTabStore } from '../store'
import "./skills.css"

function Skills() {
    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)
    const skillSec = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveTab("skills")
                }
            },
            {
                threshold: 0.5,
            }
        )

        observer.observe(skillSec.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section id='skills' ref={skillSec}>
            <h1>Stack</h1>
            <div className='wrapper'>
                {stackData.map((data) => (
                    <Skill
                        key={data.name}
                        name={data.name}
                        icon={data.icon}
                        type={data.type}
                    />
                ))}
            </div>
            <div className='toolsWrapper'>
                <h2>Dev Tools</h2>
                <div className='wrapper'>
                    {toolsData.map((data) => (
                        <Skill
                            key={data.name}
                            name={data.name}
                            icon={data.icon}
                            type={data.type}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
