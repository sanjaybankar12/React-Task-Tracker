import React from 'react';
import './header.css';

import Button from './Button';

import PropTypes from 'prop-types';

const Header = (props) => {

    const onClick = (e) => {

    }

    return(
        <header className='header'>            
            <h2 style={{color:props.color,backgroundColor:props.bgColor}}>{props.title}<Button onClick={onClick} color='green' text='Add' /></h2>
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