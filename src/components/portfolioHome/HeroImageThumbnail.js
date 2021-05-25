import React, { useState } from "react";

import { LearnMoreModal } from "./Modals/LearnMoreModal";

export const HeroImageThumbnail = ({ keyword, image, altTag, labelName, url }) => {
    const [showButton, setShowButton] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id={`${keyword}-container`}
            className="hero-image-container"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)} >

            <img src={image}
                className="embedded-media"
                alt={`${altTag} thumbnail`} />

            {
                !showButton ?
                    <div className="circle-shape middle-circle">
                        <p>{labelName}</p>
                    </div>
                    : <button id={`learn-more-${keyword}`}
                        className="learn-more-button pillbox-button"
                        onClick={() => setOpenModal(true)}>Learn more</button>
            }

            <LearnMoreModal keyword={keyword} openModal={openModal} setOpenModal={setOpenModal} url={url} />

        </div>
    )
}