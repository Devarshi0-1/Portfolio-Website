import './projectSlide.css'

import calcProjectImg from '../../../public/assets/projectImgs/calcProject.webp'
import sPsProjectImg from '../../../public/assets/projectImgs/sPsProject.webp'
import toDoProjectImg from '../../../public/assets/projectImgs/toDoProject.webp'
import portfolioProjectImg from '../../../public/assets/projectImgs/portfolioProject.webp'
import weatherMemesProjectImg from '../../../public/assets/projectImgs/weather-memesProject.webp'
import htmlIcon from '../../../public/assets/skillIcons/html.svg'
import cssIcon from '../../../public/assets/skillIcons/css.svg'
import jsIcon from '../../../public/assets/skillIcons/js.svg'
import reactIcon from '../../../public/assets/skillIcons/react.svg'



export default function ProjectSlide() {

    const containerData = [
        {
            key: "slide1Img",
            projectURL: 'https://devarshi0weather0meme.netlify.app/',
            projectImgURL: weatherMemesProjectImg,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            techStackImg4: reactIcon,
            summaryText: <>Single Page Application using <strong>React Router</strong>, made with data from <strong>openWeatherMap api</strong> for Weather Info and <strong>reddit api</strong> for memes</>,
            repoURL: 'https://github.com/Devarshi0-1/Weather-Memes-App'
        },
        {
            key: "slide2Img",
            projectURL: 'https://devarshi0todolist.netlify.app/',
            projectImgURL: toDoProjectImg,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            summaryText: <>Organize yourself writing stuff you need TO DO. Build with UI/UX as a top priority,uses <strong>Glass Morphism UI Style</strong>, use this tool to look the stunning animation it provides.</>,
            repoURL: 'https://github.com/Devarshi0-1/To-Do'
        },
        {
            key: "slide3Img",
            projectURL: 'https://devarshi0stonepaperscissors.netlify.app/',
            projectImgURL: sPsProjectImg,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            summaryText: <>It's You VS Computer let's see who wins this Rock Paper Scissors game. Build with attractive UI/UX and CSS animations with a stunning <strong>Night Mode</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Stone-Paper-Scissors'
        },
        {
            key: "slide4Img",
            projectURL: 'https://react0vite0calculator.netlify.app/',
            projectImgURL: calcProjectImg,
            techStackImg1: htmlIcon,
            techStackImg2: cssIcon,
            techStackImg3: jsIcon,
            techStackImg4: reactIcon,
            summaryText: <>A simple calculator with eye pleasing UI and optimal UX Uses <strong>3D and 2D CSS animations</strong> with <strong>cool Dark Mode</strong> Supports <strong>full keyboard controls</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Calculator-v3'
        },
        {
            key: "slide5Img",
            projectURL: '#home',
            projectImgURL: portfolioProjectImg,
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
                        <img src={jsIcon} loading="lazy" />
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
