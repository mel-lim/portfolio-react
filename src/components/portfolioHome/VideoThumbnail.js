import React, { useState } from "react";

import { ThumbnailLabelContainer } from "./labels/ThumbnailLabelContainer";
import { ThumbnailLabelContainerMobile } from "./labels/ThumbnailLabelContainerMobile";
import { CircularLabelContainerMobile } from "./labels/CircularLabelContainerMobile";
import { LearnMoreModal } from "./modals/LearnMoreModal";

export const VideoThumbnail = ({ video, keyword, altTag, altImg, labelName, url }) => {
    
    const [openModal, setOpenModal] = useState(false);
    const [showButton, setShowButton] = useState(false);

    return (
        <div id={`${keyword}-container`}
            className="video-thumbnail-container"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>

            <video id={`${keyword}-video`}
                className="embedded-media thumbnail-video zoom"
                muted
                loop={true}
                autoPlay
                alt={`${altTag} demo`}>

                <source src={video}
                    type="video/mp4" />

                <img src={altImg}
                    alt={`video not supported, ${altTag} thumbnail`} />
            </video>

            <ThumbnailLabelContainer showButton={showButton}
                labelName={labelName}
                setOpenModal={setOpenModal}
            />
            <ThumbnailLabelContainerMobile labelName={labelName}
                setOpenModal={setOpenModal}
            />

            <CircularLabelContainerMobile labelName={labelName}
                setOpenModal={setOpenModal} />

            <LearnMoreModal keyword={keyword} openModal={openModal} setOpenModal={setOpenModal} url={url} />
        </div>
    )
}