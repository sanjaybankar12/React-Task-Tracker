import React from 'react';
import './header.css';

import Button from './Button';

import PropTypes from 'prop-types';

const Header = ({title, color, bgColor, onToggleAdd,showAdd}) => {    

    return(
        <header className='header'>            
            <h2 style={{color:color,backgroundColor:bgColor}}>{title}<Button onClick={onToggleAdd} color='green' text={showAdd ? 'Close' : 'Add'} /></h2>
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