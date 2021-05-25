import React from "react";

import { Header } from "./portfolioHome/Header";
import { Intro } from "./portfolioHome/Intro";
import { ProfilePhoto } from "./portfolioHome/ProfilePhoto";
import { VideoThumbnail } from "./portfolioHome/VideoThumbnail";
import { ImageThumbnail } from "./portfolioHome/ImageThumbnail";
import { HeroImageThumbnail } from "./portfolioHome/HeroImageThumbnail";

import { Footer } from "./portfolioHome/Footer";

import { pernWebApp, javascriptGame, listmakerApp, interactiveWebsite } from "../config";

import profilePhotoStraight from '../resources/images/profile-photo-straight.jpeg';
import profilePhotoIdeas from "../resources/images/profile-photo-ideas.jpeg";

import pernWebAppThumbnail from "../resources/images/kitcollab-thumbnail-no-buttons.png";
import portfolioThumbnail from "../resources/images/og-portfolio-thumbnail.png";

import interactiveWebsiteVideo from "../resources/videos/interactive-website-demo.mp4";
import interactiveWebsiteAltImg from "../resources/images/interactive-website-thumbnail.png";

import javascriptGameVideo from "../resources/videos/javascript-game-demo-v2.mp4";
import javascriptGameAltImg from "../resources/images/javascript-game-thumbnail.png";

import listmakerVideo from "../resources/videos/listmaker-demo.mp4";
import listmakerAltImg from "../resources/images/interactive-listmaker-thumbnail.png";

export const PortfolioHome = () => {
    return (
        <div>
            <main id="portfolio-main">
                <Intro />
                <Header />
                <ProfilePhoto keyword="profile-photo"
                    image={profilePhotoStraight}
                    altTag="mel lim profile photo"
                />
                <VideoThumbnail video={interactiveWebsiteVideo}
                    keyword={interactiveWebsite.keyword}
                    altTag={interactiveWebsite.altTag}
                    altImg={interactiveWebsiteAltImg}
                    labelName={interactiveWebsite.labelName}
                />

                <HeroImageThumbnail keyword={pernWebApp.keyword}
                    image={pernWebAppThumbnail}
                    altTag={pernWebApp.altTag}
                    url={pernWebApp.url} />

                <VideoThumbnail video={javascriptGameVideo}
                    keyword={javascriptGame.keyword}
                    altTag={javascriptGame.altTag}
                    altImg={javascriptGameAltImg}
                    labelName={javascriptGame.labelName}
                />
                <ImageThumbnail keyword="portfolio"
                    image={portfolioThumbnail}
                    altTag="portfolio"
                />
                <VideoThumbnail video={listmakerVideo}
                    keyword={listmakerApp.keyword}
                    altTag={listmakerApp.altTag}
                    altImg={listmakerAltImg}
                    labelName={listmakerApp.labelName}
                />
                <ProfilePhoto keyword="secondary-profile-photo"
                    image={profilePhotoIdeas}
                    altTag="mel lim secondary profile photo" />

                <VideoThumbnail video={javascriptGameVideo}
                    keyword={javascriptGame.keyword}
                    altTag={javascriptGame.altTag}
                    altImg={javascriptGameAltImg}
                    labelName={javascriptGame.labelName}
                />

                <Footer />
            </main>
        </div>
    )
}