import React from 'react'
import emailsjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailsjs.sendForm('service_9lhcwxa', 'template_ze1v63h', form.current, 'Z5bH5w3tAuNDsIDTQ' )
            .then((result)=>{
                console.log(result.text);
            }, (error) =>{
                console.log(error.text);
            });
        
    };
    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-300px sm:h-[450px]'>
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8062903662385!2d80.18242507444411!3d13.047998813199946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613306b96323%3A0xb41f2be500c87f40!2s196%2C%20Agathiyar%20St%2C%20Thirumalai%20Nagar%2C%20Alwartirunagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e0!3m2!1sen!2sin!4v1695712603909!5m2!1sen!2sin"
                            className='border-0 w-full h-full' allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className='w-full' ref={form} onSubmit={sendEmail}>
                            <div className='mb-5'>
                                <input type='text' name='user_name' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <input type='text' name='user_email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                            </div>
                            <div className='mb-5'>
                                <textarea type='text' name='message' rows={3} placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]'></textarea>
                            </div>

                            <button type='submit' className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColortext-center ease-linear duration-150'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact