import React from 'react';
import '../index.css';
import Logo from '../Assets/Logo.png';

function Nav() {
    return (
        <div className='Nav'>
            <img src={Logo} className='Nav-Logo' height={75} alt='Logo'/>
            <a href='/Instructor'>Instructor</a>
            <a href='/client'>Client</a>
            <a href='/login'>Login</a>
        </div>
    );
}

export default Nav;
