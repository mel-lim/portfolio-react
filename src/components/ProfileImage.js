import React from "react";
import profilePhotoStraight from '../resources/images/profile-photo-straight.jpeg';

export const ProfileImage = () => {
    return (
        <div id="profile-photo-container">
            <img src={profilePhotoStraight} alt="mel lim" className="embedded-media" />
        </div>
    )
}