import React from "react";
<<<<<<< HEAD:client/src/Components/ContainerForTasks.js
import CardCreaterBasedOnType from "./CardTypeForTasks"
=======
<<<<<<< HEAD:client/src/Components/ContainerForTasks/ContainerForTasks.js
import CardCreaterBasedOnType from "../CardTypeForTasks/CardTypeForTasks"

=======
import CardCreaterBasedOnType from "./CardTypeForTasks"
>>>>>>> master:client/src/Components/ContainerForTasks.js
>>>>>>> master:client/src/Components/ContainerForTasks/ContainerForTasks.js
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