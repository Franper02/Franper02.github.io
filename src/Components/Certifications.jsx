import React from "react";
import '../Styles/certifications.css'
import CertificateComponent from "./CertificateComponent";
import Fader from "./Fader";

export default function Certifications(){
    return(
        <div className="certif-container" id="certificates">
            <div className="certif-header">
                <h1 className="certif-title">certificates</h1>
            </div>
            <div className="certif-wrapper">
                <Fader delay="100ms">
                <CertificateComponent 
                    title="Harvard - Cs50x"
                    link="https://certificates.cs50.io/7ceb377e-cd1a-4782-a40b-1c24f286c135.pdf?size=letter"
                    body="Cs50x is an introduction to Computer Science course which includes 10 lectures, 10 problem sets, 10 labs and one final project"
                    />
                </Fader>
                <Fader delay="200ms">
                <CertificateComponent 
                    title="Harvard - Cs50W"
                    link="https://certificates.cs50.io/dfcb13e9-fa32-4a37-8d4a-657113246922.pdf?size=letter"
                    body="Cs50's Web Programming with Python and Javascript is a Web development course, which dives into 
                    back-end and front-end programming using Django and Sqlite3 for the back-end and Javascript for the front-end.
                    This course includes 8 lectures and 6 projects"
                    />
                </Fader>

            </div>

        </div>
    )
}