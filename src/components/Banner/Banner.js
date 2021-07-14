import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/Banner.css'
const Banner = (props) => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    return ( 
        <div style={{backgroundColor: isDarkMode ? "#191d28" : "#f0f1f9",}} className="banner">
            <img className="banner-img" src={props.imgUrl} alt={props.name} />
        </div>
     );
}
 
export default Banner;