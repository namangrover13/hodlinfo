import React from 'react';
const Percentage = (props) => {
    return ( 
        <div className="percentage">
            <h1 className="percentage-head">{`${props.value}%`}</h1>
            <p style={props.style} className="percentage-para">{props.time}</p>
        </div>
     );
}
 
export default Percentage;