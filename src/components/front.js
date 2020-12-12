import React from 'react';
import front1 from '../images/front-1.jpg'
import front2 from '../images/front-2.png'
import front3 from '../images/front-3.jpg'
import gsap from 'gsap'


class Front extends React.Component {
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
                    <img src={front1}></img>
                </div>
                <div className="project-img two">
                    <img src={front2}></img>
                </div>
                <div className="project-img thre">
                    <img src={front3}></img>
                </div>
            </div>
        );

    }
}

export default Front;