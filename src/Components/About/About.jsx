import './About.css'
import { AiFillEye } from 'react-icons/ai'
import aboutImg from '../../assets/portfolioImgs/aboutImg.svg'
import CV from '../../assets/Devarshi Resume.pdf'

function About() {
    return (
        <section id='about' className='flex-center'>
            <h1>About Me</h1>
            <h2>My Introduction</h2>
            <div className="aboutGridContainer">
                <img className='aboutImg' src={aboutImg} loading="lazy" />
                <p>Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX, delivering quality work.</p>
                <div className="experienceSection">
                    <div className='yearsExp'>
                        <p>02+</p>
                        <p>Years<br />Experience</p>
                    </div>
                    <div className='projects'>
                        <p>10+</p>
                        <p>Completed<br />Projects</p>
                    </div>
                    <div className='workExp'>
                        <p>1</p>
                        <p>Internships</p>
                    </div>
                    <button className="primaryBtn">
                        <a className='flex-center' href={CV} target="_blank" >View Resume <AiFillEye/></a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About