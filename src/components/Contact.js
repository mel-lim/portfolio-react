import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div>
            <Link to="/">
                <h3>&#8592; Back to portfolio</h3>
            </Link>

            <div id="contact-main">

                <div id="form-container">
                    <h2>Contact me.</h2>
                    <h3>Your note goes right here.</h3>
                    <form method="post" action="https://formspree.io/f/xdoplron" id="contact-form" name="email-form">
                        <div class="form-row">
                            <input type="text" id="name" name="name" placeholder="Your name..." />
                            <input type="text" id="email-address" name="email-address" placeholder="Your email address..." />
                        </div>

                        <div class="form-row">
                            <input type="text" id="subject" name="subject" placeholder="Subject..." />
                        </div>

                        <div class="form-row">
                            <textarea id="message" name="message" placeholder="Your message..."></textarea>
                        </div>

                        <div class="form-row" id="submit-row">
                            <input type="submit" value="Send message" />
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}