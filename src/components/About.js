import { Link } from 'react-router-dom';

import { FaArrowAltCircleLeft } from 'react-icons/fa';

const About = () => {
    return(
        <div className="about">
            <h3>This application is developed by Sanjay Bankar</h3>
            <Link to="/"><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Go Back</Link>
        </div>
    );
}

export default About;