import React from 'react';
import CardCreaterBasedOnType from '../CardTypeForTasks/CardTypeForTasks';
import { Droppable } from 'react-drag-and-drop';
import API from '../../utils/API';
import axios from 'axios';

class ContainerForTasks extends React.Component {
	state = {
		open: [],
		pending: [],
		closed: [],
		taskStatusArray: ['open', 'pending', 'closed'],
		// tasks: []
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then(res => {
				console.log(this.state.pending);
				for (let i = 0; i < res.data.length; i++) {
					if (res.data[i].status === 'open') {
						let task = res.data[i];
						this.setState(state => {
							this.state.open.push([
								task.zone,
								task.department,
								task.room,
								task.problem,
								task.severity,
								task.note,
								task.created,
								task._id,
								task.status
							]);
						});
					} else if (res.data[i].status === 'pending') {
						let task = res.data[i];
						this.setState(state => {
							this.state.pending.push([
								task.zone,
								task.department,
								task.room,
								task.problem,
								task.severity,
								task.note,
								task.created,
								task._id,
								task.status
							]);
						});
					} else if (res.data[i].status === 'closed') {
						let task = res.data[i];
						this.setState(state => {
							this.state.closed.push([
								task.zone,
								task.department,
								task.room,
								task.problem,
								task.severity,
								task.note,
								task.created,
								task._id,
								task.status
							]);
						});
					}
					this.setState({ tasks: res.data });
				}
			})
			.catch(err => console.log(err));
	};

	onDrop(data) {
		let dataArr = data.problem.split(',');
		let id = dataArr[7];
		dataArr.map(item => {
			if (item === 'open') {
				axios
					.put('/api/tasks/' + id, {
						status: 'pending'
					})
					.then(response => {
						console.log(response);
						this.setState({ pending: this.state.pending });
						this.loadTasks();
						window.location.reload();
					});
			}
			if (item === 'pending') {
				axios
					.put('/api/tasks/' + id, {
						status: 'closed'
					})
					.then(response => {
						console.log(response);
						this.setState({ closed: this.state.closed });
						this.loadTasks();
						window.location.reload();
					});
			}
		});
	}

	render() {
		return this.state.taskStatusArray.map((item, index) => (
			<div id={'container' + index + 'Div'} className="col-xl-4">
				<div id={'container' + index + 'Card'} className="card">
					<Droppable
						types={['problem']} // <= allowed drop types
						onDrop={this.onDrop.bind(this)}
					>
						<div id={item} className="card-body">
							<CardCreaterBasedOnType
								taskbuttons={this.state.tasks}
								onDrop={this.onDrop}
								open={this.state.open}
								pending={this.state.pending}
								closed={this.state.closed}
								indexNum={index}
								taskStatus={item}
							/>
						</div>
					</Droppable>
				</div>
			</div>
		));
	}
}

export default ContainerForTasks;
