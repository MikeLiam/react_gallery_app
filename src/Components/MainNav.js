import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

const MainNav = () => (
    <div>
        <nav className="main-nav">
            <ul >
            <li><NavLink exact to="/tracer" >Yamaha Tracer</NavLink></li>
            <li><NavLink exact to="/versys" >Kawasaki Versys</NavLink></li>
            <li><NavLink exact to="/nc750">Honda NC750X</NavLink></li>
            </ul>    
        </nav>

        {/* Write routes here... */}
        <Route path={`tracer`} render={ () => <Redirect to={`/tracer`}/>} />
        <Route path={`versys`} render={ () => <Redirect to={`/versys`}/>} />
        <Route path={`nc750`} render={ () => <Redirect to={`/nc750`}/>} />
    </div>
);

export default MainNav;