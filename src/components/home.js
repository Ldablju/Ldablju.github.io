import '../styles/home.css'
import idea from '../images/idea.svg'
import briefing from '../images/briefing.svg'
import analytics from '../images/analytics.svg'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
function Home() {
    const skill = useRef()
    const skill0 = useRef()
    const skill1 = useRef()
    const bottom = useRef()
    const left = useRef()
    const skillEffect = gsap.timeline()
    useEffect(() => {
        skillEffect.from(skill.current, {opacity: 0, y: -100, duration: 1, delay: 0}, 'start')
        skillEffect.from(skill0.current, {opacity: 0, y: -100, duration: 1, delay: 0.5}, 'start')
        skillEffect.from(skill1.current, {opacity: 0, y: -100, duration: 1, delay: 1}, 'start')
        skillEffect.from(bottom.current, {opacity: 0, y: 100, duration: 1, delay: 0.5}, 'start')
        skillEffect.from(left.current, {opacity: 0, x: -100, duration: 1, delay: 0.5}, 'start')
    }, [])

    function openSki() {
        const skill = document.querySelector('.skill1');
        skill.style = 'display: block; justify-content: none; align-items: none;'
        const text = document.querySelector('.si1');
        text.style = 'display: block;'
    }
    function openSkil() {
        const skill = document.querySelector('.skill2');
        skill.style = 'display: block; justify-content: none; align-items: none;'
        const text = document.querySelector('.si2');
        text.style = 'display: block;'
    }
    function openSkill() {
        const skill = document.querySelector('.skill3');
        skill.style = 'display: block; justify-content: none; align-items: none;'
        const text = document.querySelector('.si3');
        text.style = 'display: block;'
    }
    return (
        <div className="App-content-route">
            <div className="route-home-img" ref={left}>
            </div>
            <div className="route-home-content">
                <div className="skills">
                    <div className='skill skill1 flex' ref={skill}>
                        <img src={idea} onClick={openSki}></img>
                        <h3>Plan</h3>
                        <div className="skill-info none si1">
                            Każdy mój projekt zaczynam od odpowiedniego planu działania.
                        </div>
                    </div>
                    <div className="skill skill2 flex" ref={skill0}>
                        <img src={briefing} onClick={openSkil}></img>
                        <h3>Projekt</h3>
                        <div className="skill-info none si2">
                            Największą uwagę skupiam na tworzeniu projektów aby w pełni odwzorować plan działania.
                        </div>
                        
                    </div>
                    <div className="skill skill3 flex" ref={skill1}>
                        <img src={analytics} onClick={openSkill}></img>
                        <h3>Realizacja</h3>
                        <div className="skill-info none si3">
                            Realizacja to mój ulubiony etap powstawania strony. Kodowanie strony w oparciu o funkcjonalność.
                        </div>
                    </div>
                </div>
                <div className="home-content-info" ref={bottom}>
                    <div className="name flex">
                        <h1> <span>Alan Adamczyk</span> - Junior Back-End </h1>
                    </div>
                    <div className="contact-home">
                        <div className="email flex">
                            <h3><i class="far fa-envelope"></i> <a href="mailto:alan.adamczyk45@gmail.com">alan.adamczyk45@gmail.com</a></h3>
                        </div>
                        <div className="phone flex">
                            <h3><i class="fas fa-phone-alt"></i> <a href="tel:+48577020415">+48 577 020 415</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;