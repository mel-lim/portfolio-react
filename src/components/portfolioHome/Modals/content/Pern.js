import React from "react";

export const PernHeader = () => 
    <h4>
        Kit Collab: a PERN stack web app
    </h4>


export const PernContent = () =>
    <div>
        <p>Kit Collab is a full-stack, persistent-storage web app built using PostgreSQL, Express, React and Node.js (PERN).</p>

        <p>Currently, Kit Collab delivers a listmaker tool aimed at backcountry-users to help them plan outings into the wilderness.</p>

        <p>You can find Kit Collab deployed live <a href="https://kitcollab.netlify.app" target="_blank" rel="noreferrer noopener">here</a>. The front-end is hosted on Netlify and the back-end on Heroku.</p>

        <p>Please feel free to use the 'Try As Guest' feature, or sign up with an account for the ability to save your trips and lists.</p>

        <p>Kit Collab features:
            <ul>
                <li>a single page application (SPA) React front-end</li>
                <li>persistent data storage on the client using localStorage</li>
                <li>an authentication system utilising JSON Web Tokens sent in http-only cookies</li>
                <li>full CRUD operations manifested as the ability to:
                    <ul>
                        <li>fetch your saved data</li>
                        <li>create trips and lists</li>
                        <li>edit trip names, list titles and list items</li>
                        <li>delete trips, lists and list items</li>
                    </ul>
                </li>
                <li>an undo button (to undo-delete list items)</li>
                <li>dynamic save functionality</li>
                <li>user-oriented focus, with load spinners and status messaging</li>
            </ul>
        </p>

        <p>If you are interested in the code base, you will find the Github repo for the front-end <a href="https://github.com/mel-lim/persistent-listmaker-front-end" target="_blank" rel="noreferrer noopener">here</a>, and for the back-end <a href="https://github.com/mel-lim/listmaker-backend" target="_blank" rel="noreferrer noopener">here</a>.</p>
    </div>