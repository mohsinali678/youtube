import React, { Component } from 'react'
import "./About.css"
import Ali from "../images/Ali.jpeg";
import Kelvin from "../images/Kelvin.jpeg";

export default class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="projectDescription">
                    <h1>Project Description</h1>
                    <p >A React application that uses YouTube Data API, 
                    to search a variety of YouTube videos in application.
                    Using the API we can search for videos matching specific search terms, 
                    topics, locations, publication dates, and much more. 
                    </p>
                </div>

                    <h1>Developed By</h1>
                    <br/>
                <div className="images">
                    <div>
                        <img src={Ali} alt="Ali"/>
                        <h2>Hafiz Ali</h2>
                        <p>
                            A Full Stack web developer at Pursuit having a background in Software Development. 
                            Inspired by AI, creates efficient and maintainable applications using recursive algorithms.
                        </p>
                        <a href="https://github.com/mohsinali678"><h1>Github Link</h1></a>

                    </div>
                    <div>
                        <img src={Kelvin} alt="KElvin"/>
                        <h2>Kelvin Zheng</h2>
                        <p>
                            A Full Stack Fellow at Pursuit with a robust background in Software Development/Full Stack Web/ Engineering. 
                            Motivated by the principles of engineering, Creates efficient and maintainable applications using an iterative 
                            approach.
                        </p>
                        <a href="https://github.com/Kelvinz6820"><h1>Github Link</h1></a>

                    </div>
                </div>
            </div>
        )
    }
}
