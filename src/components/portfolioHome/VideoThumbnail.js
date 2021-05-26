import React, { useState } from "react";

import { LearnMoreModal } from "./Modals/LearnMoreModal";

export const VideoThumbnail = ({ video, keyword, altTag, altImg, labelName, url }) => {
    const [showButton, setShowButton] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id={`${keyword}-container`}
            className="video-thumbnail-container"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
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
            </video>
            {
                !showButton ?

                    <div className='thumbnail-label'>
                        <p>{labelName}</p>
                    </div>
                    :
                    <button id={`${keyword}-learn-more-button`}
                        className="learn-more-button pillbox-button"
                        onClick={() => setOpenModal(true)}>
                        Learn more
                    </button>
            }

            <LearnMoreModal keyword={keyword} openModal={openModal} setOpenModal={setOpenModal} url={url} />
        </div>
    )
}