import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className = "header">
            <div className = "navBar">
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/class">
                        Classes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;
