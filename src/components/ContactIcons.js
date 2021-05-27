import React from "react";

import { MailButton } from "./contactButtons/MailButton";
import { GithubButton } from "./contactButtons/GithubButton";
import { LinkedInButton } from "./contactButtons/LinkedInButton";

export const ContactIcons = () => {
    return (
        <div className="contact-icons-container">
            
            <MailButton />
            <GithubButton />
            <LinkedInButton />           
            
        </div>
    )
}