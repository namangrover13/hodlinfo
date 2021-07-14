import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import "../../styles/Header.css"
import Timer from './Timer';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SwitchHandler from './SwitchHandler';
import { ThemeContext } from '../../contexts/ThemeContext';


const Header = () => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const btnStyles={backgroundColor: isDarkMode ? "#2e3241": "#f8f9fa", color:isDarkMode ? "#fff": "#0c0f48", boxShadow: isDarkMode ? "": "0 0 2px #ddd"}
    return (
        <div className="header">
            <div className="header-logo">
                <img className="header-logo-img" src={logo} alt="logo" />
                <p className="header-logo-tagline">Powered By <span style={{ color: "#3dc6c1" }}>Finstreet</span></p>
            </div>
            <div className="header-buttons">
                <select style={btnStyles} className="header-buttons-btn" value="INR">
                    <option>INR</option>
                </select>
                <select style={btnStyles} className="header-buttons-btn" value="BTC">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>USDT</option>
                    <option>XRP</option>
                    <option>TRX</option>
                    <option>DASH</option>
                    <option>ZEC</option>
                    <option>ZEM</option>
                    <option>IOST</option>
                    <option>WIN</option>
                    <option>BTT</option>
                    <option>WRX</option>
                </select>
                <button style={btnStyles} className="header-buttons-btn">Buy BTC</button>
            </div>
            <div className="header-group">
                <div className="header-timer">
                    <CountdownCircleTimer
                        rotation={'counterclockwise'}
                        strokeWidth={3}
                        size={40}
                        isPlaying
                        duration={60}
                        colors={[["#3dc6c1"]]}
                        onComplete={() => [true, 0]}
                    >
                        {Timer}
                    </CountdownCircleTimer>
                </div>
                <a className="header-telegram"><i class="fab fa-telegram-plane"></i> Connect Telegram</a>
                <SwitchHandler isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> 
            </div>
        </div>
    );
}

export default Header;