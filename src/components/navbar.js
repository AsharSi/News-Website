import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                    <div className="container-fluid justify-content-between">
                        <Link className="navbar-brand" to="/"><strong>NewsMonkey</strong></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li><Link className="nav-link active mx-1" aria-current="page" to="/">General</Link></li>
                                <li><Link className="nav-link active mx-1" to="/business">Business</Link></li>
                                <li><Link className="nav-link active mx-1" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="nav-link active mx-1" to="/health">Health</Link></li>
                                <li><Link className="nav-link active mx-1" to="/science">Science</Link></li>
                                <li><Link className="nav-link active mx-1" to="/sports">Sports</Link></li>
                                <li><Link className="nav-link active mx-1" to="/technology">Technology</Link></li>
                            </div>
                        </div>
                        {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active mx-1" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link active mx-1" to="/">About</Link>
                            </div>
                        </div> */}
                    </div>
                </nav>
            </>
        )
    }
}