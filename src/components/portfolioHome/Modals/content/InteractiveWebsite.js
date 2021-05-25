import React from "react";

export const InteractiveWebsiteHeader = () =>
    <h4>
        Multi-page, responsive, interactive website
    </h4>

export const InteractiveWebsiteContent = ({ url }) =>
    <div>
        <p>This 'adventure blog' website was built using HTML, CSS and vanilla javascript.</p>

        <p>Please visit it <a href={url} target="_blank" rel="noreferrer noopener">here</a>.</p>

        <p>The website features:
            <ul>
                <li>multi-page navigation</li>
                <li>responsive design</li>
                <li>sticky navigation bar</li>
                <li>interactive information display</li>
                <li>'jump-to' sections</li>
                <li>javascript DOM manipulation</li>
            </ul>
        </p>

        <p>To see the code, take a look at the Github <a href="https://github.com/mel-lim/adventure-website" target="_blank" rel="noreferrer noopener">repo</a>.</p>
    </div>