import React, { useState } from "react";

import { ThumbnailLabelContainer } from "./labels/ThumbnailLabelContainer";
import { ThumbnailLabelContainerMobile } from "./labels/ThumbnailLabelContainerMobile";
import { CircularLabelContainerMobile } from "./labels/CircularLabelContainerMobile";
import { LearnMoreModal } from "./modals/LearnMoreModal";

export const ImageThumbnail = ({ keyword, image, altTag, labelName, url }) => {
    const [showButton, setShowButton] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id={`${keyword}-container`}
            className="image-thumbnail-container"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            <img src={image}
                className="embedded-media zoom"
                alt={altTag} />

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