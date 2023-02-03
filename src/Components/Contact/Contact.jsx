import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './contact.css'

const schema = yup.object().shape({
    name: yup.string("Should Be A String").required("Name is Required"),
    email: yup.string("Should Be A String").email("Enter an Valid Email Address").required("Email is Required"),
    subject: yup.string("Should Be A String").required("Subject is Required"),
    message: yup.string("Should Be A String").required("Message is Required")
})

function Contact() {
    const form = useRef();
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const sendEmail = () => {
        emailjs.sendForm('service_5jy0pyd', 'template_84825uq', form.current, 'TlCkPF1bWfjNQoRfp')
            .then((result) => {
                console.log(`Email processed with Status: ${result.text}`);
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id='contact' className='flex-center'>
            <h1>Contact</h1>
            <h2>Let's work together</h2>
            <div className="contactContainer">
                <div className="formCont">
                    <h2>Let's Build Something Great Together</h2>
                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <input {...register('name')} type="text" placeholder='Name' name='name' />
                        <p>{errors.name?.message}</p>
                        <input {...register('email')} type="email" placeholder='Your Email' name='email' />
                        <p>{errors.email?.message}</p>
                        <input {...register('subject')} type="text" placeholder='Project' name='subject' />
                        <p>{errors.subject?.message}</p>
                        <textarea {...register('message')} placeholder='Message' name='message'></textarea>
                        <p>{errors.message?.message}</p>
                        <button className='primaryBtn'>Send Message</button>
                    </form>
                </div>
                <div className="contactOuterCont flex-center">
                    <div className="contactInfoCont flex-center">
                        <h2>Get In Touch</h2>
                        <div className="contactGrid">
                            <div className="phoneIcon flex-center">
                                <svg className='contactIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            </div>
                            <p>Phone: +91 6393-9635-99</p>
                            <div className="emailIcon flex-center">
                                <svg className='contactIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                            </div>
                            <p>Email: devarshidwi@gmail.com</p>
                            <div className="websiteIcon flex-center">
                                <svg className='contactIcons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" /></svg>
                            </div>
                            <p><a href="https://devarshi0personalportfolio.netlify.app/">My Website</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact