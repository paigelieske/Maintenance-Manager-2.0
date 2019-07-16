import React from "react";
import CardCreaterBasedOnType from "../CardTypeForTasks/CardTypeForTasks"
let taskStatusArray = ["open", "pending", "closed"];

function ContainerForTasks() {

    return (
        taskStatusArray.map((item, index) => (
            <div id={"container" + index + "Div"} className="col-lg-4">
                <div id={"container" + index + "Card"} className='card'>
                    <div id={item} className='card-body'>
                    <CardCreaterBasedOnType
                    indexNum={index}
                    taskStatus={item}
                    />

                    </div>
                </div>
            </div>
        ))
    )
}

export default ContainerForTasks;