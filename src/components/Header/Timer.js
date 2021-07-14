import React from "react";

const Timer = ({ remainingTime }) => {

    return (
        <div className="timer">
            <div className="value">{remainingTime}</div>
        </div>
    );
};

export default Timer;