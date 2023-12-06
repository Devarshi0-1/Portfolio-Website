import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import PhoneIco from "./../../assets/icons/phone.svg?react"
import MailIco from "./../../assets/icons/mail.svg?react"
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const sendEmail = () => {
        emailjs
            .sendForm(
                "service_5jy0pyd",
                "template_84825uq",
                form.current,
                "TlCkPF1bWfjNQoRfp"
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

    return (
        <section id='contact' className='flex-center'>
            <h1>Contact</h1>
            <h2>Let's work together</h2>
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
                        <button className='primaryBtn'>Send Message</button>
                    </form>
                </div>
                <div className='contactOuterCont flex-center'>
                    <div className='contactInfoCont flex-center'>
                        <h2>Get In Touch</h2>
                        <div className='contactGrid'>
                            <div className='phoneIcon flex-center'>
                                <PhoneIco />
                            </div>
                            <p>Phone: +91 6393-9635-99</p>
                            <div className='emailIcon flex-center'>
                                <MailIco />
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
