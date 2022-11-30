import React from 'react';
import './header.css';

import Button from './Button';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Header = ({title, color, bgColor, onToggleAdd,showAdd}) => {    

    const location = useLocation();

    return(
        <header className='header'>            
            <h2 style={{color:color,backgroundColor:bgColor}}>{title}
                {location.pathname === '/' && <Button onClick={onToggleAdd} color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} />}
            </h2>
        </header>        
    );
};

Header.defaultProps = {
    title:'Default Header',
    color:'red',
    bgColor:'#333'
};

Header.propTypes = {
    title:PropTypes.string
}

export default Header;