import React from "react";

export const JavascriptGameHeader = () =>
    <h4>
        Polar bear themed javascript game
    </h4>

export const JavascriptGameContent = ({ url }) =>
    <div>
        <p>This fun little project was built using vanilla javascript and rendered using HTML and CSS.</p>

        <p>The game board is rendered using the HTML5 {'<canvas>'} element. It is responsively designed, so that it can be played on a variety of devices (computer, tablet and mobile).</p>

        <p>Try it <a href={url} target="_blank" rel="noreferrer noopener">here</a>. It will put a smile on your face, guaranteed.</p>

        <p>Check out the <a href="https://github.com/mel-lim/polar-bear-game" target="_blank" rel="noreferrer noopener">repo</a> on my Github.</p>

    </div>