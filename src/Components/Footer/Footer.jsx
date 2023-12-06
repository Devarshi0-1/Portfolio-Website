import GitHubIco from "./../../assets/icons/github.svg?react"
import LinkedinIco from "./../../assets/icons/linkedin.svg?react"
import InstaIco from "./../../assets/icons/instagram.svg?react"

import "./footer.css"

function Footer() {
    return (
        <footer className='flex-center'>
            <div className='footerContentCont'>
                <div className='footerNameInfo'>
                    <h2>Devarshi</h2>
                    <p>Full Stack Developer</p>
                </div>
                <div>
                    <a href='#about'>About</a>
                    <a href='#home'>Portfolio</a>
                    <a href='#contact'>ContactMe</a>
                </div>
                <div className='socials flex-center'>
                    <a href='https://github.com/Devarshi0-1' target='_blank'>
                        <GitHubIco className='socialIcon' />
                    </a>
                    <a
                        href='https://www.instagram.com/devarshi__dwivedi/'
                        target='_blank'>
                        <LinkedinIco className='socialIcon' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/devarshi-dwivedi/'
                        target='_blank'>
                        <InstaIco className='socialIcon' />
                    </a>
                </div>
                <p>&copy; Devarshi. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
