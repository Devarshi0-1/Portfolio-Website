import { useEffect, useRef } from "react"
import CV from "../assets/Devarshi_Resume.pdf"
import { useActiveTabStore } from "./store"

function About() {
    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)
    const about = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setActiveTab("about")
            },
            { threshold: 0.5 },
        )

        observer.observe(about.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id='about'
            className='mx-auto my-0 flex min-h-screen w-[70%] flex-col items-center justify-center gap-8 sm:min-h-[auto]'
            ref={about}>
            <h1 className='sm:text-5xlfont-normal text-6xl text-[var(--clr-sec-text)] opacity-80'>
                About
            </h1>
            <div className='flex flex-col gap-12'>
                <div className='text-justify'>
                    <p className='text-2xl text-[var(--clr-sec-text)]'>
                        In <span>2020</span>, I finished my{" "}
                        <span>Schooling</span> and pursued{" "}
                        <span>Computer Science Engineering</span>. I immersed
                        myself in the dynamic realm of{" "}
                        <span>Frontend Development</span>. Since then, I've been
                        creating both
                        <span> Personal</span> and
                        <span> Professional</span> projects, delivering
                        high-quality and aesthetically pleasing code with
                        passion. Consequently, I've successfully transitioned
                        into a <span>Full-stack developer</span>
                    </p>
                </div>
                <div className='m-auto flex gap-4 text-center'>
                    <div className='[&>p]:text-2xl [&>p]:text-[var(--clr-sec-text)] sm:[&>p]:text-lg'>
                        <p>02+</p>
                        <p>
                            Years
                            <br />
                            Experience
                        </p>
                    </div>
                    <div className='[&>p]:text-2xl [&>p]:text-[var(--clr-sec-text)] sm:[&>p]:text-lg'>
                        <p>10+</p>
                        <p>
                            Completed
                            <br />
                            Projects
                        </p>
                    </div>
                    <div className='[&>p]:text-2xl [&>p]:text-[var(--clr-sec-text)] sm:[&>p]:text-lg'>
                        <p>2</p>
                        <p>Internships</p>
                    </div>
                </div>
            </div>
            <button className='flex h-fit w-fit cursor-pointer items-center rounded-md border-0 bg-white px-4 py-2 text-2xl text-[var(--clr-text)] transition-[background-color] duration-500 hover:bg-slate-300'>
                <a
                    className='flex items-center justify-center'
                    href={CV}
                    target='_blank'>
                    View Resume
                </a>
            </button>
        </section>
    )
}

export default About
