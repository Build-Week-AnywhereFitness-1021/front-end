import React from 'react';
import '../index.css';
import Logo from '../Assets/Logo.png';

function Nav() {
    return (
        <div className='Nav'>
            <img src={process.env.PUBLIC_URL + Logo} href='/' className='Nav-Logo' height={75} alt='Logo'/>
            <a href='/login'>Login</a>
            <a href='/Instructor'>Instructor</a>
            <a href='/client'>Client</a>
        </div>
    );
}

export default Nav;
