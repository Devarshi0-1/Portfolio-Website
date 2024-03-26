import { useEffect, useRef, useState } from "react"
import ProjectSlide from "./ProjectSlide"
import { slidesData } from "./data"
import { useActiveTabStore } from "./store"

export default function ProjectSlides() {
    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)
    const projectsSec = useRef()

    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveTab("projects")
                }
            },
            {
                threshold: 0.5,
            },
        )

        observer.observe(projectsSec.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id='projects'
            className='mx-auto mb-0 mt-36 flex min-h-screen w-fit flex-col items-center justify-center overflow-hidden sm:mt-0 sm:h-auto sm:w-full sm:pt-10'
            ref={projectsSec}>
            <h1 className='text-6xl font-normal text-[var(--clr-sec-text)] opacity-80 sm:text-5xl'>
                Projects
            </h1>
            <h2 className='mb-5xl mb-10 text-2xl font-normal text-[var(--clr-sec-text)] opacity-50'>
                Most Recent Work
            </h2>
            <div className='grid min-h-[70%] grid-cols-2 gap-10 sm:h-3/5 sm:gap-4 sm:p-2'>
                {slidesData.toSpliced(4, slidesData.length).map((slide) => (
                    <ProjectSlide
                        key={slide.name}
                        name={slide.name}
                        projectURL={slide.projectURL}
                        targetSelf={slide.target_self}
                        projectImgURL={slide.projectImgURL}
                        altText={slide.alt_text}
                        icons={slide.icons}
                        isReact={slide.isReact}
                        summaryText={slide.summaryText}
                        repoURL={slide.repoURL}
                    />
                ))}
                {show &&
                    slidesData
                        .toSpliced(0, 4)
                        .map((slide) => (
                            <ProjectSlide
                                key={slide.name}
                                name={slide.name}
                                projectURL={slide.projectURL}
                                targetSelf={slide.target_self}
                                projectImgURL={slide.projectImgURL}
                                altText={slide.alt_text}
                                icons={slide.icons}
                                isReact={slide.isReact}
                                summaryText={slide.summaryText}
                                repoURL={slide.repoURL}
                            />
                        ))}
            </div>
            <p
                className='ml-auto mt-12 cursor-pointer text-[var(--clr-sec-text)] transition-[color] duration-500 hover:text-zinc-400 sm:mr-4 sm:text-sm'
                onClick={() => setShow(!show)}>
                {show ? "Show Less" : "Show More"}
            </p>
        </section>
    )
}
