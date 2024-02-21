import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {
        let { title, description, image, newsUrl, author, publishedAt, source } = this.props;

        return (
            <>
                <div className="news-card bg-dark text-light card p-0">
                    <div className="news-image ">
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title "><strong>{title}</strong></h5>
                        <p className="card-text card-description">{description}</p>
                        <p className="card-text "><small className="text-body-light">By {(author === "https://www.facebook.com/bbcnews") ? "BBC News" : ""} {(author && author !== "https://www.facebook.com/bbcnews") ? author : ""} on {new Date(publishedAt).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })} </small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-info"><strong>Read More</strong></a>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark " style={{ left: '95%' }} >
                            {source.name}
                        </span>
                    </div>
                </div>
            </>
        )
    }
}
