import React from "react";

export const CircularLabelContainer = ({ showButton, labelName, setOpenModal }) => {
    return (
        <div className="circular-label-container computer-circular-label-container">
            {
            !showButton ?
        <div className="circle-shape middle-circle">
            <p>{labelName}</p>
        </div>
        : <button
            className="learn-more-button pillbox-button"
            onClick={() => setOpenModal(true)}>Learn more</button>
}
        </div>
    )
}