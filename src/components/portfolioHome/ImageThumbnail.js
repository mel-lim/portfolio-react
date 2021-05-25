import React, { useState } from "react";

import { LearnMoreModal } from "./Modals/LearnMoreModal";

export const ImageThumbnail = ({ keyword, image, altTag, labelName, url }) => {
    const [showButton, setShowButton] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id={`${keyword}-container`}
            className="image-thumbnail-container"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            <img src={image}
                className="embedded-media"
                alt={altTag} />

            {
                !showButton ?

                    <div className='thumbnail-label'>
                        <p>{labelName}</p>
                    </div>
                    :
                    <button id={`${keyword}-learn-more-button`}
                        className="learn-more-button pillbox-button"
                        onClick={() => setOpenModal(true)}>
                        <p id={`${keyword}-enlarge-button-p`}>Learn more</p>
                    </button>
            }

            <LearnMoreModal keyword={keyword} openModal={openModal} setOpenModal={setOpenModal} url={url} />
        </div>
    )
}