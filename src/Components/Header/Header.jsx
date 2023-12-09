import { useRef, useEffect } from "react"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import { useActiveTabStore } from '../store'
import "./Header.css"

function Header() {
    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)
    const header = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveTab("home")
                }
            },
            {
                threshold: 0.5,
            }
        )

        observer.observe(header.current)

        return () => observer.disconnect()
    }, [])

    return (
        <header id='home' ref={header}>
            <section className='headerSection flex-center'>
                <div className='headerContainer'>
                    <h1>Hi, I am Devarshi</h1>
                    <h2>A full-stack Web Developer</h2>
                </div>
                <div className='verticalSocials flex-center'>
                    <a href='https://github.com/Devarshi0-1' target='_blank'>
                        <FiGithub className='socialIcon' />
                    </a>
                    <a
                        href='https://www.instagram.com/devarshi__dwivedi/'
                        target='_blank'>
                        <FiInstagram className='socialIcon' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/devarshi-dwivedi/'
                        target='_blank'>
                        <FiLinkedin className='socialIcon' />
                    </a>
                </div>
            </section>
        </header>
    )
}

export default Header
