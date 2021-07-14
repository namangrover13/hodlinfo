import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/Stats.css'
import Percentage from './Percentage';
const Stats = (props) => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const tagStyles={color:isDarkMode ? "#fff": "#0c0f48"}
    const priceStyles={color:isDarkMode ? "#fff": "#0c0f48"}
    return ( 
        
        <div className="stats">
            <Percentage style={tagStyles} value={0.05} time={"5 Mins"} />
            <Percentage style={tagStyles} value={0.28} time={"1 Hour"} />
            <div className="stats-middle">
                <h2 style={tagStyles} className="stats-middle-head">Best Price to Trade</h2>
                <h1 style={tagStyles} className="stats-middle-price">{`₹ ${props.price}`}</h1>
                <p style={tagStyles} className="stats-middle-tag">Average BTC/INR net price including commission</p>
            </div>
            <Percentage style={tagStyles} value={6.72} time={"1 Day"} />
            <Percentage style={tagStyles} value={7.53} time={"7 days"} />
        </div>
     );
}
 
export default Stats;