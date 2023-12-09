import { useRef, useEffect } from "react"

const Skill = ({ name, icon, type }) => {
    const skill = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].target.classList.toggle(
                    "show",
                    entries[0].isIntersecting
                )

                if (entries[0].isIntersecting)
                    observer.unobserve(entries[0].target)
            },
            { threshold: 0.2 }
        )

        observer.observe(skill.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div className='skill' key={name} ref={skill}>
            <div className='skillImg'>{icon}</div>
            <div className='skillName'>{name}</div>
            <div className='skillType'>{type}</div>
        </div>
    )
}
export default Skill
