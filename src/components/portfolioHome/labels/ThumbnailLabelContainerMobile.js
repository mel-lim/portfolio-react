import React from "react";

export const ThumbnailLabelContainerMobile = ({ labelName, setOpenModal }) => {
    return (
        <div className="label-button-container mobile-label-button-container">
            <div className='thumbnail-label'>
                <p>{labelName}</p>
            </div>

            <button
                className="learn-more-button pillbox-button"
                onClick={() => setOpenModal(true)}>
                Learn more
                </button>
        </div>
    )
}