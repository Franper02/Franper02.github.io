import React from "react";
import ProjectCard from "./ProjectCard";
import Fader from "./Fader";
import '../Styles/software.css'


export default function Software(){
    return(
        <div className="software-container" id="projects">
            <div className="software-header">
                <h1 className="software-title">projects</h1>
            </div>
            <div className="projects-wrapper"> 
            <Fader delay="100ms">
            <ProjectCard
                title="MakeAHabit - React"
                text="This is a new version of my final cs50 project, it is a webapp that allows to create an account and
                keep track of habits that the user wants to build, the user can create any task and register every day that he
                do the task.
                "
                stack="Python(Django), Javascript "
                github="https://github.com/Franper02/MakeAHabit-React"
                site="" />
            </Fader>
            <Fader delay="200ms">
            <ProjectCard
                title="Let's Trade Cards"
                text="This is a project that i worked on for a client in upwork, it's a website where you can buy and sell sport cards to anyone in the US, i updated some parts of the Front-end in the website according to the client's request."
                stack="HTML, CSS, Javascript, PHP"
                github=""
                site="https://letstradecards.com/" />
            </Fader>
            <Fader delay="300ms">
            <ProjectCard
                title="Crypto Wallets"
                text="This is a project that i worked on for a client in upwork, it's a website that displays 9 different crypto wallets with a very specific style and with a search bar to filter those wallets."
                stack="HTML, CSS, Javascript"
                github="https://github.com/Franper02/Upwork-wallets"
                site="https://crypto-wallets.000webhostapp.com/" />
            </Fader>
            <Fader delay="400ms">
            <ProjectCard
                title="Recorcholis"
                text="This is a project that i worked on for a Gama Development as a Freelancer, Recorcholis is a big business of mexico, they offer entertainment services for kids and adolescents, i worked in a couple front-end tasks, more specifically in: https://www.recorcholis.com.mx/store/promo , https://www.recorcholis.com.mx/store/packages and https://www.recorcholis.com.mx/Store/ShoppingCart i completed my tasks sucessfully and got the opportunity to work with the Gama Development team."
                stack="HTML, CSS, Javascript, .Net"
                github=""
                site="https://www.recorcholis.com.mx/" />
            </Fader>
            <Fader delay="500ms">
            <ProjectCard
                title="Audiv.io"
                text="This is a project that i worked on for a client on Upwork, it's a tool to automatically get twitch stream highlights and statistics, i worked in a couple of front-end tags for the app page, all the clients requests were completed sucessfuly and i got hired again to keep making changes on his page."
                stack="Python(Django), HTML, CSS, Javascript"
                github=""
                site="https://app.audiv.io/" />
            </Fader>
            <Fader delay="600ms">
            <ProjectCard
                title="Crypto-grid trading simulator"
                text="This is a project that i worked on for a client on Upwork, the client provided an already functional website,
                i was in charge of all the mobile responsive design, coding and deployment of the webapp.
                "
                stack="Python(Flask), Javascript"
                github="https://github.com/iamcappy/Grid-Trading-Simulator-Calculator"
                site="https://grid-trading-simulator.herokuapp.com/" />
            </Fader>
            <Fader delay="700ms">
            <ProjectCard
                title="Trabajos-Webapp"
                text="This was one of my first web-app projects, it was meant to solve an issue in my highschool virtual platform
                we would not notice when the teachers uploaded a new assigment, the purpose of this webapp was to notify students
                when a new assigment was uploaded to the platform, and then they could keep track of the completed assignments, and
                check in the page if they had any pending assignment.
                "
                stack="Python(Django), Javascript "
                github="https://github.com/Franper02/Trabajos-Webapp"
                site="" />
            </Fader>
            <Fader delay="800ms">
            <ProjectCard
                title="JuliApp"
                text="This is an Android app that i made for my girlfriend, when you open the app it will launch a qr scanner that only works with the qr codes that i created, when the qrcode is scanned it will fetch my API for an image and a text, when the information is retreived it will show a card that has a photo of me and my girlfriend and when you swipe the image, it will display a text of my choice."
                stack="Kotlin"
                github="https://github.com/Franper02/JuliApp"
                site="" />
            </Fader>
            </div>


        </div>
    )
}