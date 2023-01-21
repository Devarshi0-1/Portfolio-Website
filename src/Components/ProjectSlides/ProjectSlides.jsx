import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import ProjectSlide from '../ProjectSlide/ProjectSlide'
import './projectSlides.css'

export default function ProjectSlides() {
    const [screenShotArr, setScreenShotArr] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)

    const fetchData = () => {
        const getScreenShot1 = axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0weather0meme.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`)
        const getScreenShot2 = axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0todolist.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`)
        const getScreenShot3 = axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0stonepaperscissors.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`)
        const getScreenShot4 = axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Freact0vite0calculator.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`)
        const getScreenShot5 = axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0personalportfolio.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`)

        axios.all([getScreenShot1, getScreenShot2, getScreenShot3, getScreenShot4, getScreenShot5])
            .then(axios.spread((...allData) => {
                const screenShotNo1 = allData[0].data.url
                const screenShotNo2 = allData[1].data.url
                const screenShotNo3 = allData[2].data.url
                const screenShotNo4 = allData[3].data.url
                const screenShotNo5 = allData[4].data.url

                setScreenShotArr([screenShotNo1, screenShotNo2, screenShotNo3, screenShotNo4, screenShotNo5])
            }))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const containerData = [
        {
            projectURL: 'https://devarshi0weather0meme.netlify.app/',
            projectImgURL: screenShotArr[0],
            isReact: true,
            target_self: false,
            summaryText: <><span>Weather and Memes app</span>; Single Page Application using <strong>React Router</strong>, made with data from <strong>openWeatherMap api</strong> for Weather Info and <strong>reddit api</strong> for memes</>,
            repoURL: 'https://github.com/Devarshi0-1/Weather-Memes-App'
        },
        {
            projectURL: 'https://devarshi0todolist.netlify.app/',
            projectImgURL: screenShotArr[1],
            isReact: false,
            target_self: false,
            summaryText: <><span>Easy ToDo job</span>; Organize yourself writing stuff you need TO DO. Build with UI/UX as a top priority,uses <strong>Glass Morphism UI Style</strong>, use this tool to look the stunning animation it provides.</>,
            repoURL: 'https://github.com/Devarshi0-1/To-Do'
        },
        {
            projectURL: 'https://devarshi0stonepaperscissors.netlify.app/',
            projectImgURL: screenShotArr[2],
            isReact: false,
            target_self: false,
            summaryText: <><span>Stone Paper Scissors</span>; It's You VS Computer let's see who wins this Rock Paper Scissors game. Build with attractive UI/UX and CSS animations with a stunning <strong>Night Mode</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Stone-Paper-Scissors'
        },
        {
            projectURL: 'https://react0vite0calculator.netlify.app/',
            projectImgURL: screenShotArr[3],
            isReact: true,
            target_self: false,
            summaryText: <><span>React Calculator</span>; A simple calculator with eye pleasing UI and optimal UX Uses <strong>3D and 2D CSS animations</strong> with <strong>cool Dark Mode</strong> Supports <strong>full keyboard controls</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Calculator-v3'
        },
        {
            projectURL: '#home',
            projectImgURL: screenShotArr[4],
            isReact: true,
            target_self: true,
            summaryText: <><span>Personal Portfolio</span>; You are here take a look! This portfolio is made with ReactJS and uses the <strong>API Flash</strong>to automate the Screenshots of my projects. Take a good look, be the judge!</>,
            repoURL: '#'
        }
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prevSlideNum) => prevSlideNum - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (prevSlideNum) => prevSlideNum + 1)
    }

    return (
        <section id="projects" className='flex-center'>
            <h1>Projects</h1>
            <h2>Most Recent Work</h2>
            <div className="projectsContainer flex-center">
                <div className="cardsOuterCont flex-center">
                    <div className="cardsInnerCont flex-center">
                        {containerData.map((data, index) => {
                            return <ProjectSlide key={index} currentSlide={currentSlide} projectURL={data.projectURL} targetSelf={data.target_self} projectImgURL={data.projectImgURL} isReact={data.isReact} summaryText={data.summaryText} repoURL={data.repoURL} />
                        })}
                    </div>
                </div>
                <div className="controlButtons">
                    <span onClick={prevSlide}> <AiOutlineArrowLeft /> </span>
                    <span onClick={nextSlide}> <AiOutlineArrowRight /> </span>
                </div>
            </div>
        </section>
    )
}
