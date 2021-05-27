import React, { useState } from "react";

import { CircularLabelContainer } from "./labels/CircularLabelContainer";
import { CircularLabelContainerMobile } from "./labels/CircularLabelContainerMobile";
import { LearnMoreModal } from "./modals/LearnMoreModal";

export const HeroImageThumbnail = ({ keyword, image, altTag, labelName, url }) => {
    const [showButton, setShowButton] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id={`${keyword}-container`}
            className="hero-image-container"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)} >

            <img src={image}
                className="embedded-media zoom"
                alt={`${altTag} thumbnail`} />
            
            <CircularLabelContainer showButton={showButton} 
                labelName={labelName}
                setOpenModal={setOpenModal} />
            
            <CircularLabelContainerMobile labelName={labelName}
                setOpenModal={setOpenModal} />

            <LearnMoreModal keyword={keyword} openModal={openModal} setOpenModal={setOpenModal} url={url} />

        </div>
    )
}