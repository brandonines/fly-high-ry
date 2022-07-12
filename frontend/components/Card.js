import { forwardRef } from "react"
import { urlFor } from "../lib/sanity"

const Card = forwardRef(({ onClick, href, post}, ref ) => {

    const { title, description, mainImage, username } = post

    return (
        <div className="card-container" href={href} onClick={onClick} ref={ref}>
            <div className="card-text">
                <h2 className="card-title">{title}</h2>
                <div className="info-container">
                    {/* <p>Published on: {new Date(publishedAt).toDateString()}</p> */}
                    <p className="description">{description}</p>
                    <p>{username}</p>
                </div>
            </div>
            <img
                className="main-image"
                alt={title + 'image'}
                src={urlFor(mainImage)}
            />
        </div>
    )
})

export default Card