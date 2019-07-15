import React from "react";
import CardCreaterBasedOnType from "./CardTypeForTasks"
let taskStatusArray = ["open", "pending", "closed"];

class ContainerForTasks extends React.Component {
    state = {

    }


    render() {
        return (
            taskStatusArray.map((item, index) => (
                <div id={"container" + index + "Div"} className="col-sm-4">
                    <div id={"container" + index + "Card"} className='card'>
                        <div id={item} className='card-body'>
                            <CardCreaterBasedOnType
                                taskbuttons={this.state.array}
                                id={this.state.array.id}
                                status={this.state.array.status}
                                zone={this.state.array.zone}
                                department={this.state.array.department}
                                room={this.state.array.room}
                                problem={this.state.array.problem}
                                severity={this.state.array.severity}
                                note={this.state.array.note}
                                createdDate={this.state.array.created}
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