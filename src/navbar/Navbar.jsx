import '../navbar/navbar.css';
import '../App.css'
import PropTypes from "prop-types";


function Navbar(props) {
    return (
        <div className="Sidebar">
        <h1 className='logo'>retro board -<span>{props.title}</span></h1>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar