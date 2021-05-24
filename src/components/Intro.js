import React from "react";

export const Intro = () => {
    return (
        <div id="intro-container">
            <h2>Hello, I'm Mel.</h2>
            <p>I'm a web developer with a background in biomedical engineering and law.</p>
            <p>Welcome to my portfolio. I invite you to click around and take a look at my work.</p>
            <p>Do come back periodically to check out my new projects and further developments on pre-existing projects.</p>
            <p>If you'd like to work with me, or just want to say hi, please do get in touch. I'd be very pleased to hear from you.</p>

            <a href="contact-me.html" className="button-link" id="contact-me-link"><button id="get-in-touch-button">Get in touch</button></a>

            <div id="buttons-container">
                <a href="https://github.com/mel-lim" className="button-link" id="github-link" target="_blank" rel="noopener noreferrer"><button className="social-media-icon" id="github-icon"></button></a>
                <a href="https://www.linkedin.com/in/mel-lim-11269b1aa/" className="button-link" id="linkedin-link" target="_blank" rel="noopener noreferrer"><button className="social-media-icon" id="linkedin-icon"></button></a>
            </div>

        </div>
    )
}