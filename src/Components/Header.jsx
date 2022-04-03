import React from "react";
import Typist from 'react-typist'
import '../Styles/styles.css'
import Fader from "./Fader";

export default function Header(){
    return(
        <div className="header-container" id="home">
                <Typist
                avgTypingDelay={180}
                >
                <span className="header-title">Hi, i'm <span className="name">Fran.</span></span>
                </Typist>

                <Fader delay="200ms">
                <h2 className="header-subtitle">Web Developer.</h2>
            <p className="header-about">I'm a web developer based in Argentina, currently studying Computer Science on 
                Universidad Nacional Del Comahue. <br>
                </br>I have profound interest in Web development and 
                Mobile development.
            </p>
            <a className="header-button" href="mailto:francoperdomo6@gmail.com">
                <svg className="button-image" viewBox="0 0 24 24" style={{fontSize : "20px" ,marginRight : ".5em"}} width="1.6em" height="1.6em" >
                    <path
                        stroke-width="0"
                        fill="#FF0075"  
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
                    </svg>
                Contact me
            </a>
            <span className="header-email">or send an email to: <b>francoperdomo6@gmail.com</b></span>
                </Fader>

        </div>
    )
}