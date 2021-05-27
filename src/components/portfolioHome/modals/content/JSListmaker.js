import React from "react";

export const JSListmakerHeader = () =>
    <h4>
        The OG backcountry listmaker web application
    </h4>

export const JSListmakerContent = ({ url }) =>
    <div>
        <p>This web application was developed using vanilla javascript to manipulate the DOM, and rendered in HTML and CSS.</p>

        <p>This backcountry listmaker was the precursor to Kit Collab, which was subsequently built on a PERN stack. Unlike Kit Collab, it does not persist any data.</p>

        <p>Check it out <a href={url} target="_blank" rel="noreferrer noopener">here</a>, or visit the Github repo <a href="https://github.com/mel-lim/adventure-website" target="_blank" rel="noreferrer noopener">here</a>.</p>

        <p>The OG app features a few of the features you will see in Kit Collab:
            <ul>
                <li>suggested list items generated based on user-selection</li>
                <li>the ability to add and delete list items</li>
            </ul>
        </p>

        <p>It's pretty neat to see the evolution of this app, is it not?</p>

    </div>