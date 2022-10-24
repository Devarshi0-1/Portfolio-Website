import './skills.css'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import jsIcon from '../../assets/js.svg'
import reactIcon from '../../assets/react.svg'
import nodeIcon from '../../assets/node.svg'
import tailwindIcon from '../../assets/tailwind.svg'
import bootstrapIcon from '../../assets/bootstrap.svg'
import githubIcon from '../../assets/github.svg'

function Skills() {

    const imageSrc = [htmlIcon, cssIcon, jsIcon, reactIcon, nodeIcon,tailwindIcon,bootstrapIcon,githubIcon]
    const mappedComp = imageSrc.map(src => {
        return <span className='flex-center'><img src={src} /></span>
    })

    return (
        <section id='skills' className='flex-center'>
            <h1>Skills</h1>
            <h2>My areas of expertise</h2>
            <div className="skillsGridContainer">
                {mappedComp}
            </div>
        </section>
    )
}

export default Skills