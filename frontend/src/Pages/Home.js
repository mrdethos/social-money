import React from "react";
import '../Assets/Styles/Home.css';
import More from '../Assets/Images/expand_more.svg';
import Less from '../Assets/Images/expand_less.svg';
import Github from '../Assets/Images/github-icon.png';

import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <div className="scroll-container">
                <div className="page" id="page-1">
                    <div className="bg-image" id="bg-1">
                        <h1 id="title">SOCIAL MONEY</h1>
                        <div className="user-link-container">
                            <Link className="user-link" to="/login">Login</Link>
                            <Link className="user-link" to="/register" >Register</Link>
                        </div>
                        <a className="more-bottom" href="#page-2"><img className="arrow" src={More} alt="More"></img></a>
                    </div>
                </div>
                <div className="page" id="page-2">
                    <div className="bg-image" id="bg-2">
                        <a className="more-bottom" href="#page-1"><img className="arrow" src={Less} alt="More"></img></a>
                        <div className="text-page-2">
                            <div className="text-1">
                                <h1>FOLLOW YOUR FAVORITE STOCKS IN REAL TIME</h1>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="text-2">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie quis erat rhoncus bibendum. Phasellus justo sapien, sollicitudin eget consectetur et, imperdiet in sapien. </h2>
                            </div>
                        </div>
                        <a className="more-bottom" href="#page-3"><img className="arrow" src={More} alt="More"></img></a>
                    </div>
                </div>
                <div className="page" id="page-3">
                    <div className="bg-image" id="bg-3">
                        <a className="more-bottom" href="#page-2"><img className="arrow" src={Less} alt="More"></img></a>
                        <div className="text-page-2">
                            <div className="text-1">
                                <h1>LEARN. TEACH. SHARE YOUR IDEAS.</h1>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="text-2">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie quis erat rhoncus bibendum. Phasellus justo sapien, sollicitudin eget consectetur et, imperdiet in sapien. </h2>
                            </div>
                        </div>
                        <a className="more-bottom" href="#page-4"><img className="arrow" src={More} alt="More"></img></a>
                    </div>
                </div>

                <div className="page" id="page-4">
                    <div className="bg-image" id="bg-4">
                        <a className="more-bottom" href="#page-1"><img className="arrow" src={Less} alt="More"></img></a>
                        <div className="text-page-4">
                            <div className="text-3">
                                <h1>WHO WE ARE</h1>
                            </div>
                            <div className="horizontal-line-1"></div>
                            <div className="text-4">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie quis erat rhoncus bibendum. Phasellus justo sapien, sollicitudin eget consectetur et, imperdiet in sapien. </h2>
                            </div>
                            <div className="horizontal-line-2"></div>
                        </div>
                        <a className="more-bottom" href="https://github.com/mrdethos/"><img className="github-icon" src={Github}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;