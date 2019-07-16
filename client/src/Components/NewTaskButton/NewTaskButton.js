import React from "react";

function NewTaskButton(props) {
    return (
        <div
            key={props.id}
            id={props.status}
            className="btn btn-danger box-item"
        >
            {props.zone + " - " + props.department + " - " + props.room + " - " + props.problem + " - " + props.severity + " - " + props.note + " - Problem Reported at " + props.createdDate}
            </div>

    )
}

export default NewTaskButton