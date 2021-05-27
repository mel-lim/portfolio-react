import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoadSpinner } from "./LoadSpinner/LoadSpinner";
import { Footer } from "./Footer";

import { delay, sendMessageApi } from "../api";

export const Contact = () => {

    // State to render the spinner
    const [isLoading, setIsLoading] = useState(false);

    const [submissionStatusMessage, setSubmissionStatusMessage] = useState('');

    const sendMessage = async (name, email, subject, message, retryCount = 0) => {
        setIsLoading(true);
        setSubmissionStatusMessage('Sending message...');

        const requestBodyContent = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            source: "Mel Lim Portfolio"
        }

        try {
            // Api call to send message
            const { responseBodyText } = await sendMessageApi(requestBodyContent);

            setSubmissionStatusMessage(responseBodyText.message);
            setIsLoading(false);

        } catch (error) {
            console.error("Error in contact form submission. Cannot connect to server");

            if (retryCount < 5) {
                setSubmissionStatusMessage(`The server not responding. Trying again... ${retryCount}/4`);
                await delay(retryCount); // Exponential backoff - see api.js
                return sendMessage(name, email, subject, message, retryCount + 1); // After the delay, try connecting again
            } else {
                setSubmissionStatusMessage('Sorry, our server is not responding. Please check your internet connection or come back later.');
                setIsLoading(false);
            }
            setIsLoading(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, subject, message } = event.target.elements; // See MDN documentation for HtmlFormElements/elements
        sendMessage(name, email, subject, message);
    }

    return (
        <main id="contact-main">

            <div id="contact-form-container">
                <Link to="/">
                    <h1>mellim.io</h1>
                </Link>
                <h3>Your note goes right here.</h3>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">

                        <input type="text" id="name" name="name" placeholder="Your name..." required />

                        <input type="email" id="email" name="email-address" placeholder="Your email address..." required />

                    </div>

                    <div className="form-row">
                        <input type="text" id="subject" name="subject" placeholder="Subject..." />
                    </div>

                    <div className="form-row">
                        <textarea id="message" name="message" placeholder="Your message..." required ></textarea>
                    </div>

                    <div className="form-row" id="submit-row">

                        <Link to="/">
                            <button className="pillbox-button contact-button">Return to portfolio</button>
                        </Link>

                        <input type="submit"
                            className="pillbox-button contact-button" 
                            value="Send message" />

                    </div>

                </form>

                <p id="contact-submission-status">{submissionStatusMessage}</p>
            {
                isLoading ?
                    <LoadSpinner />
                    : null
            }
            </div>

            <Footer />
        </main>
    )
}