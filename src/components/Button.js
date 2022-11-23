
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    return(
        <button type="button" onClick={onClick} style={{backgroundColor:color, color:'#fff'}} className="btn">{text}</button>
    );
}

Button.defaultProps = {
    color:'steelblue',
    text:'default'
}

Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func
}

export default Button;