import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

import './footer.css'

function Footer() {
    return (
        <footer className='flex-center'>
            <div className="footerContentCont">
                <div className="footerNameInfo">
                    <h2>Devarshi</h2>
                    <p>Frontend Developer</p>
                </div>
                <div>
                    <a href="#about">About</a>
                    <a href="#home">Portfolio</a>
                    <a href="#contact">Contactme</a>
                </div>
                <div className="socials flex-center">
                    <a href="https://github.com/Devarshi0-1" target='_blank'><BsGithub /></a>
                    <a href="https://www.instagram.com/devarshi__dwivedi/" target='_blank'><BsInstagram /></a>
                    <a href="https://www.linkedin.com/in/devarshi-dwivedi/" target='_blank'><BsLinkedin /></a>
                </div>
                <p>&copy; Devarshi. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer