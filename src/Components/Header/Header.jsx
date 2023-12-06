import GitHubIco from "./../../assets/icons/github.svg?react"
import LinkedinIco from "./../../assets/icons/linkedin.svg?react"
import InstaIco from "./../../assets/icons/instagram.svg?react"
import MailIco from "./../../assets/icons/mail.svg?react"
import "./Header.css"

function Header() {
    return (
        <header id='home'>
            <section className='headerSection flex-center'>
                <div className='headerGridContainer'>
                    <h1>Hi, I am Devarshi</h1>
                    <h2>A full-stack Web Developer</h2>
                    {/* <button className='primaryBtn'>
                        <a href='#contact'>
                            Contact Me
                            <MailIco />
                        </a>
                    </button> */}
                </div>
                <div className='verticalSocials flex-center'>
                    <a href='https://github.com/Devarshi0-1' target='_blank'>
                        <GitHubIco className='socialIcon' />
                    </a>
                    <a
                        href='https://www.instagram.com/devarshi__dwivedi/'
                        target='_blank'>
                        <InstaIco className='socialIcon' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/devarshi-dwivedi/'
                        target='_blank'>
                        <LinkedinIco className='socialIcon' />
                    </a>
                </div>
            </section>
        </header>
    )
}

export default Header
