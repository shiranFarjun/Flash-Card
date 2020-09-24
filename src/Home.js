import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="home-btn-link">
                <Link to="/game" className="btn-game"> Start game</Link>
                <Link to="/Manager" className="btn-manager" >Manger</Link>
            </div>
        );
    };
};

export default Home;