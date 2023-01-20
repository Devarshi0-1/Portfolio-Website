import htmlIcon from '../../assets/skillIcons/html.svg'
import cssIcon from '../../assets/skillIcons/css.svg'
import jsIcon from '../../assets/skillIcons/js.svg'
import reactIcon from '../../assets/skillIcons/react.svg'
import './projectSlide.css'

function ProjectSlide({ projectURL, targetSelf, projectImgURL, isReact, summaryText, repoURL }) {
    return (
        <div className="slide">
            <div className='slideImgCont'>
                <a href={projectURL} target={`${targetSelf ? '_self' : '_blank'}`}>
                    <img className='slideImgs' src={projectImgURL} alt="Project Imgs" loading="lazy" />
                </a>
            </div>
            <div className='slideTechStackUsed flex-center'>
                <h3>Tech Stack Used</h3>
                <div className={`stackLogos ${isReact ? 'withReact' : ''}`}>
                    <img src={htmlIcon} loading="lazy" />
                    <img src={cssIcon} loading="lazy" />
                    <img src={jsIcon} loading="lazy" />
                    {isReact && <img src={reactIcon} loading="lazy" />}
                </div>
            </div>
            <div className='slideSummary flex-center'>
                <h3>Summary</h3>
                <p>{summaryText}</p>
            </div>
            <div className='slideCTA flex-center'>
                <button className='primaryBtn visitBtn'><a href={projectURL} target={`${targetSelf ? '_self' : '_blank'}`} >Visit</a></button>
                <button className='secondaryBtn'><a href={repoURL} target='_blank'>GitHub Repo</a></button>
            </div>
        </div>
    )
}

export default ProjectSlide