import React from "react";
import CardCreaterBasedOnType from "../CardTypeForTasks/CardTypeForTasks"

import API from "../../utils/API";

class ContainerForTasks extends React.Component {
    state = {
        open: [],
        pending: [],
        closed: [],
        taskStatusArray: ["open", "pending", "closed"],
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = () => {
        API.getTasks()
            .then(res => {
                console.log(res.data)

                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].status === 'open') {
                        let task = res.data[i]
                        this.setState((state) => {
                            console.log(task)
                            this.state.open.push(task.zone + " > " + task.department + " > " + task.room + " > " + task.problem + " > " + task.severity + " > " + task.note + " > " + task.created)
                        })
                    }
                    else if (res.data[i].status === 'pending') {
                        let task = res.data[i]
                        this.setState((state) => {
                            this.state.pending.push(task.zone + " > " + task.department + " > " + task.room + " > " + task.problem + " > " + task.severity + " > " + task.note + " > " + task.created)
                        })
                    }
                    else if (res.data[i].status === 'closed') {
                        let task = res.data[i]
                        this.setState((state) => {
                            this.state.closed.push(task.zone + " > " + task.department + " > " + task.room + " > " + task.problem + " > " + task.severity + " > " + task.note + " > " + task.created)
                        })
                    }
                    this.setState({ tasks: res.data })
                }
            })
            .catch(err => console.log(err));

    };

    onDrop(data) {
        API.getTasks()
            .then(res => {
                console.log(res.data)
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].status === 'open') {
                        let task = res.data[i]
                        if (task.status === "open") {
                            console.log(this.state.open)
                            console.log(Object.values(data)[0])
                            this.state.open.push(Object.values(data)[0])

                        }
                        else if (task.status === "pending") {
                            this.state.pending.push(Object.values(data)[0])
                        }
                        else if (task.status === "closed") {
                            this.state.closed.push(Object.values(data)[0])
                        }
                    }
                }
                this.setState({ open: this.state.open, pending: this.setState.pending, closed: this.setState.closed })
            })
    }


    render() {
        return (
            this.state.taskStatusArray.map((item, index) => (
                <div id={"container" + index + "Div"} className="col-sm-4">
                    <div id={"container" + index + "Card"} className='card'>
                        <div id={item} className='card-body'>
                            <CardCreaterBasedOnType
                                taskbuttons={this.state.tasks}
                                onDrop={this.onDrop}
                                open={this.state.open}
                                pending={this.state.pending}
                                closed={this.state.closed}
                                // id={this.state.array.id}
                                // status={this.state.array.status}
                                // zone={this.state.array.zone}
                                // department={this.state.array.department}
                                // room={this.state.array.room}
                                // problem={this.state.array.problem}
                                // severity={this.state.array.severity}
                                // note={this.state.array.note}
                                // createdDate={this.state.array.created}
                                indexNum={index}
                                taskStatus={item}
                            />

                        </div>
                    </div>
                </div>
            ))
        )
    }
}

export default ContainerForTasks;