import React from "react";

export const HeroImageThumbnail = ({ keyword, image, altTag, url }) => {
    return (
        <div id={`${keyword}-container`}>
            <img src={image} className="embedded-media" alt={`${altTag} thumbnail`} />
            <div className="circle-shape middle-circle">
                <div id={`${keyword}-label`}
                    className="project-label">

                </div>
            </div>
            <a href={url}
                className="button-link"
                target="_blank"
                rel="noopener noreferrer">
                <button id={`go-to-${keyword}`}>Try it out</button>
            </a>
        </div>
    )
}