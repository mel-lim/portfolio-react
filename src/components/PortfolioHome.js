import React from "react";

import { Header } from "./portfolioHome/Header";
import { Intro } from "./portfolioHome/Intro";
import { ProfilePhoto } from "./portfolioHome/ProfilePhoto";
import { VideoThumbnail } from "./portfolioHome/VideoThumbnail";
import { ImageThumbnail } from "./portfolioHome/ImageThumbnail";
import { HeroImageThumbnail } from "./portfolioHome/HeroImageThumbnail";

import { Footer } from "./portfolioHome/Footer";

import { pernWebApp, interactiveWebsite, javascriptGame, listmakerApp } from "../assets";

import profilePhotoStraight from '../resources/images/profile-photo-straight.jpeg';
import profilePhotoIdeas from "../resources/images/profile-photo-ideas.jpeg";

import portfolioThumbnail from "../resources/images/og-portfolio-thumbnail.png";

export const PortfolioHome = () => {
    return (
        <main id="portfolio-main">
            <Intro />

            <Header />

            <ProfilePhoto keyword="profile-photo"
                image={profilePhotoStraight}
                altTag="mel lim profile photo"
            />

            <VideoThumbnail video={interactiveWebsite.video}
                keyword={interactiveWebsite.keyword}
                altTag={interactiveWebsite.altTag}
                altImg={interactiveWebsite.altImg}
                labelName={interactiveWebsite.labelName}
                url={interactiveWebsite.url}
            />

            <HeroImageThumbnail keyword={pernWebApp.keyword}
                image={pernWebApp.thumbnail}
                altTag={pernWebApp.altTag}
                url={pernWebApp.url} />

            <VideoThumbnail video={javascriptGame.video}
                keyword={javascriptGame.keyword}
                altTag={javascriptGame.altTag}
                altImg={javascriptGame.altImg}
                labelName={javascriptGame.labelName}
                url={javascriptGame.url}
            />

            <ImageThumbnail keyword="portfolio"
                image={portfolioThumbnail}
                altTag="portfolio"
            />

            <VideoThumbnail video={listmakerApp.video}
                keyword={listmakerApp.keyword}
                altTag={listmakerApp.altTag}
                altImg={listmakerApp.altImg}
                labelName={listmakerApp.labelName}
                url={listmakerApp.url}
            />
            
            <ProfilePhoto keyword="secondary-profile-photo"
                image={profilePhotoIdeas}
                altTag="mel lim secondary profile photo" />

            <Footer />
        </main>
    )
}