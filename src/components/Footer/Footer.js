import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/Footer.css'
const Footer = () => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const styles={color:isDarkMode ? "#fff": "#0c0f48"}
    return ( 
        <div className="footer">
            <div className="footer-content">
                <p style={styles} className="footer-tag">Copyright © 2019</p>
                <p style={styles} className="footer-tag">HodlInfo.com</p>
                <p style={styles} className="footer-tag">Developed By <span style={{color: "#3dc6c1", cursor:"pointer"}}>QuadBTech</span></p>
                <a style={styles} className="footer-link" href="#">Support</a>
            </div>
            <div className="footer-bar">
                
            </div>
        </div>
     );
}
 
export default Footer;