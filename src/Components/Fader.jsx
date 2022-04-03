import React from "react";
import '../Styles/styles.css'


export default function Fader(props){

    const [isFade, setIsFade] = React.useState(false)

    const reference = React.useRef();

    React.useEffect(() =>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry => setIsFade(entry.isIntersecting));
        });
        observer.observe(reference.current)
    }, []);

    return(
        <div className={`fade-in ${isFade ? 'visible' : ""}`}
        style={{ transitionDelay: `${props.delay}` }}
        ref={reference}
        id={props.id}
        >
        {props.children}
        </div>
    )
}