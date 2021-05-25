import React from "react";

export const ProfilePhoto = ({ keyword, image, altTag }) => {
    return (
        <div id={`${keyword}-container`}>
            <img src={image}
                alt={altTag}
                className="embedded-media" />
        </div>
    )
}