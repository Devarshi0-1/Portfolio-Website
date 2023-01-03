import './skills.css'
import htmlIcon from '../../assets/skillIcons/html.svg'
import cssIcon from '../../assets/skillIcons/css.svg'
import jsIcon from '../../assets/skillIcons/js.svg'
import reactIcon from '../../assets/skillIcons/react.svg'
import nodeIcon from '../../assets/skillIcons/node.svg'
import tailwindIcon from '../../assets/skillIcons/tailwind.svg'
import bootstrapIcon from '../../assets/skillIcons/bootstrap.svg'
import githubIcon from '../../assets/skillIcons/github.svg'

function Skills() {

    const imageSrc = [htmlIcon, cssIcon, jsIcon, reactIcon, nodeIcon, tailwindIcon, bootstrapIcon, githubIcon]
    const mappedComp = imageSrc.map(src => {
        return (
            <span className='flex-center' key={src}>
                <img src={src} />
            </span>
        )
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