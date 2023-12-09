import { useEffect, useRef, Fragment } from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import "./projectSlide.css"

function ProjectSlide({
    name,
    projectURL,
    targetSelf,
    projectImgURL,
    alt_text,
    icons,
    repoURL,
}) {
    const cardWrapper = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].target.classList.toggle(
                    "show",
                    entries[0].isIntersecting
                )

                if(entries[0].isIntersecting) observer.unobserve(entries[0].target)
            },
            { threshold: 0.2 }
        )

        observer.observe(cardWrapper.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div className='cardWrapper' ref={cardWrapper}>
            <div className='card'>
                <img src={projectImgURL} alt={alt_text} />
                <div className='card-info'>
                    <div className='icons'>
                        {icons.map((icon, i) => {
                            const getIcon = () => icon
                            return <Fragment key={i}>{getIcon()}</Fragment>
                        })}
                    </div>
                </div>
            </div>
            <div className='iconsCont'>
                <a href={repoURL} target='_blank'>
                    <FiGithub />
                </a>
                <p>{name}</p>
                <a
                    href={projectURL}
                    target={`${targetSelf ? "_self" : "_blank"}`}>
                    <FiExternalLink />
                </a>
            </div>
        </div>
    )
}

export default ProjectSlide
