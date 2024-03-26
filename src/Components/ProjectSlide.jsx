import { Fragment, useEffect, useRef } from "react"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const ProjectSlide = ({
    name,
    projectURL,
    targetSelf,
    projectImgURL,
    alt_text,
    icons,
    repoURL,
}) => {
    const cardWrapper = useRef()

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

        observer.observe(cardWrapper.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            className='translate-x-[20%] opacity-0 rounded-2xl border border-solid border-[#ffffff1a] from-[#ffffff26] to-transparent px-8 py-4 pb-1 backdrop-blur-sm transition-[transform,opacity] duration-500 ease-in-out bg-gradient-[var(--gradient-angle)] [--gradient-angle:135deg] sm:p-0'
            ref={cardWrapper}>
            <div className='group relative overflow-hidden'>
                <img
                    src={projectImgURL}
                    alt={alt_text}
                    className='w-[30rem] rounded-md grayscale transition-[filter] duration-500 group-hover:grayscale-0'
                />
                <div className='absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center overflow-hidden rounded bg-gradient-to-r from-[#929292] to-transparent text-4xl text-[var(--clr-sec-text)] opacity-0 backdrop-blur-md transition-[transform,opacity] duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-90 sm:text-base'>
                    <div className='icons flex gap-3'>
                        {icons.map((icon, i) => {
                            const getIcon = () => icon
                            return <Fragment key={i}>{getIcon()}</Fragment>
                        })}
                    </div>
                </div>
            </div>
            <div className='mt-2 flex justify-between text-xl tracking-[1px] text-[var(--clr-sec-text)] sm:text-nowrap sm:px-2 sm:py-0 sm:text-xs'>
                <a href={repoURL} target='_blank'>
                    <FiGithub />
                </a>
                <p>{name}</p>
                <a
                    href={projectURL}
                    target={`${targetSelf ? "_self" : "_blank"}`}>
                    <FiExternalLink />
                </a>
            </div>
        </div>
    )
}

export default ProjectSlide
