import { useState, useEffect } from 'react'
import './navBar.css'


function NavBar({ sunImg, moonImg }) {

    const [mode, setMode] = useState('light_mode')
    const [modeImg, setModeImg] = useState(moonImg)

    const toggleMode = () => {
        mode === 'light_mode' ? setMode('dark_mode') : setMode('light_mode')
        mode === 'light_mode' ? setModeImg(sunImg) : setModeImg(moonImg)
    }

    useEffect(() => {
        document.body.className = mode
    }, [mode])

    return (
        <nav className='flex-center'>
            <ul className="navList flex-center">
                <li id='navName'><a href="/">Devarshi</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">ContactMe</a></li>
                <span className='flex-center'>
                    <img src={modeImg} alt="moonImg" className="nightModeSwitch" onClick={toggleMode} />
                </span>
            </ul>
        </nav>
    )
}

export default NavBar