import './projects.css'
import ProjectSlides from '../ProjectSlides/ProjectSlides'

function Projects() {
    return (
        <section id='projects' className='flex-center'>
            <h1>Projects</h1>
            <h2>Most Recent Work</h2>
            <ProjectSlides />
        </section>
    )
}

export default Projects