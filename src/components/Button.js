
import PropTypes from 'prop-types';

const Button = ({type, color, text, onClick}) => {
    return(
        <button type={type} onClick={onClick} style={{backgroundColor:color, color:'#fff'}} className="btn">{text}</button>
    );
}

Button.defaultProps = {
    type:'button',
    color:'steelblue',
    text:'default'
}

Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func
}

export default Button;