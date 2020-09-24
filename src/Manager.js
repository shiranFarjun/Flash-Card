import React from 'react';
import { Link } from "react-router-dom";

class Manager extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Link to="/" style={{ borderRadius: '10px' }}></Link>
                <Link to="/" style={{ borderRadius: '10px' }}></Link>
            </div>
        );
    };
};

export default Manager;