import './projectSlide.css'
import slide1Img from '../assets/calcProject.png'
import slide2Img from '../assets/sPsProject.png'
import slide3Img from '../assets/toDoProject.png'
import slide4Img from '../assets/portfolio.png'
import htmlIcon from '../assets/html.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/js.svg'
import reactIcon from '../assets/react.svg'

export default function ProjectSlide() {

    const containerData = [
        {
            projectURL: 'https://react0vite0calculator.netlify.app/',
            projectImgURL: slide1Img,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            techStackImg4: reactIcon,
            summaryText: <>A simple calculator with eye pleasing UI and optimal UX Uses <strong>3D and 2D CSS animations</strong> with <strong>cool Dark Mode</strong> Supports <strong>full keyboard controls</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Calculator-v3'
        },
        {
            projectURL: 'https://devarshi0stonepaperscissors.netlify.app/',
            projectImgURL: slide2Img,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            summaryText: <>It's You VS Computer let's see who wins this Rock Paper Scissors game. Build with attractive UI/UX and CSS animations with a stunning <strong>Night Mode</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Stone-Paper-Scissors'
        },
        {
            projectURL: 'https://devarshi0todolist.netlify.app/',
            projectImgURL: slide3Img,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            summaryText: <>Organize yourself writing stuff you need TO DO. Build with UI/UX as a top priority,uses <strong>Glass Morphism UI Style</strong>, use this tool to look the stunning animation it provides.</>,
            repoURL: 'https://github.com/Devarshi0-1/To-Do'
        },
        {
            projectURL: '#home',
            projectImgURL: slide4Img,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            techStackImg4: reactIcon,
            target_self: true,
            summaryText: <>You are here take a look! Judge for yourself!</>,
            repoURL: '#'
        }
    ]

    const renderSlides = containerData.map(data => {
        return (
            <div className="slide">
                <div className='slideImgCont'>
                    <a href={data.projectURL} target={`${data.target_self ? '_self' : '_blank'}`}>
                        <img className='slideImgs' src={data.projectImgURL} alt="Stone Paper Scissors Website Image" />
                    </a>
                </div>
                <div className='slideTechStackUsed'>
                    <h3>Tech Stack Used</h3>
                    <div className={`stackLogos ${data.techStackImg4 ? 'withReact' : ''}`}>
                        <img src={htmlIcon} />
                        <img src={cssIcon} />
                        <img src={jsIcon} />
                        {data.techStackImg4 && <img src={reactIcon} />}
                    </div>
                </div>
                <div className='slideSummary'>
                    <h3>Summary</h3>
                    <p>{data.summaryText}</p>
                </div>
                <div className='slideCTA'>
                    <a href={data.projectURL} target={`${data.target_self ? '_self' : '_blank'}`} >Visit</a>
                    <a href={data.repoURL} target='_blank'>GitHub Repo</a>
                </div>
            </div>
        )
    })

    return (
        <div className="projectsContainer">
            <div className="cardsOuterCont">
                <div className="cardsInnerCont">
                    {renderSlides}
                </div>
            </div>
        </div>
    )
}
