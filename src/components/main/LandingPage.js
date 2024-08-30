import React from 'react';
import './LandingPage.css'; // Import your CSS file
import about from '../assets/images.jpeg'

const LandingPage = () => {

    return (
        <section className='main' id='home'>
            <div className='landing-page'>
                <div className='text'>
                <span className='hi'>Hello I'm</span>
                    <p className='myname'><br />Muhammad Usman <br /><span className='react'>React Developer</span></p>
                    <p className='bio'>Combining art and code to craft digital masterpieces
                        I design and develop digital experiences that inpire and delight, turning ideas into reality
                    </p>
                    <br /><br />
                    <button class="contact-btn">Contact Me</button>
                    <button class="contact-btn btn2">Say Hello!</button>
                </div>
                <div className='img-cont'>
                    <img src={about} className='img'></img>
                    <div className='line'></div>
                </div>
            </div>
            <div className='icons'>

            </div>
        </section>
    );
};

export default LandingPage;
