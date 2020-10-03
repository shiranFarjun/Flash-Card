import React from 'react';
import {Link} from "react-router-dom";
import arrow from './img/icons8-reply-arrow-24.png'
class Header extends React.Component {
    
    render() {
        return (
            <nav className="header">
                <Link to="/"  ><img src={arrow} alt=''/></Link>
                <span style={{ marginLeft: '42%'}}>flash cards</span>
            </nav>
        );
    }
}

export default Header;

