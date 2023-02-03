import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import './projectSlide.css'

function ProjectSlide({ currentSlide, projectURL, targetSelf, projectImgURL, isReact, summaryText, repoURL }) {
    return (
        <div className="slide" style={{ transform: `translateX(-${currentSlide * 102.9}%)` }}>
            <div className='slideImgCont'>
                <a href={projectURL} target={`${targetSelf ? '_self' : '_blank'}`}>
                    <img className='slideImgs' src={projectImgURL} alt="Loading..." loading="lazy" />
                </a>
            </div>
            <div className='slideTechStackUsed flex-center'>
                <h3>Tech Stack Used</h3>
                <div className={`stackLogos ${isReact ? 'withReact' : ''}`}>
                    <AiFillHtml5 />
                    <DiCss3 />
                    <SiJavascript />
                    {isReact && <FaReact />}
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