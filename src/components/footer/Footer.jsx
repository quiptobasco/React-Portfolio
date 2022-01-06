import './footer.css';
import Github from '../../img/GitHub-Mark-64px.png';
import LinkedIn from '../../img/linkedin.svg';
import Email from '../../img/email-64px.png';
import Phone from '../../img/phone-64px.png';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/quiptobasco" target="_blank" rel="noreferrer"><img src={Github} alt="" className="footer-item" /></a>
            <a href="https://www.linkedin.com/in/tim-renken" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="" className="footer-item" /></a>
            <a href="mailto: quiptobasco@gmail.com"><img src={Email} alt="" className="footer-item" /></a>
            <img src={Phone} alt="" className="footer-item" />425-351-3249
        </div>
    )
};

export default Footer