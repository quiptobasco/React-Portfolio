import './navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/React-Portfolio/about" activeClassName="active" className="navigation-item">About Me</NavLink>
            <NavLink to="/React-Portfolio/portfolio" activeClassName="active" className="navigation-item">Portfolio</NavLink>
            <NavLink to="/React-Portfolio/contact" activeClassName="active" className="navigation-item">Contact</NavLink>
            <NavLink to="/React-Portfolio/resume" activeClassName="active" className="navigation-item">Resume</NavLink>
        </div>
    )
}

export default Navigation
