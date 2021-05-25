import React from "react";

import responsiveWebpageThumbnail from "../resources/images/thumbnail-responsive-webpage.png";

export const LargeThumbnailImage = () => {
    return (
        <div id="responsive-website-container-large"
            className="container-large">
            <img src={responsiveWebpageThumbnail}
                alt="responsive website demo"
                id="responsive-website-image-large"
                className="pre-grow" />

            <div className="circle-shape large-view-circle">

                <div className="project-label">
                    <p>Multi-page, responsive website</p>
                </div>

                <a href="https://mel-lim.github.io/adventure-website/" target="_blank" rel="noopener noreferrer" className="button-link"><button className="go-to-external">Try it out</button></a>

            </div>
        </div>
    )
}