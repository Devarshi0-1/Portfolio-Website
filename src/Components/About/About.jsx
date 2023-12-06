import { AiFillEye } from "react-icons/ai"
import CV from "../../assets/Devarshi Resume.pdf"
import "./About.css"

function About() {
    return (
        <section id='about' className='flex-center'>
            <h1>About</h1>
            <p>
                In <span>2020</span>, I finished my <span>Schooling</span> and
                pursued <span>Computer Science Engineering</span>. I immersed
                myself in the dynamic realm of <span>Frontend Development</span>
                . Since then, I've been creating both 
                <span> Personal</span> and
                <span> Professional</span> projects, delivering high-quality and
                aesthetically pleasing code with passion. Consequently, I've
                successfully transitioned into a{" "}
                <span>Full-stack developer</span>
            </p>
        </section>
    )
}

export default About

{
    /* <h1>About Me</h1>
<h2>My Introduction</h2>
<div className='aboutGridContainer'>
    <img className='aboutImg' src={aboutImg} loading='lazy' />
    <p>
        Web developer, with extensive knowledge and years of
        experience, working in web technologies and UI/UX,
        delivering quality work.
    </p>
    <div className='experienceSection'>
        <div className='yearsExp'>
            <p>02+</p>
            <p>
                Years
                <br />
                Experience
            </p>
        </div>
        <div className='projects'>
            <p>10+</p>
            <p>
                Completed
                <br />
                Projects
            </p>
        </div>
        <div className='workExp'>
            <p>2</p>
            <p>Internships</p>
        </div>
        <button className='primaryBtn'>
            <a className='flex-center' href={CV} target='_blank'>
                View Resume <AiFillEye />
            </a>
        </button>
    </div>
</div> */
}
