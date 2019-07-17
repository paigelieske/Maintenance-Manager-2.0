import React from "react";
import CardCreaterBasedOnType from "../CardTypeForTasks/CardTypeForTasks"
import API from "../../utils/API";

class ContainerForTasks extends React.Component {
    state = {
        tasks: [],
        taskStatusArray:["open", "pending", "closed"]
    }

    componentDidMount() {
        this.loadTasks();
    };

    loadTasks = () => {
        API.getTasks()
            .then(res => {
                this.setState({ tasks: res.data });
                console.log(this.state.tasks)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            this.state.taskStatusArray.map((item, index) => (
                <div key={"container" + index + "Div"} className="col-sm-4">
                    <div key={"container" + index + "Card"} className='card'>
                        <div id={item} className='card-body'>
                            <CardCreaterBasedOnType
                                // taskbuttons={this.state.array}
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