import React from "react";
// import NewTaskDivAndButtons from "../NewTaskDivAndButtons/NewTaskDivAndButtons"

function NewTaskButton(props) {
    return (
        <div
            key={props.id}
            id={props.id}
            className="btn btn-danger box-item"
        >
            {props.zone + " - " + props.department + " - " + props.room + " - " + props.problem + " - " + props.severity + " - " + props.notes + " - Problem Reported at " + props.createdDate}
            </div>

    )
}

export default NewTaskButton