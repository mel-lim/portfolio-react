import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>mellim.io</h1>
            </Link>
        </header>
    )
}