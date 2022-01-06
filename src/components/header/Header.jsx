import './header.css';
import Navigation from './../navigation/Navigation';
import BackgroundImage from '../../img/header.jpg'

const Header = () => {
    return (
        <div className='header' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className='header-left'>
                <div className='header-left-wrapper'>
                    <h1 className='header-name'>Tim Renken</h1>
                </div>
            </div>
            <div className='header-right'> {<Navigation />} </div>
        </div>
    )
}

export default Header
