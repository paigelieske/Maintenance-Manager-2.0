import React from "react";

function Button(props) {
    if (props.button === "Note") {
        return (
			<React.Fragment>
				<div id="notesForm">
					<label>
						Please Specify Problem (i.e. The sink is
						leaking. Max=150)
					</label>
					<input
						type="text"
						id="problemNotes"
						className="form-control text-center"
						placeholder="Example input"
						autocomplete="off"
					/>
					<button
						id="submitNotes"
						type="button"
						className="btn btn-secondary text-center"
						value="Submit Notes"
						onClick={() => {
							props.clickFunction(props.button);
						}}
					>
						Submit Notes
					</button>
				</div>
			</React.Fragment>
		);
    }
    else if (props.button === "Task has been submitted") {
        return(
            <div>
            {props.button}
        </div>
        )
        
    }
    else {
        return (
            <input
                type="button"
                id={props.button}
                value={props.button}
                onClick={() => {
                    props.clickFunction(props.button)
                }}>
            </input >
        )
    }

}

export default Button