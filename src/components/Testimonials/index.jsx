import React from 'react'
import './index.css'
import AVATAR from '../../assets/avatar.jpg'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        avatar: AVATAR,
        name: "Huỳnh Thanh Sang",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores aliquam dicta, harum minima molestias eveniet modi cumque ipsam enim velit commodi sit tempora aut itaque saepe explicabo pariatur nulla.",
    },
    {
        id: 2,
        avatar: AVATAR,
        name: "Huỳnh Thanh Sang",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores aliquam dicta, harum minima molestias eveniet modi cumque ipsam enim velit commodi sit tempora aut itaque saepe explicabo pariatur nulla.",
    },
    {
        id: 3,
        avatar: AVATAR,
        name: "Huỳnh Thanh Sang",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores aliquam dicta, harum minima molestias eveniet modi cumque ipsam enim velit commodi sit tempora aut itaque saepe explicabo pariatur nulla.",
    },
    {
        id: 4,
        avatar: AVATAR,
        name: "Huỳnh Thanh Sang",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores aliquam dicta, harum minima molestias eveniet modi cumque ipsam enim velit commodi sit tempora aut itaque saepe explicabo pariatur nulla.",
    }
]

function Testimonials() {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        data.map(({ id, avatar, name, review }) => {
                            return (
                                <SwiperSlide>
                                    <article id={id} className='testimonials'>
                                        <div className="client__avatar">
                                            <img src={avatar} alt="avatar.jpg" className="" />
                                        </div>
                                        <h5 className='client__name'>{name}</h5>
                                        <small className='client__review'>
                                            {review}
                                        </small>
                                    </article>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials