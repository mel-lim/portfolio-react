import React from "react";
import { Link } from "react-router-dom";

import { GithubButton } from "../contactButtons/GithubButton";
import { LinkedInButton } from "../contactButtons/LinkedInButton";

export const Intro = () => {
    return (
        <div id="intro-container" className="zoom">
            <h2>Hello, I'm Mel.</h2>
            <p>I'm an Australian web developer with a background in biomedical engineering and law from the University of Sydney.</p>
            <p>Welcome to my portfolio. I invite you to click around and take a look at my work.</p>
            <p>Do come back periodically to check out new projects and further developments on my pre-existing projects.</p>
            <p>If you would like to work with me, or want to say hi, please don't hesitate to send me a note.</p>

            <Link to="/contact" activeClassName="button-link contact-link">
                <button id="get-in-touch-button" className="pillbox-button contact-button">Get in touch</button>
            </Link>

            <div id="buttons-container">
                <GithubButton />
                
                <LinkedInButton />
            </div>

        </div>
    )
}