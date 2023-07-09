import { useState, useEffect, useRef } from "react"
import "./navBar.css"

function NavBar({ sunImg, moonImg }) {
    const [mode, setMode] = useState("dark_mode")
    const [modeImg, setModeImg] = useState(
        mode === "dark_mode" ? sunImg : moonImg
    )
    const [toggleState, setToggleState] = useState(null)
    const fakeNav = useRef()
    const nav = useRef()
    const topContainer = useRef()
    const hamburger = useRef()

    const toggleMode = () => {
        mode === "light_mode" ? setMode("dark_mode") : setMode("light_mode")
        mode === "light_mode" ? setModeImg(sunImg) : setModeImg(moonImg)
    }

    const handleNavClick = (index) => {
        setToggleState(index)
    }

    useEffect(() => {
        document.body.className = mode
    }, [mode])

    const handleHamClick = () => {
        hamburger.current.classList.toggle("isActive")
        nav.current.classList.toggle("isActive")
        fakeNav.current.classList.toggle("isActive")
        topContainer.current.classList.toggle("isActive")
    }

    return (
        <>
            <nav className='flex-center' ref={nav}>
                <ul className='navList flex-center'>
                    <li id='navName'>
                        <a href='/'>
                            <b>Devarshi</b>
                        </a>
                    </li>
                    <li
                        className={toggleState === 1 ? "active" : ""}
                        onClick={() => handleNavClick(1)}>
                        <a href='#home'>Home</a>
                    </li>
                    <li
                        className={toggleState === 2 ? "active" : ""}
                        onClick={() => handleNavClick(2)}>
                        <a href='#about'>About</a>
                    </li>
                    <li
                        className={toggleState === 3 ? "active" : ""}
                        onClick={() => handleNavClick(3)}>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li
                        className={toggleState === 4 ? "active" : ""}
                        onClick={() => handleNavClick(4)}>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li
                        className={toggleState === 5 ? "active" : ""}
                        onClick={() => handleNavClick(5)}>
                        <a href='#contact'>ContactMe</a>
                    </li>
                    <span className='flex-center'>
                        <img
                            src={modeImg}
                            alt='moonImg'
                            className='nightModeSwitch'
                            onClick={toggleMode}
                        />
                    </span>
                </ul>
            </nav>
            <div className='topContainer' ref={topContainer}>
                <div className='topHeading' ref={fakeNav}>
                    Devarshi
                </div>
                <div
                    className='hamburger'
                    onClick={handleHamClick}
                    ref={hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default NavBar
