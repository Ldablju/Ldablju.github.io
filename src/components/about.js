import '../styles/about.css'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
function About() {
    const skillEffect = gsap.timeline()
    const left = useRef()
    const right = useRef()
    useEffect(() => {
        skillEffect.from(left.current, {opacity: 0, x: -100, duration: 1, delay: 0}, 'start')
        skillEffect.from(right.current, {opacity: 0, y: 100, duration: 1, delay: 0}, 'start')
    }, [])
    return (
        <div className="App-content-route">
            <div className="avatar">
                <div className="avatar-img" ref={left}></div>
            </div>
            <div className="about" ref={right}>
                <div className="about-info">
                    Cześć, mam na imię <b>Alan</b> programowanie to dla mnie przyjemość. 
                    Swoją przygodę z programowaniem zacząłem od prostych stron w HTML, CSS na początku 2015 roku. 
                    Obecnie tworzę zaawansowane strony/aplikacje internetowe w <b>React.j</b>, <b>Node.js</b>, <b>Express.js</b>. 
                    Największą uwagę skupiam na back-end w języku JavaScript.
                    Obecnie uczę się framework'a NestJS.
                </div>
                <div className="ask-me">
                    <div className="mern"></div>
                    <div className="ask-me-btn">
                        <NavLink to="/contact">Napisz do mnie</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;