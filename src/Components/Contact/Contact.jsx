import { useRef, useEffect } from "react"
import { useActiveTabStore } from "../store"
import emailjs from "@emailjs/browser"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FiPhone, FiMail } from "react-icons/fi"
import "./contact.css"

const schema = yup.object().shape({
    name: yup.string("Should Be A String").required("Name is Required"),
    email: yup
        .string("Should Be A String")
        .email("Enter an Valid Email Address")
        .required("Email is Required"),
    subject: yup.string("Should Be A String").required("Subject is Required"),
    message: yup.string("Should Be A String").required("Message is Required"),
})

function Contact() {
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
                "80OiAn-VHGf8dgbiy"
            )
            .then(
                (result) => {
                    console.log(`Email processed with Status: ${result.text}`)
                    form.current.reset()
                },
                (error) => {
                    console.log(error.text)
                }
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
            }
        )

        observer.observe(contactSec.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section id='contact' className='flex-center' ref={contactSec}>
            <h1 className='sectionMainHeading'>Contact</h1>
            <h2 className='sectionSecondaryHeading'>Let's work together</h2>
            <div className='contactContainer'>
                <div className='formCont'>
                    <h2>Let's Build Something Great Together</h2>
                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <input
                            {...register("name")}
                            type='text'
                            placeholder='Name'
                            name='name'
                        />
                        <p>{errors.name?.message}</p>
                        <input
                            {...register("email")}
                            type='email'
                            placeholder='Your Email'
                            name='email'
                        />
                        <p>{errors.email?.message}</p>
                        <input
                            {...register("subject")}
                            type='text'
                            placeholder='Project'
                            name='subject'
                        />
                        <p>{errors.subject?.message}</p>
                        <textarea
                            {...register("message")}
                            placeholder='Message'
                            name='message'></textarea>
                        <p>{errors.message?.message}</p>
                        <button className='primaryBtn'>
                            {isLoading ? (
                                <span class='loader'></span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
                <div className='contactOuterCont flex-center'>
                    <div className='contactInfoCont flex-center'>
                        <h2>Get In Touch</h2>
                        <div className='contactGrid'>
                            <div className='phoneIcon flex-center'>
                                <FiPhone />
                            </div>
                            <p>Phone: +91 6393-9635-99</p>
                            <div className='emailIcon flex-center'>
                                <FiMail />
                            </div>
                            <p>Email: devarshidwi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
