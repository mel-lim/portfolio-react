import './Modal.css';

import React from "react";
import Popup from "reactjs-popup";

import { PernHeader, PernContent } from "./content/Pern";
import { InteractiveWebsiteHeader, InteractiveWebsiteContent } from "./content/InteractiveWebsite";

export const LearnMoreModal = ({ keyword, openModal, setOpenModal, url }) => {

    const getHeader = keyword => {
        switch (keyword) {

            case 'pern-web-app':
                return <PernHeader />

            case 'interactive-website':
                return <InteractiveWebsiteHeader />

            case 'javascript-game':
                return <PernHeader />

            case 'listmaker-app':
                return <PernHeader />

            default:
                console.log("keyword not recognised");
        }
    }

    const getContent = keyword => {
        switch (keyword) {

            case 'pern-web-app':
                return <PernContent url={url} />

            case 'interactive-website':
                return <InteractiveWebsiteContent url={url} />

            case 'javascript-game':
                return <PernContent />

            case 'listmaker-app':
                return <PernContent />

            default:
                console.log("keyword not recognised");
        }
    }

    const getButtonText = keyword => {
        switch (keyword) {

            case 'pern-web-app':
                return "Go to Kit Collab"

            case 'interactive-website':
                return "Visit site"

            case 'javascript-game':
                return <PernContent />

            case 'listmaker-app':
                return <PernContent />

            default:
                console.log("keyword not recognised");
        }
    }

    const close = () => {
        console.log('modal closed');
        setOpenModal(false);
    }

    return (
        <Popup open={openModal} closeOnDocumentClick onClose={close}>
            <div className="modal">
                <button className="close" onClick={close}>&times;</button>
                <div className="header">{getHeader(keyword)}</div>
                <div className="content">
                    {getContent(keyword)}
                </div>
                <div className="actions">

                    <a href={url} target="_blank" rel="noreferrer noopener">
                        <button className="pillbox-button lighten-on-hover-button modal-button">
                            {getButtonText(keyword)}
                        </button>
                    </a>

                    <button className="pillbox-button lighten-on-hover-button modal-button"
                        onClick={close} >
                        Close modal
                    </button>

                </div>
            </div>
        </Popup>
    )
}