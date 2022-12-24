import './projectSlide.css'
import slide1Img from '../../assets/calcProject.webp'
import slide2Img from '../../assets/sPsProject.webp'
import slide3Img from '../../assets/toDoProject.webp'
import slide4Img from '../../assets/portfolio.webp'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import jsIcon from '../../assets/js.svg'
import reactIcon from '../../assets/react.svg'

export default function ProjectSlide() {

    const containerData = [
        {
            key: slide1Img,
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
            key: slide2Img,
            projectURL: 'https://devarshi0stonepaperscissors.netlify.app/',
            projectImgURL: slide2Img,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            summaryText: <>It's You VS Computer let's see who wins this Rock Paper Scissors game. Build with attractive UI/UX and CSS animations with a stunning <strong>Night Mode</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Stone-Paper-Scissors'
        },
        {
            key: slide3Img,
            projectURL: 'https://devarshi0todolist.netlify.app/',
            projectImgURL: slide3Img,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            summaryText: <>Organize yourself writing stuff you need TO DO. Build with UI/UX as a top priority,uses <strong>Glass Morphism UI Style</strong>, use this tool to look the stunning animation it provides.</>,
            repoURL: 'https://github.com/Devarshi0-1/To-Do'
        },
        {
            key: slide4Img,
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
            <div className="slide" key={data.key}>
                <div className='slideImgCont'>
                    <a href={data.projectURL} target={`${data.target_self ? '_self' : '_blank'}`}>
                        <img className='slideImgs' src={data.projectImgURL} alt="Project Imgs" loading="lazy" />
                    </a>
                </div>
                <div className='slideTechStackUsed flex-center'>
                    <h3>Tech Stack Used</h3>
                    <div className={`stackLogos ${data.techStackImg4 ? 'withReact' : ''}`}>
                        <img src={htmlIcon} loading="lazy" />
                        <img src={cssIcon} loading="lazy" />
                        <img src={jsIcon} loading="lazy"/>
                        {data.techStackImg4 && <img src={reactIcon} loading="lazy" />}
                    </div>
                </div>
                <div className='slideSummary flex-center'>
                    <h3>Summary</h3>
                    <p>{data.summaryText}</p>
                </div>
                <div className='slideCTA flex-center'>
                    <button className='primaryBtn visitBtn'><a href={data.projectURL} target={`${data.target_self ? '_self' : '_blank'}`} >Visit</a></button>
                    <button className='secondaryBtn'><a href={data.repoURL} target='_blank'>GitHub Repo</a></button>
                </div>
            </div>
        )
    })

    return (
        <div className="projectsContainer flex-center">
            <div className="cardsOuterCont flex-center">
                <div className="cardsInnerCont flex-center">
                    {renderSlides}
                </div>
            </div>
        </div>
    )
}
