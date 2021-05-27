import React from "react";
import { Link } from "react-router-dom";

export const MailButton = () => {
    return (
        <Link to="/contact" >
            <button className="social-media-icon contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>letter</title><g fill="#212121" class="nc-icon-wrapper"><path d="M33.933,37.5a4.006,4.006,0,0,1-3.867,0L2,22.017V51a6.006,6.006,0,0,0,6,6H56a6.006,6.006,0,0,0,6-6V22.017Z" fill="#212121"></path><path data-color="color-2" d="M56,7H8a6.006,6.006,0,0,0-6,6v5a1,1,0,0,0,.517.876l29,16a1,1,0,0,0,.966,0l29-16A1,1,0,0,0,62,18V13A6.006,6.006,0,0,0,56,7Z"></path></g></svg>
            </button>
        </Link >
    )
}