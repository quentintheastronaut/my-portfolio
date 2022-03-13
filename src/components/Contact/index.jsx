import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './index.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { SiZalo } from 'react-icons/si'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kn78i8m', 'template_urmcvme', form.current, 'aWe3VIJCl3KKcTMHC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };


    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>quan.dang2604bku@hcmut.edu.vn</h5>
                        <a href="mailto:quan.dang2604bku@hcmut.edu.vn" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Nhật Quân</h5>
                        <a href="https://m.me/100007324064936">
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <SiZalo className='contact__option-icon' />
                        <h4>Zalo</h4>
                        <h5>Đặng Nhật Quân: (+84)77 88 12024</h5>
                        <a href="mailto:quan.dang2604bku@hcmut.edu.vn">
                            Send a message
                        </a>
                    </article>
                </div>

                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" rows="7" placeholder="Your message" required />
                    <button type="submit" className='btn btn-primary' >Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact