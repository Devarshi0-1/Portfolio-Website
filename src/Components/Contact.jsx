import emailjs from "@emailjs/browser"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { FiMail, FiPhone } from "react-icons/fi"
import * as yup from "yup"
import { useActiveTabStore } from "./store"

const schema = yup.object().shape({
    name: yup.string("Should Be A String").required("Name is Required"),
    email: yup
        .string("Should Be A String")
        .email("Enter an Valid Email Address")
        .required("Email is Required"),
    subject: yup.string("Should Be A String").required("Subject is Required"),
    message: yup.string("Should Be A String").required("Message is Required"),
})

const Contact = () => {
    const form = useRef()
    const contactSec = useRef()
    const {
        register,
        handleSubmit,
        formState: { isLoading, errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const sendEmail = () => {
        emailjs
            .sendForm(
                "service_q8bttqb",
                "template_qnxfu3m",
                form.current,
                "80OiAn-VHGf8dgbiy",
            )
            .then(
                (result) => {
                    console.log(`Email processed with Status: ${result.text}`)
                    form.current.reset()
                },
                (error) => {
                    console.log(error.text)
                },
            )
    }

    const setActiveTab = useActiveTabStore((state) => state.setActiveTab)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveTab("contact")
                }
            },
            {
                threshold: 0.5,
            },
        )

        observer.observe(contactSec.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id='contact'
            className='m-0 mx-auto my-0 mt-[150px] flex min-h-screen w-9/12 flex-col items-center justify-center overflow-hidden sm:m-0 sm:w-full sm:p-4'
            ref={contactSec}>
            <h1 className='font-normal text-6xl text-[var(--clr-sec-text)] opacity-80 sm:text-5xl'>
                Contact
            </h1>
            <h2 className='mb-12 text-2xl font-normal text-[var(--clr-sec-text)] opacity-50'>
                Let's work together
            </h2>
            <div className='grid grid-cols-[4fr_2fr] rounded-2xl border border-gray-500 border-opacity-50 bg-gradient-to-br from-[#ffffff33] to-transparent shadow-md backdrop-blur sm:block'>
                <div className='m-4 sm:m-3 sm:flex sm:w-fit sm:flex-col sm:px-0 sm:py-5'>
                    <h2 className='text-4xl text-[var(--clr-sec-text)] opacity-70 sm:text-xl'>
                        Let's Build Something Great Together
                    </h2>
                    <form
                        ref={form}
                        onSubmit={handleSubmit(sendEmail)}
                        className='relative flex min-h-fit flex-col gap-3 [&>p:empty]:hidden [&>p]:absolute [&>p]:bottom-0 [&>p]:right-0 [&>p]:bg-[var(--bg-clr-primary)] [&>p]:p-3 [&>p]:text-red-500 sm:[&>p]:p-2 sm:[&>p]:text-base'>
                        <input
                            {...register("name")}
                            className='mt-5 rounded-2xl border border-[rgb(146,146,146,0.3)]  bg-transparent px-5 py-3 text-2xl font-extralight text-[var(--clr-sec-text)] opacity-70 placeholder:text-[var(--clr-sec-text)] placeholder:opacity-40 focus:outline focus:outline-1 focus:outline-[var(--clr-accent)] sm:text-lg'
                            type='text'
                            placeholder='Name'
                            name='name'
                        />
                        <p>{errors.name?.message}</p>
                        <input
                            {...register("email")}
                            className='rounded-2xl border border-[rgb(146,146,146,0.3)] bg-transparent px-5 py-3 text-2xl font-extralight text-[var(--clr-sec-text)] opacity-70 placeholder:text-[var(--clr-sec-text)] placeholder:opacity-40 focus:outline focus:outline-1 focus:outline-[var(--clr-accent)] sm:text-lg'
                            type='email'
                            placeholder='Your Email'
                            name='email'
                        />
                        <p>{errors.email?.message}</p>
                        <input
                            {...register("subject")}
                            className='rounded-2xl border border-[rgb(146,146,146,0.3)] bg-transparent px-5 py-3 text-2xl font-extralight text-[var(--clr-sec-text)] opacity-70 placeholder:text-[var(--clr-sec-text)] placeholder:opacity-40 focus:outline focus:outline-1 focus:outline-[var(--clr-accent)] sm:text-lg'
                            type='text'
                            placeholder='Project'
                            name='subject'
                        />
                        <p>{errors.subject?.message}</p>
                        <textarea
                            {...register("message")}
                            className='resize-none rounded-2xl border border-[rgb(146,146,146,0.3)] bg-transparent px-5 py-3 text-2xl font-extralight text-[var(--clr-sec-text)] opacity-70 placeholder:text-[var(--clr-sec-text)] placeholder:opacity-40 focus:outline focus:outline-1 focus:outline-[var(--clr-accent)] sm:text-lg'
                            placeholder='Message'
                            name='message'></textarea>
                        <p>{errors.message?.message}</p>
                        <button className='flex h-fit w-fit cursor-pointer items-center rounded-md border-0 bg-white px-4 py-2 text-2xl text-[var(--clr-text)] transition-[background-color] duration-500 hover:bg-slate-300 sm:text-base'>
                            {isLoading ? (
                                <span class='relative left-1/2 top-1/2 inline-block aspect-square h-12 animate-spin rounded-[50%] border-2 border-white after:absolute after:w-10 after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-[50%] after:border-2 after:border-solid after:border-transparent after:border-b-[#ff3d00] after:content-none'></span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
                <div className='flex items-center justify-center rounded-[0_10px_10px_0] border-l border-solid border-l-[#ffffff33] sm:hidden'>
                    <div className='flex min-h-[80%] w-11/12 flex-col items-center justify-center'>
                        <h2 className='text-4xl font-extralight text-white'>
                            Get In Touch
                        </h2>
                        <div className='mx-0 my-auto grid min-h-[60%] grid-cols-[2fr_8fr] grid-rows-3 gap-y-3'>
                            <div className='mx-auto flex aspect-square h-16 items-center justify-center rounded-[50%] bg-[#ffffff1a] '>
                                <FiPhone className='text-2xl text-white' />
                            </div>
                            <p className='mx-auto my-auto h-fit text-left text-2xl text-white'>
                                Phone: +91 6393-9635-99
                            </p>
                            <div className='mx-auto flex aspect-square h-16 items-center justify-center rounded-[50%] bg-[#ffffff1a] '>
                                <FiMail className='text-2xl text-white' />
                            </div>
                            <p className='mx-auto my-auto h-fit text-left text-2xl text-white'>
                                Email: devarshidwi@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
