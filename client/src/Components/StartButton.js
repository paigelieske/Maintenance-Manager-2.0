import React from "react";

function StartButtonCreater(props) {
    return (
        <button type="button" id="newTask" className="center btn btn-secondary dropdown-toggle" value={props.value} onClick={() => {props.onClick(props.value)}}>New Request</button>
    )
}

export default StartButtonCreater