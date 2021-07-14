import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const Wrapper = (props) => {
        const {isDarkMode, toggleTheme} = useContext(ThemeContext);
        const styles ={
            backgroundColor: isDarkMode ? "#191d28" : "#fff",
            height: "100%",
            width: "100%"
        }
    return ( 
        <div style={styles}>
            {props.children}
        </div>
     );
}
 
export default Wrapper;