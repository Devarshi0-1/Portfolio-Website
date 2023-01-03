import './Header.css'
import HeaderSection from './HeaderSection/HeaderSection'
import NavBar from './NavBar/NavBar'
import sunImg from '../../assets/portfolioImgs/sun.svg'
import moonImg from '../../assets/portfolioImgs/moon.svg'

function Header() {
    return (
        <header id='home'>
            <NavBar sunImg={sunImg} moonImg={moonImg} />
            <HeaderSection/>
        </header>
    )
}

export default Header
