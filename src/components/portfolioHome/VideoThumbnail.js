import React from "react";

export const VideoThumbnail = ({ video, keyword, altTag, altImg, labelName }) => {

    return (
        <div id={`${keyword}-container`} className="subgrid-video-container">
            <video id={`${keyword}-video`}
                className="embedded-media thumbnail-video"
                muted
                loop={true}
                autoPlay
                alt={`${altTag} demo`}>
                <source src={video}
                    type="video/mp4" />
                <img src={altImg}
                    alt={`video not supported, ${altTag} thumbnail`} />

                <div className='thumbnail-label'>
                <p>{labelName}</p>
                </div>
                <button id={`${keyword}-enlarge-button`}
                    className="click-to-enlarge-button">
                    <p id={`${keyword}-enlarge-button-p`}>Click to enlarge</p>
                </button>
            </video>
        </div>
    )
}