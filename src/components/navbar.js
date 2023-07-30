import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="/"><strong>NewsMonkey</strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-5">
                                <a className="nav-link active mx-2" aria-current="page" href="/">Home</a>
                                <a className="nav-link active mx-2" href="/">About</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}