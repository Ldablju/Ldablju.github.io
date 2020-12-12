import React from 'react';
import back1 from '../images/back-1.png'
import back2 from '../images/back-2.png'
import back3 from '../images/back-3.png'
import gsap from 'gsap'


class Back extends React.Component {
    componentDidMount() {
        const skillEffect = gsap.timeline()
        skillEffect.from('.one', {opacity: 0, y: -100, duration: 1, delay: 0}, 'start')
        skillEffect.from('.two', {opacity: 0, y: -100, duration: 1, delay: 0.5}, 'start')
        skillEffect.from('.thre', {opacity: 0, y: -100, duration: 1, delay: 1}, 'start')
    }

    render() {
        return (
            <div className="project">
                <div className="project-img one">
                    <h1>CS:GO Tournaments</h1>
                    <div className="desc">
                        <p>Node.js React.js MongoDB</p>
                    </div>
                    <a target="_blank" href={back1}>View project</a>
                    <p> | </p>
                    <a target="_blank" className="block">See on github</a>
                </div>
                <div className="project-img two">
                    <h1>Faceit API</h1>
                    <div className="desc">
                        <p>Node.js Express.js</p>
                    </div>
                    <a target="_blank" href={back2}>View project</a>
                    <p> | </p>
                    <a target="_blank" className="block">See on github</a>
                </div>
                <div className="project-img thre">
                    <h1>React Shoop</h1>
                    <div className="desc">
                        <p>Node.js React.js MongoDB</p>
                    </div>
                    <a target="_blank" href={back3}>View project</a>
                    <p> | </p>
                    <a target="_blank" href="https://github.com/Ldablju/react-shop-cart">See on github</a>
                </div>
            </div>
        );

    }
}

export default Back;