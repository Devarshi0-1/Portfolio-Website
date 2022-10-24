import './Header.css'
import HeaderSection from './HeaderSection/HeaderSection'
import NavBar from './NavBar/NavBar'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'
import profileImg from '../../assets/navProfileImg.png'

function Header() {
    return (
        <header id='home'>
            <NavBar sunImg={sunImg} moonImg={moonImg} />
            <HeaderSection profileImg={profileImg} />
        </header>
    )
}

export default Header
