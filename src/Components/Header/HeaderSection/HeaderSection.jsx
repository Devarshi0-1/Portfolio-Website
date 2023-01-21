import profileImg from '../../../assets/portfolioImgs/astronaut.svg'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import './headerSection.css'


function HeaderSection() {
    return (
        <section className='headerSection flex-center'>
            <div className="headerGridContainer">
                <div className="blob">
                    <img className='profileImg' src={profileImg} loading="lazy" />
                </div>
                <h1>Hi, I'm Devarshi</h1>
                <h2>FrontEnd Developer</h2>
                <p>High level experience in web design and development knowledge, producing quality work.</p>
                <button className='primaryBtn'>
                    <a href="#contact">
                        Contact Me
                        <svg className='contactIco' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z" />
                        </svg>
                    </a>
                </button>
            </div>
            <div className="verticalSocials flex-center">
                <a href="https://github.com/Devarshi0-1" target='_blank'><BsGithub /></a>
                <a href="https://www.instagram.com/devarshi__dwivedi/" target='_blank'><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/devarshi-dwivedi/" target='_blank'><BsLinkedin /></a>
            </div>
            <a href='#about' className="scrollDown">
                <svg className='scrollIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z" />
                </svg>
                <p>Scroll down</p>
                <svg className='scrollIcons downIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
            </a>
        </section>
    )
}

export default HeaderSection