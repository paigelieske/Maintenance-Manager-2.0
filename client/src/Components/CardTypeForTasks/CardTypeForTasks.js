import React from "react";
import "../EverythingContainer/EverythingContainer.css";

function CardCreaterBasedOnType(props) {
    if (props.taskStatus === "open") {
        return (
			<React.Fragment>
				<h5 class="taskType">Open Tasks</h5>
				<p class="taskDescription">
					These Tasks have been recieved but not started.
				</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<div
						id="1"
						key={11}
						className="btn btn-danger box-item"
					>
						1
					</div>
					<div
						id="2"
						key={12}
						className="btn btn-danger box-item"
					>
						2
					</div>
					<div
						id="3"
						key={13}
						className="btn btn-danger box-item"
					>
						3
					</div>
				</div>
			</React.Fragment>
		);
    }
    else if (props.taskStatus === "pending") {
        return (
			<React.Fragment>
				<h5 class="taskType">Pending Tasks</h5>
				<p class="taskDescription">
					These Tasks have been recieved and have been started.
				</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<div
						id="11"
						key={14}
						className="btn btn-danger box-item"
					>
						11
					</div>
					<div
						id="21"
						key={15}
						className="btn btn-danger box-item"
					>
						21
					</div>
					<div
						id="31"
						key={16}
						className="btn btn-danger box-item"
					>
						31
					</div>
				</div>
			</React.Fragment>
		);
    }
    else if (props.taskStatus === "closed") {
        return (
			<React.Fragment>
				<h5 class="taskType">Completed Tasks</h5>
				<p class="taskDescription">
					These tasks have been resolved by the Administrator.
				</p>
				<div
					id={'container' + props.taskStatus}
					className="panel-body box-container"
				>
					<div
						id="111"
						key={17}
						className="btn btn-danger box-item"
					>
						111
					</div>
					<div
						id="211"
						key={18}
						className="btn btn-danger box-item"
					>
						211
					</div>
					<div
						id="311"
						key={19}
						className="btn btn-danger box-item"
					>
						311
					</div>
				</div>
			</React.Fragment>
		);
    }

}

export default CardCreaterBasedOnType
