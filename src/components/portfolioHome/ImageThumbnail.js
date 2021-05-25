import React from "react";

export const ImageThumbnail = ({ keyword, image, altTag }) => {
    return (
        <div id={`${keyword}-container`}>
            <img src={image} className="embedded-media" alt={altTag} />
        </div>
    )
}