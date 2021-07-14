import React, { useState } from "react";
import Switch from "react-switch";

function SwitchHandler(props) {
    const isDarkMode=props.isDarkMode;
    const toggleTheme=props.toggleTheme;
    const [checked, handleChecked] = useState(false);
    const handleChange = e =>{
        handleChecked(!checked);
        toggleTheme();
    };
    return (
        <Switch onChange={handleChange} checked={checked} onHandleColor={"#3dc6c1"} offHandleColor={"#3dc6c1"} onColor={"#2e3241"} offColor={"#ddd"} checkedIcon={false} uncheckedIcon={false} height={32} width={60} />
    );
  }
export default SwitchHandler;