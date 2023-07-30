import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {
        let {title, description, image, newsUrl} = this.props;

        return (
            <>
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{title}</strong></h5>
                            <p className="card-text">{description}</p>
                            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-secondary"><strong>Read More</strong></a> 
                        </div>
                </div>
            </>
        )
    }
}
