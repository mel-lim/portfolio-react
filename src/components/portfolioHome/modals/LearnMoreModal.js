import './Modal.css';

import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

import { PernHeader, PernContent } from "./content/Pern";
import { InteractiveWebsiteHeader, InteractiveWebsiteContent } from "./content/InteractiveWebsite";
import { JavascriptGameHeader, JavascriptGameContent } from "./content/JavascriptGame";
import { JSListmakerHeader, JSListmakerContent } from "./content/JSListmaker";
import { PortfolioHeader, PortfolioContent } from "./content/Portfolio";

export const LearnMoreModal = ({ keyword, openModal, setOpenModal, url }) => {
    const [header, setHeader] = useState(null);
    const [content, setContent] = useState(null);
    const [buttonText, setButtonText] = useState(null);

    useEffect(() => {
        switch (keyword) {
            case 'pern-web-app':
                setHeader(<PernHeader />);
                setContent(<PernContent url={url} />);
                setButtonText("Go to Kit Collab");
                break;

            case 'interactive-website':
                setHeader(<InteractiveWebsiteHeader />);
                setContent(<InteractiveWebsiteContent url={url} />);
                setButtonText("Visit site");
                break;

            case 'javascript-game':
                setHeader(<JavascriptGameHeader />);
                setContent(<JavascriptGameContent url={url} />);
                setButtonText("Let's play!");
                break;

            case 'listmaker-app':
                setHeader(<JSListmakerHeader />);
                setContent(<JSListmakerContent url={url} />);
                setButtonText("Check it out")
                break;

            case 'portfolio':
                setHeader(<PortfolioHeader />);
                setContent(<PortfolioContent />);
                setButtonText("Check it out")
                break;

            default:
                console.log("keyword not recognised");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const close = () => {
        console.log('modal closed');
        setOpenModal(false);
    }

    return (
        <Popup open={openModal} closeOnDocumentClick onClose={close}>
            <div className="modal">
                <button className="close" onClick={close}>&times;</button>
                <div className="header">{header}</div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">

                    {
                        url ?
                            <a href={url} target="_blank" rel="noreferrer noopener">
                                <button className="pillbox-button lighten-on-hover-button modal-button">
                                    {buttonText}
                                </button>
                            </a>
                            : null
                    }

                    <button className="pillbox-button lighten-on-hover-button modal-button"
                        onClick={close} >
                        Close modal
                    </button>

                </div>
            </div>
        </Popup>
    )
}