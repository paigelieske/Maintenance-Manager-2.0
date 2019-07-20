import React from 'react';

function Button(props) {
	if (props.button === 'Note') {
		return (
			<React.Fragment>
				<div id="notesForm">
					<input
						type="text"
						id="problemNotes"
						className="form-control text-center"
						placeholder="Briefly describe the problem (i.e. The sink is leaking)"
						onChange={props.onChange}
						maxLength="30"
					/>
					<button
						id="submitNotes"
						type="button"
						className="btn btn-secondary text-center"
						value="Submit Notes"
						onClick={event => {
							props.clickFunction(props.button);
							props.handleSubmit(event);
						}}
					>
						Submit Notes
					</button>
				</div>
			</React.Fragment>
		);
	} 
	else if (props.button === 'Task has been submitted') {
		return ( 
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
					props.clickFunction(props.button);
				}}
			/>
		);
	}
}

export default Button;
