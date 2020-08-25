import React from 'react';
import {  NavLink } from 'react-router-dom';

/**
 * MainNav component for NavLinks with predefined topics
 */
const MainNav = () => (
    <div>
        <nav className="main-nav">
            <ul >
                <li><NavLink to="/gallery/yamahatracer" >Yamaha Tracer</NavLink></li>
                <li><NavLink to="/gallery/kawasakiversys" >Kawasaki Versys</NavLink></li>
                <li><NavLink to="/gallery/bmwgs">BMW<br></br> GS</NavLink></li>
                <li><NavLink to="/gallery/ducatimultistrada">Ducati Multistrada</NavLink></li>
            </ul>    
        </nav>
    </div>
);

export default MainNav;