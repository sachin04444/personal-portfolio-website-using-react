import React from "react"
import './portfolio.css'
import Githubdata from "../Githubdata"

// import img from '../../src/assent/sachin.jpg'

const portfolio = () => {

    return (
        <section id="portfolio">
            <h5>My Recent work </h5>
            <h2>POrtfolio</h2>
            <div className="continer portfolio__container">
                {Githubdata.map((curr) => {
                    return (<>
                        <article className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={curr.imge} alt={curr.Title} />
                            </div>
                            <h3>{curr.Title}</h3>
                            <div className="portfolio_item-cta">
                                <a href={curr.Link} className="btn" target='_blank' rel="noreferrer">Github</a>
                            </div>
                        </article>
                    </>)
                })}

            </div>
        </section>
    )
}
export default portfolio