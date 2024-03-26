import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <footer className='relative flex w-full items-center justify-center overflow-hidden border-t border-t-[#ffffff62] py-20 sm:px-2 sm:py-12'>
            <div className='grid h-4/5 w-4/5 grid-cols-[1fr_3fr_1fr] text-white sm:w-full'>
                <div>
                    <h2 className='mb-1 text-5xl sm:text-2xl'>Devarshi</h2>
                    <p className='mb-2 text-xl opacity-70 sm:text-sm'>
                        Full Stack Developer
                    </p>
                </div>
                <div className='grid grid-cols-3 pt-12 sm:flex sm:flex-col sm:pt-0 [&>a]:text-center [&>a]:text-2xl [&>a]:text-inherit sm:[&>a]:text-sm'>
                    <a href='#about'>About</a>
                    <a href='#home'>Portfolio</a>
                    <a href='#contact'>ContactMe</a>
                </div>
                <div className='flex items-center justify-evenly text-2xl sm:flex sm:h-auto sm:flex-col'>
                    <a
                        href='https://github.com/Devarshi0-1'
                        target='_blank'
                        className='transition-opacity duration-500 ease-in-out hover:opacity-60 sm:text-base'>
                        <FiGithub />
                    </a>
                    <a
                        href='https://www.instagram.com/devarshi__dwivedi/'
                        target='_blank'
                        className='transition-opacity duration-500 ease-in-out hover:opacity-60 sm:text-base'>
                        <FiLinkedin />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/devarshi-dwivedi/'
                        target='_blank'
                        className='transition-opacity duration-500 ease-in-out hover:opacity-60 sm:text-base'>
                        <FiInstagram />
                    </a>
                </div>
                <p className='absolute bottom-0 left-[50%] -translate-x-2/4 opacity-60 sm:text-sm'>
                    &copy; Devarshi. All rights reserved {getYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer
