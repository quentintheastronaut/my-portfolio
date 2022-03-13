import React from 'react'
import './index.css'
import IMAGE from '../../assets/portfolio.png'

const data = [
    {
        id: 1,
        image: IMAGE,
        title: "GU Store - Official GeekUp Merchandise Store",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 2,
        image: IMAGE,
        title: "GU Store - Official GeekUp Merchandise Store",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 3,
        image: IMAGE,
        title: "GU Store - Official GeekUp Merchandise Store",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 4,
        image: IMAGE,
        title: "GU Store - Official GeekUp Merchandise Store",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 5,
        image: IMAGE,
        title: "GU Store - Official GeekUp Merchandise Store",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 6,
        image: IMAGE,
        title: "GU Store - Official GeekUp Merchandise Store",
        github: "https://github.com",
        demo: "https://github.com"
    },
]

function Portfolio() {
    return (
        <section id="#portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data && data.map((project) => {
                        return (
                            <article id={project.id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={project.image} alt="portfolio.png" />
                                </div>
                                <h3>{project.title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={project.github} className='btn' target="_blank">Github</a>
                                    <a href={project.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio