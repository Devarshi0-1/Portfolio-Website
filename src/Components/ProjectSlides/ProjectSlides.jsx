import { slidesData } from "../../data"
import ProjectSlide from "../ProjectSlide/ProjectSlide"
import "./projectSlides.css"

export default function ProjectSlides() {
    return (
        <section id='projects' className='flex-center'>
            <h1>Projects</h1>
            <h2>Most Recent Work</h2>
            <div className='projectsContainer'>
                {slidesData.map((slide) => (
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
        </section>
    )
}
