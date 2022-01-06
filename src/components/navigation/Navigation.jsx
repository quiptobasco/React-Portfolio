import './navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <a href="/about" className="navigation-item">About Me</a>
            <a href="/portfolio" className="navigation-item">Portfolio</a>
            <a href="/contact" className="navigation-item">Contact</a>
            <a href="/resume" className="navigation-item">Resume</a>
        </div>
    )
}

export default Navigation
