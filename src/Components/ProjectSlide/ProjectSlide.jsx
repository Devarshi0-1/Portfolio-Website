import { Fragment } from "react"
import { FiExternalLink } from "react-icons/fi"
import GithubIco from './../../assets/icons/github.svg?react'
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
    return (
        <div className='cardWrapper'>
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
                    <GithubIco />
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
