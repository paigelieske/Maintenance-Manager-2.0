import React from 'react';
import NewTaskButton from "../NewTaskButton/NewTaskButton"
import { Draggable, Droppable } from 'react-drag-and-drop'

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
						<Droppable
							types={['problem']} // <= allowed drop types
							onDrop={props.onDrop.bind(this)}>
							<ul>
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
							</ul>
						</Droppable>
					</React.Fragment>
					{/* {props.taskbuttons.map((task, index) => {
                        if (props.status === 'open')
                            return (
                                <NewTaskButton
                                    task={task}
                                    id={props.taskbuttons.id}
                                    status={props.taskbuttons.status}
                                    zone={props.taskbuttons.zone}
                                    department={props.taskbuttons.department}
                                    room={props.taskbuttons.room}
                                    problem={props.taskbuttons.problem}
                                    severity={props.taskbuttons.severity}
                                    note={props.taskbuttons.note}
                                    createdDate={props.taskbuttons.created}
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
				<h5>Pending Tasks</h5>
				<p>These Tasks have been recieved and have been started</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<React.Fragment>
						<Droppable
							types={['problem']} // <= allowed drop types
							onDrop={props.onDrop.bind(this)}>
							<ul>
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
							</ul>
						</Droppable>
					</React.Fragment>
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
				<h5>Completed Tasks</h5>
				<p>These tasks have been resolved</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>

					<React.Fragment>
						<Droppable
							types={['problem']} // <= allowed drop types
							onDrop={props.onDrop.bind(this)}>
							<ul>
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
							</ul>
						</Droppable>
					</React.Fragment>
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