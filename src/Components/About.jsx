import React from "react";
import '../Styles/about.css'
import foto from '../images/foto.jpg'
import Fader from "./Fader";

export default function About(){


    const stack = [
        "Javascript",
        "React.js",
        "Python",
        "HTML & CSS"
    ]

    const stackList = stack.map((item, i) => <Fader delay={`${i+1}00ms`} id="stack-li"><li className="stack-element">{item}</li></Fader>) 


    return(
        <div className="about-container" id="about">
            <div className="about-header">
                <h1 className="about-title" >about me</h1>
            </div>
            <Fader delay="200ms">
            <div className="about-body">
                <div className="about-text-container">
                    <p className="about-text">
                    I am currently studying <b>Computer Science</b> at <b>Universidad Nacional del Comahue (UNCo)</b>,
                    and working as a <b>freelance</b> Web developer on <a className="about-link" href="https://www.upwork.com/freelancers/~015da623c27d562725">Upwork.</a>
                    </p>
                    <p className="about-text">
                    i'm curious and interested in any type of <b>software development</b> but my main focus is in web development.
                    i'm also interested in art and gaming.
                    </p>
                    <p className="about-text">
                    These are the technologies that i have been working with:
                    </p>
                    <ul className="about-stack"> 
                       {stackList}
                    </ul>
                </div>
                <div className="image-container">
                    <img className="about-photo" src={foto} alt=""></img>
                </div>

            </div>
            </Fader>

        </div>
    )
}