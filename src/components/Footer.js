import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footer'>
            <p>Copyright @ 2022-23</p>
            <Link to='/about'>About</Link>
        </div>
    );
}

export default Footer;