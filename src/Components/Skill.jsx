import { useRef, useEffect } from "react"

const Skill = ({ name, icon, type }) => {
    const skill = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].target.classList.toggle(
                    "show",
                    entries[0].isIntersecting,
                )

                if (entries[0].isIntersecting)
                    observer.unobserve(entries[0].target)
            },
            { threshold: 0.2 },
        )

        observer.observe(skill.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            className='grid translate-x-[20%] grid-cols-[2fr_4fr] grid-rows-2 gap-x-2 rounded-md border border-solid border-[#ffffff1a] bg-gradient-to-t from-[#ffffff1a] to-[#ffffff00] p-[0.7rem] text-xl text-[var(--clr-sec-text)] opacity-0 transition-[transform,opacity] duration-500 ease-in-out sm:p-1 sm:text-base'
            key={name}
            ref={skill}>
            <div className='row-start-1 row-end-3 text-4xl'>{icon}</div>
            <div>{name}</div>
            <div className='text-sm font-extralight opacity-70'>{type}</div>
        </div>
    )
}
export default Skill
