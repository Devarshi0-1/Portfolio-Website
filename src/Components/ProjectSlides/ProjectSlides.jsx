import { useState, useRef, useEffect } from "react"
import ProjectSlide from "../ProjectSlide/ProjectSlide"
import { slidesData } from "../../data"
import { useActiveTabStore } from "../store"
import "./projectSlides.css"

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
            }
        )

        observer.observe(projectsSec.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section id='projects' className='flex-center' ref={projectsSec}>
            <h1>Projects</h1>
            <h2>Most Recent Work</h2>
            <div className='projectsContainer'>
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
            <p className='showMore' onClick={() => setShow(!show)}>
                {show ? "Show Less" : "Show More"}
            </p>
        </section>
    )
}
