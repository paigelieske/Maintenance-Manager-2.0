import React from "react";

function CardCreaterBasedOnType(props) {
    if (props.taskStatus === "open") {
        return (
            <React.Fragment>
                <h5>Open Tasks</h5>
                <p>These Tasks have been recieved but not started</p>
                <div id={"container" + props.taskStatus} className="panel-body box-container">
                    <div id="1" className="btn btn-danger box-item">1</div>
                    <div id="2" className="btn btn-danger box-item">2</div>
                    <div id="3" className="btn btn-danger box-item">3</div>
                </div>
            </React.Fragment>
        )
    }
    else if (props.taskStatus === "pending") {
        return (
            <React.Fragment>
                <h5>Pending Tasks</h5>
                <p>These Tasks have been recieved and have been started</p>
                <div id={"container" + props.taskStatus} className="panel-body box-container">
                    <div id="11" className="btn btn-danger box-item">11</div>
                    <div id="21" className="btn btn-danger box-item">21</div>
                    <div id="31" className="btn btn-danger box-item">31</div>
                </div>
            </React.Fragment>
        )
    }
    else if (props.taskStatus === "closed") {
        return (
            <React.Fragment>
                <h5>Completed Tasks</h5>
                <p>These tasks have been resolved</p>
                <div id={"container" + props.taskStatus} className="panel-body box-container">
                    <div id="111" className="btn btn-danger box-item">111</div>
                    <div id="211" className="btn btn-danger box-item">211</div>
                    <div id="311" className="btn btn-danger box-item">311</div>
                </div>
            </React.Fragment>
        )
    }

}

export default CardCreaterBasedOnType
