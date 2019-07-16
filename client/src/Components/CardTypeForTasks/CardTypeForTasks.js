import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'

class CardCreaterBasedOnType extends Component {

	state = {
		containerOne: ["Task 1", "Task 2"],
		containerTwo: ["Task 3", "Task 4"],
		containerThree: ["Task 5", "Task 6"]
	}

	render() {
		return (
			<div>
				<Droppable
					types={['problem']} // <= allowed drop types
					onDrop={this.onDrop.bind(this)}>
					<ul>
						{this.state.containerOne.map((task, index) => (
							<Draggable type="problem" data={task}>
								< li > {task} </li>
							</Draggable>
						))}
					</ul>
				</Droppable>
			</div>
		)
	}

	onDrop(data) {
		if (this.props.taskStatus === "open") {
			this.state.containerOne.push(Object.values(data)[0])
			this.setState({ containerOne: this.state.containerOne, containerTwo: this.setState.containerTwo, containerThree: this.setState.containerThree })
		}
		else if (this.props.taskStatus === "pending"){
			this.state.containerOne.push(Object.values(data)[0])
			this.setState({ containerOne: this.state.containerOne, containerTwo: this.setState.containerTwo, containerThree: this.setState.containerThree })
		}
		else if (this.props.taskStatus === "closed"){
			this.state.containerOne.push(Object.values(data)[0])
			this.setState({ containerOne: this.state.containerOne, containerTwo: this.setState.containerTwo, containerThree: this.setState.containerThree })
		}
	}
}
export default CardCreaterBasedOnType;