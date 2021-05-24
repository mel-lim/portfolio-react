import './App.css';

import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { ProfileImage } from "./components/ProfileImage";
import { VideoThumbnail } from "./components/VideoThumbnail";
import { ImageThumbnail } from "./components/ImageThumbnail";
import { HeroImageThumbnail } from "./components/HeroImageThumbnail";

import { Footer } from "./components/Footer";

import { pernWebApp, javascriptGame, listmakerApp, interactiveWebsite } from "./config";

import pernWebAppThumbnail from "./resources/images/kitcollab-thumbnail.png";
import profilePhotoIdeas from "./resources/images/profile-photo-ideas.jpeg";
import portfolioThumbnail from "./resources/images/og-portfolio-thumbnail.png";

import interactiveWebsiteVideo from "./resources/videos/interactive-website-demo.mp4";
import interactiveWebsiteAltImg from "./resources/images/interactive-website-thumbnail.png";

import javascriptGameVideo from "./resources/videos/javascript-game-demo-v2.mp4";
import javascriptGameAltImg from "./resources/images/javascript-game-thumbnail.png";

import listmakerVideo from "./resources/videos/listmaker-demo.mp4";
import listmakerAltImg from "./resources/images/interactive-listmaker-thumbnail.png";

function App() {
  return (
    <div>
      <main id="portfolio-main">
        <Intro />
        <Header />
        <ProfileImage />
        <VideoThumbnail video={interactiveWebsiteVideo}
          keyword={interactiveWebsite.keyword}
          altTag={interactiveWebsite.altTag}
          altImg={interactiveWebsiteAltImg}
          labelName={interactiveWebsite.labelName}
        />

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
        <ImageThumbnail keyword="secondary-profile-photo"
          image={profilePhotoIdeas}
          altTag="mel lim" />

        <VideoThumbnail video={javascriptGameVideo}
          keyword={javascriptGame.keyword}
          altTag={javascriptGame.altTag}
          altImg={javascriptGameAltImg}
          labelName={javascriptGame.labelName}
        />

        <HeroImageThumbnail keyword={pernWebApp.keyword}
          image={pernWebAppThumbnail}
          altTag={pernWebApp.altTag}
          url={pernWebApp.url} />

<Footer />
      </main>

      
    </div>
  );
}
export default App;
