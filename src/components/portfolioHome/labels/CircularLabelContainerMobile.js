import React from "react";

export const CircularLabelContainerMobile = ({ labelName, setOpenModal }) => {
    return (
        <div className="circular-label-container mobile-circular-label-container">
            <div className="circle-shape middle-circle">
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