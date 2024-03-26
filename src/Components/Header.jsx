import { useEffect, useRef } from "react"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"
import { useActiveTabStore } from "./store"

const Header = () => {
    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)
    const header = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveTab("home")
                }
            },
            {
                threshold: 0.5,
            },
        )

        observer.observe(header.current)

        return () => observer.disconnect()
    }, [])

    return (
        <header id='home' ref={header} className='h-screen'>
            <section className='relative mx-auto flex h-full w-4/5 items-center justify-center'>
                <div className='w-10/12 text-center text-[var(--clr-sec-text)]'>
                    <h1 className='mb-6 bg-gradient-to-r from-white to-black text-[7rem] font-normal opacity-70 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] sm:bg-none sm:text-6xl sm:text-white sm:[-webkit-text-fill-color:white]'>
                        Hi, I am Devarshi
                    </h1>
                    <h2 className='mb-8 bg-gradient-to-r from-white to-black bg-clip-text text-5xl font-normal opacity-70 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] sm:text-2xl'>
                        A full-stack Web Developer
                    </h2>
                </div>
                <div className='absolute -left-5 flex h-52 w-12 flex-col items-center justify-evenly sm:-left-8'>
                    <a href='https://github.com/Devarshi0-1' target='_blank'>
                        <FiGithub className='text-2xl text-white transition-[color] duration-500 hover:text-zinc-400' />
                    </a>
                    <a
                        href='https://www.instagram.com/devarshi__dwivedi/'
                        target='_blank'>
                        <FiInstagram className='text-2xl text-white transition-[color] duration-500 hover:text-zinc-400' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/devarshi-dwivedi/'
                        target='_blank'>
                        <FiLinkedin className='text-2xl text-white transition-[color] duration-500 hover:text-zinc-400' />
                    </a>
                </div>
            </section>
        </header>
    )
}

export default Header
