import React from "react";
import '../Styles/styles.css'
import Fader from "./Fader";


export default function SideBar(){
    return(
        <div className="sidebar-container">
            <div className="sidebar-links">
                <Fader id="fadelinks" delay="100ms"><a href="#home" className="link" id="home" >home</a></Fader>
                <Fader id="fadelinks" delay="200ms"><a href="#about" className="link" id="about" >about</a></Fader>
                <Fader id="fadelinks" delay="300ms"><a href="#certificates" className="link" id="certificates">certificates</a></Fader>
                <Fader id="fadelinks" delay="400ms"><a href="#projects" className="link" id="projects" >projects</a></Fader>

            </div>
            <div className="sidebar-socials">
                <a href="mailto:francoperdomo6@gmail.com" className="sidebar-link">
                    <svg className="sidebar-image" viewBox="0 0 24 24" style={{fontSize : "20px"}} >
                        <path
                        stroke-width="0"
                        fill="#FF0075"  
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
                    </svg>
                </a>
                <a href="https://github.com/Franper02" target="_blank" className="sidebar-link">
                    <svg className="sidebar-image" viewBox="0 0 24 24" >
                        <path 
                            stroke-width="0" 
                            fill="#FF0075" 
                            d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" 
                        />
                    </svg>
                </a>
            </div>

        </div>
    )
}