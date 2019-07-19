import React from 'react';
import Moment from 'react-moment';

function NewTaskButton(props) {
	return (
		<div
			key={props.id}
			id={props.severity}
			className="btn btn-danger box-item"
		>
			<div>
				<Moment format="LLLL">{props.createdDate}</Moment>
			</div>
			<div>{props.problem + ' problem in ' + props.room}</div>
			<div>{props.zone + ' ' + props.department}</div>
			<div>{' Notes: ' + props.note}</div>
		</div>
	);
}

export default NewTaskButton;
