import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/Instructor">
                Instructor
            </Link>
            <Link to="/client">
                Client
            </Link>
            <Link to="/login">
                Login
            </Link>
        </div>
    )
}

export default Nav;
