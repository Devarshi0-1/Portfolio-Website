import { useActiveTabStore } from "./store"

const NavBar = () => {
    const activeTab = useActiveTabStore((state) => state.activeTab)

    return (
        <nav className='fixed left-1/2 top-[5%] z-10 mx-auto w-fit -translate-x-1/2 translate-y-1/2 rounded-[3rem] border border-solid border-[#ffffff33] bg-[#2d2d2d80] p-1 text-[var(--clr-sec-text)] backdrop-blur-md'>
            <ul className='flex list-none gap-[0.2rem] text-2xl sm:text-sm '>
                <li
                    className={`${
                        activeTab === "home"
                            ? "scale-[1.2] bg-[#ffffff33] shadow-sm"
                            : ""
                    } scale-100 rounded-[3rem] p-[0.2rem_0.8rem] transition-all duration-300 hover:scale-[1.2]`}>
                    <a href='#home'>Home</a>
                </li>
                <li
                    className={`${
                        activeTab === "about"
                            ? "scale-[1.2] bg-[#ffffff33] shadow-sm"
                            : ""
                    } scale-100 rounded-[3rem] p-[0.2rem_0.8rem] transition-all duration-300 hover:scale-[1.2]`}>
                    <a href='#about'>About</a>
                </li>
                <li
                    className={`${
                        activeTab === "skills"
                            ? "scale-[1.2] bg-[#ffffff33] shadow-sm"
                            : ""
                    } scale-100 rounded-[3rem] p-[0.2rem_0.8rem] transition-all duration-300 hover:scale-[1.2]`}>
                    <a href='#skills'>Stack</a>
                </li>
                <li
                    className={`${
                        activeTab === "projects"
                            ? "scale-[1.2] bg-[#ffffff33] shadow-sm"
                            : ""
                    } scale-100 rounded-[3rem] p-[0.2rem_0.8rem] transition-all duration-300 hover:scale-[1.2]`}>
                    <a href='#projects'>Projects</a>
                </li>
                <li
                    className={`${
                        activeTab === "contact"
                            ? "scale-[1.2] bg-[#ffffff33] shadow-sm"
                            : ""
                    } scale-100 rounded-[3rem] p-[0.2rem_0.8rem] transition-all duration-300 hover:scale-[1.2]`}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
