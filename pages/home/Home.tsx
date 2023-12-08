import React from 'react';
import { Items } from '../../components/items/Items';
import './Home.scss';

export const Home = () => {
    return(
        <div className = "home">
            <div className="home-section">
                <Items />
            </div>
        </div>
    )
}