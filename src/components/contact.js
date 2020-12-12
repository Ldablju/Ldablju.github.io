import '../styles/contact.css'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import emailjs from 'emailjs-com';
function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        const name = e.target.name.value
        const number = e.target.number.value
        const message = e.target.message.value

        const errors = document.querySelector('.errors')
        const post = document.querySelector('.post')
        const contact = document.querySelector('.contact')

        if(!name && !number && !message){
            errors.innerText = 'Wypełnij proszę wszystkie pola.'
        } else if(!name) {
            errors.innerText = 'Nie podałeś swojego Imienia i Nazwiska.'
        } else if(!number) {
            errors.innerText = 'Nie podałeś numeru telefonu.'
        } else if(!message) {
            errors.innerText = 'Nie wpisałeś treści wiadomości.'
        } else {
            emailjs.sendForm('service_2xv5poe', 'template_nj8peet', e.target, 'user_xgBAFGiJUTObS6NygTKE1')
                .then((result) => {
                    contact.style = 'display: none'
                    setTimeout(function(){ post.style = 'display: block; width: 80%; height: 70vh;' }, 0)
                    setTimeout(function(){ post.style = 'width: 0%; height: 0vh;' }, 3000);
                    setTimeout(function(){ post.style= "display:none" }, 4000);
                    setTimeout(function(){ contact.style = 'display: block' }, 4000);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }
      }



    const skillEffect = gsap.timeline()
    const left = useRef()
    const right = useRef()
    const bottom = useRef()
    useEffect(() => {
        skillEffect.from(left.current, {opacity: 0, x: -100, duration: 1, delay: 0}, 'start')
        skillEffect.from(right.current, {opacity: 0, y: 100, duration: 1, delay: 0}, 'start')
        skillEffect.from(bottom.current, {opacity: 0, y: -100, duration: 1, delay: 0}, 'start')
    }, [])
    return (
        <div className="App-content-route">
            <div className="errors"></div>
            <div className="post">
            </div>
            <div className="contact">
                <form onSubmit={sendEmail}>
                    <div className="contact-info" ref={left}>
                        <div className="contact-name flex">
                            <input type="text" placeholder="Imię i nazwisko" name="name"></input>
                        </div>
                        <div className="contact-phone flex">
                            <input type="number" placeholder="Nr telefonu" name="number"></input>
                        </div>
                    </div>
                    <div className="contact-content flex" ref={right}>
                        <textarea name="message"></textarea>
                    </div>
                    <div className="contact-send flex" ref={bottom}>
                        <input type="submit" value="Napisz"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;