import React from 'react';
import './header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <h2>{props.title}</h2>
        </div>        
    );
};

Header.defaultProps = {
    title:'Default Header Value'
}

export default Header;