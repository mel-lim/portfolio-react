import React from "react";

export const ThumbnailLabelContainer = ({ showButton, labelName, setOpenModal }) => {
    
    return (
        <div className="label-button-container computer-label-button-container">
                {
                    !showButton ?
                        <div className='thumbnail-label circle-when-mobile'>
                            <p>{labelName}</p>
                        </div>
                        :
                        <button
                            className="learn-more-button pillbox-button"
                            onClick={() => setOpenModal(true)}>
                            Learn more
                    </button>
                }
            </div>
    )
}