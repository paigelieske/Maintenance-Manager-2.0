import React from 'react';
import NewTaskButton from "../NewTaskButton/NewTaskButton"

function CardCreaterBasedOnType(props) {
	if (props.taskStatus === 'open') {
		return (
			<React.Fragment>
				<h5>Open</h5>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					{/* {props.taskbuttons.map((task, index) => {
                        if (props.status === props.taskStatus)
                            return (
                                <NewTaskButton
                                    task={task}
                                    id={props.id}
                                    status={props.status}
                                    zone={props.zone}
                                    department={props.department}
                                    room={props.room}
                                    problem={props.problem}
                                    severity={props.severity}
                                    note={props.note}
                                    createdDate={props.created}
                                />
                            )
                    })} */}
				</div>
			</React.Fragment>
		);
	} 
	else if (props.taskStatus === 'pending') {
		return (
			<React.Fragment>
				<h5>Pending</h5>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
				{/* {props.taskbuttons.map((task, index) => {
					if (props.status === props.taskStatus)
						return (
							<NewTaskButton
								task={task}
								id={props.id}
								status={props.status}
								zone={props.zone}
								department={props.department}
								room={props.room}
								problem={props.problem}
								severity={props.severity}
								note={props.note}
								createdDate={props.created}
							/>
						)
				})} */}
				</div>
			</React.Fragment>
		);
	} 
	else if (props.taskStatus === 'closed') {
		return (
			<React.Fragment>
				<h5>Completed</h5>
				
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
				{/* {props.taskbuttons.map((task, index) => {
					if (props.status === props.taskStatus)
						return (
							<NewTaskButton
								task={task}
								id={props.id}
								status={props.status}
								zone={props.zone}
								department={props.department}
								room={props.room}
								problem={props.problem}
								severity={props.severity}
								note={props.note}
								createdDate={props.created}
							/>
						)
				})} */}
				</div>
			</React.Fragment>
		);
	}
}

export default CardCreaterBasedOnType;
