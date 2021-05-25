// The assets

import pernWebAppThumbnail from "./resources/images/kitcollab-thumbnail-no-buttons.png";

import interactiveWebsiteVideo from "./resources/videos/interactive-website-demo.mp4";
import interactiveWebsiteAltImg from "./resources/images/interactive-website-thumbnail.png";

import javascriptGameVideo from "./resources/videos/javascript-game-demo-v2.mp4";
import javascriptGameAltImg from "./resources/images/javascript-game-thumbnail.png";

import listmakerVideo from "./resources/videos/listmaker-demo.mp4";
import listmakerAltImg from "./resources/images/interactive-listmaker-thumbnail.png";

import portfolioThumbnail from "./resources/images/og-portfolio-thumbnail.png";

export const pernWebApp = {
    keyword: "pern-web-app",
    thumbnail: pernWebAppThumbnail,
    altTag: "pern web app",
    labelName: "Full-stack, persistent web application (PERN)",
    url: "https://kitcollab.netlify.app"
}

export const interactiveWebsite = {
  keyword: "interactive-website",
  altTag: "interactive website",
  video: interactiveWebsiteVideo,
  altImg: interactiveWebsiteAltImg,
  labelName: 'Interactive website',
  url: 'https://mel-lim.github.io/adventure-website/',
}

export const javascriptGame = {
    keyword: "javascript-game",
    altTag: "javascript game",
    video: javascriptGameVideo,
    altImg: javascriptGameAltImg,
    labelName: 'Polar bear javascript game',
    url: 'https://mel-lim.github.io/polar-bear-game/',
  }
  
  export const listmakerApp = {
    keyword: "listmaker-app",
    altTag: "listmaker web app",
    video: listmakerVideo,
    altImg: listmakerAltImg,
    labelName: 'Vanilla javascript listmaker',
    url: 'https://mel-lim.github.io/adventure-website/plan-adventure.html',
  }

  export const portfolio = {
    keyword: "portfolio",
    image: portfolioThumbnail,
    altTag: "portfolio",
    labelName: "Portfolio",
    url: null
  }
  