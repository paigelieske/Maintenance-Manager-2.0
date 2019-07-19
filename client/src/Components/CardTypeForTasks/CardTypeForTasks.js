import React from 'react';
import NewTaskButton from "../NewTaskButton/NewTaskButton"
import { Draggable } from 'react-drag-and-drop'

function CardCreaterBasedOnType(props) {
	if (props.taskStatus === 'open') {
		return (
			<React.Fragment>
				<h5>Open Tasks</h5>
				<p>These Tasks have been recieved but not started</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<React.Fragment>
								{props.open.map((task, index) => (
                                <Draggable type="problem" data={task}>
								<NewTaskButton
											key={task[7]}
											id={task[8]}
											zone={task[0]}
											department={task[1]}
											room={task[2]}
											problem={task[3]}
											severity={task[4]}
											notes={task[5]}
											createdDate={task[6]}
										/>
									</Draggable>
								))}
					</React.Fragment>
				</div>
			</React.Fragment>
		);
	}
	else if (props.taskStatus === 'pending') {
		return (
			<React.Fragment>
				<h5>Pending Tasks</h5>
				<p>These Tasks have been recieved and have been started</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<React.Fragment>
								{props.pending.map((task, index) => (
                                <Draggable type="problem" data={task}>
										<NewTaskButton
											key={task[7]}
											id={task[8]}
											zone={task[0]}
											department={task[1]}
											room={task[2]}
											problem={task[3]}
											severity={task[4]}
											notes={task[5]}
											createdDate={task[6]}
										/>
									</Draggable>
								))}
					</React.Fragment>
				</div>
			</React.Fragment>
		);
	}
	else if (props.taskStatus === 'closed') {
		return (
			<React.Fragment>
				<h5>Completed Tasks</h5>
				<p>These tasks have been resolved</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<React.Fragment>
								{props.closed.map((task, index) => (
									<Draggable type="problem" data={task}>
										<NewTaskButton
											key={task[7]}
											id={task[8]}
											zone={task[0]}
											department={task[1]}
											room={task[2]}
											problem={task[3]}
											severity={task[4]}
											notes={task[5]}
											createdDate={task[6]}
										/>
									</Draggable>
								))}
					</React.Fragment>
				</div>
			</React.Fragment>
		);
	}
}

export default CardCreaterBasedOnType;