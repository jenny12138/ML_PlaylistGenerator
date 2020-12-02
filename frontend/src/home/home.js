import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../topbar/topbar';

function Home(){
    return (
        <div>
            <TopBar title="Home"/>
            <nav>
                <p>
                    <a href="/emotion" class="myButton">Get Playlist</a>
                </p>
            </nav>
        </div>
    )
}
export default Home;