import React from 'react'
import './index.css'
import { MdOutlineEmail } from 'react-icons/md'


function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>quan.dang2604bku@hcmut.edu.vn</h5>
                        <a href="mailto:quan.dang2604bku@hcmut.edu.vn">
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Messenger</h4>
                        <h5>Nhật Quân</h5>
                        <a href="https://m.me/100007324064936">
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>quan.dang2604bku@hcmut.edu.vn</h5>
                        <a href="mailto:quan.dang2604bku@hcmut.edu.vn">
                            Send a message
                        </a>
                    </article>
                </div>

                <form action=""></form>
            </div>
        </section>
    )
}

export default Contact