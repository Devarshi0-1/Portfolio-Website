import { useActiveTabStore } from "../store"
import "./navBar.css"

function NavBar() {
    const activeTab = useActiveTabStore((state) => state.activeTab)

    return (
        <nav>
            <ul>
                <li className={activeTab === "home" ? "active" : ""}>
                    <a href='#home'>Home</a>
                </li>
                <li className={activeTab === "about" ? "active" : ""}>
                    <a href='#about'>About</a>
                </li>
                <li className={activeTab === "skills" ? "active" : ""}>
                    <a href='#skills'>Stack</a>
                </li>
                <li className={activeTab === "projects" ? "active" : ""}>
                    <a href='#projects'>Projects</a>
                </li>
                <li className={activeTab === "contact" ? "active" : ""}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
