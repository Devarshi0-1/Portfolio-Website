import './About.css'
import aboutImg from '../../assets/aboutImg.jpg'
import CV from '../../assets/My_Resume.pdf'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function About() {
    return (
        <section id='about' className='flex-center'>
            <h1>About Me</h1>
            <h2>My Introduction</h2>
            <div className="aboutGridContainer">
                {/* <img className='aboutImg' src={aboutImg} loading="lazy" /> */}
                <LazyLoadImage effect='blur' className='aboutImg' src={aboutImg} />
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
                    <a href={CV} download className='cvBtn' >Download CV
                        <svg className='downloadIco' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About