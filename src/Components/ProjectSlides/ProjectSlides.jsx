import { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectSlide from '../ProjectSlide/ProjectSlide'
import './projectSlides.css'

export default function ProjectSlides() {
    const [screenShotArr, setScreenShotArr] = useState([])

    const fetchData = () => {
        const screenShot1 = `https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0weather0meme.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`
        const screenShot2 = `https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0todolist.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`
        const screenShot3 = `https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0stonepaperscissors.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`
        const screenShot4 = `https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Freact0vite0calculator.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`
        const screenShot5 = `https://api.apiflash.com/v1/urltoimage?access_key=989bcbb4c8f444c8af0c8cd39c1fc2ae&url=https%3A%2F%2Fdevarshi0personalportfolio.netlify.app%2F&format=webp&height=973&delay=2&response_type=json`

        const getScreenShot1 = axios.get(screenShot1)
        const getScreenShot2 = axios.get(screenShot2)
        const getScreenShot3 = axios.get(screenShot3)
        const getScreenShot4 = axios.get(screenShot4)
        const getScreenShot5 = axios.get(screenShot5)

        axios.all([getScreenShot1, getScreenShot2, getScreenShot3, getScreenShot4, getScreenShot5])
            .then(axios.spread((...allData) => {
                const screenShotNo1 = allData[0].data.url
                const screenShotNo2 = allData[1].data.url
                const screenShotNo3 = allData[2].data.url
                const screenShotNo4 = allData[3].data.url
                const screenShotNo5 = allData[4].data.url

                console.log(allData[0].data.url);
                console.log(allData[1].data.url);
                console.log(allData[2].data.url);
                console.log(allData[3].data.url);
                console.log(allData[4].data.url);

                setScreenShotArr([screenShotNo1, screenShotNo2, screenShotNo3, screenShotNo4, screenShotNo5])
            }))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const containerData = [
        {
            key: "slide1Img",
            projectURL: 'https://devarshi0weather0meme.netlify.app/',
            projectImgURL: screenShotArr[0],
            isReact: true,
            target_self: false,
            summaryText: <>Single Page Application using <strong>React Router</strong>, made with data from <strong>openWeatherMap api</strong> for Weather Info and <strong>reddit api</strong> for memes</>,
            repoURL: 'https://github.com/Devarshi0-1/Weather-Memes-App'
        },
        {
            key: "slide2Img",
            projectURL: 'https://devarshi0todolist.netlify.app/',
            projectImgURL: screenShotArr[1],
            isReact: false,
            target_self: false,
            summaryText: <>Organize yourself writing stuff you need TO DO. Build with UI/UX as a top priority,uses <strong>Glass Morphism UI Style</strong>, use this tool to look the stunning animation it provides.</>,
            repoURL: 'https://github.com/Devarshi0-1/To-Do'
        },
        {
            key: "slide3Img",
            projectURL: 'https://devarshi0stonepaperscissors.netlify.app/',
            projectImgURL: screenShotArr[2],
            isReact: false,
            target_self: false,
            summaryText: <>It's You VS Computer let's see who wins this Rock Paper Scissors game. Build with attractive UI/UX and CSS animations with a stunning <strong>Night Mode</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Stone-Paper-Scissors'
        },
        {
            key: "slide4Img",
            projectURL: 'https://react0vite0calculator.netlify.app/',
            projectImgURL: screenShotArr[3],
            isReact: true,
            target_self: false,
            summaryText: <>A simple calculator with eye pleasing UI and optimal UX Uses <strong>3D and 2D CSS animations</strong> with <strong>cool Dark Mode</strong> Supports <strong>full keyboard controls</strong></>,
            repoURL: 'https://github.com/Devarshi0-1/Calculator-v3'
        },
        {
            key: "slide5Img",
            projectURL: '#home',
            projectImgURL: screenShotArr[4],
            isReact: true,
            target_self: true,
            summaryText: <>You are here take a look! This portfolio is made with ReactJS and uses the <strong>API Flash</strong>to automate the Screenshots of my projects. Take a good look, be the judge!</>,
            repoURL: '#'
        }
    ]

    return (
        <section id="projects" className='flex-center'>
            <h1>Projects</h1>
            <h2>Most Recent Work</h2>
            <div className="projectsContainer flex-center">
                <div className="cardsOuterCont flex-center">
                    <div className="cardsInnerCont flex-center">
                        {containerData.map(data => {
                            return <ProjectSlide projectURL={data.projectURL} targetSelf={data.target_self} projectImgURL={data.projectImgURL} isReact={data.isReact} summaryText={data.summaryText} repoURL={data.repoURL} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
