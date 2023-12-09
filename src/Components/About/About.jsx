import { useRef, useEffect } from "react"
import { useActiveTabStore } from '../store'
import CV from "../../assets/Devarshi_Resume.pdf"
import "./About.css"

function About() {
    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)
    const about = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveTab("about")
                }
            },
            {
                threshold: 0.5,
            }
        )

        observer.observe(about.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section id='about' className='flex-center' ref={about}>
            <h1>About</h1>
            <div className='aboutWrapper'>
                <div className='aboutMe'>
                    <p>
                        In <span>2020</span>, I finished my{" "}
                        <span>Schooling</span> and pursued{" "}
                        <span>Computer Science Engineering</span>. I immersed
                        myself in the dynamic realm of{" "}
                        <span>Frontend Development</span>. Since then, I've been
                        creating both
                        <span> Personal</span> and
                        <span> Professional</span> projects, delivering
                        high-quality and aesthetically pleasing code with
                        passion. Consequently, I've successfully transitioned
                        into a <span>Full-stack developer</span>
                    </p>
                </div>
                <div className='experience'>
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
                </div>
            </div>
            <button className='primaryBtn'>
                <a className='flex-center' href={CV} target='_blank'>
                    View Resume
                </a>
            </button>
        </section>
    )
}

export default About
