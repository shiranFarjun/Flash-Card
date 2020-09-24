import React from 'react';
import {NavLink} from "react-router-dom";
import arrow from './img/icons8-reply-arrow-24.png'
class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <NavLink to="/" ><img src={arrow} /></NavLink>
                <span style={{ marginLeft: '42%'}}>flash cards</span>
            </nav>
        );
    }
}

export default Header;

