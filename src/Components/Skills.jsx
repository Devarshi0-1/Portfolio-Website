import { useEffect, useRef } from "react"
import { stackData, toolsData } from "./../utils/data"
import Skill from "./Skill"
import { useActiveTabStore } from "./store"

const Skills = () => {
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
            },
        )

        observer.observe(skillSec.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id='skills'
            ref={skillSec}
            className=' mx-auto w-4/5 overflow-hidden pt-12 sm:m-auto sm:w-11/12'>
            <h1 className='text-6xl font-normal text-[var(--clr-sec-text)] opacity-80 sm:text-5xl'>
                Stack
            </h1>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(min(12rem,100%),1fr))] gap-8 sm:grid sm:w-full sm:grid-cols-2 sm:gap-2'>
                {stackData.map((data) => (
                    <Skill
                        key={data.name}
                        name={data.name}
                        icon={data.icon}
                        type={data.type}
                    />
                ))}
            </div>
            <div className='mt-12 text-[var(--clr-sec-text)]'>
                <h2 className='mb-4 text-4xl font-normal'>Dev Tools</h2>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(min(12rem,100%),1fr))] gap-8'>
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
