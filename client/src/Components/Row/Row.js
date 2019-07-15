import React from "react";
import Button from "../ButtonCreator/ButtonCreator";

function Row(props) {
    return (
        <div className="row col-sm-12" id={10}>
            {props.buttons.map((button, index) => (
                <Button 
                button={button} 
                clickFunction={props.clickfunction}
<<<<<<< HEAD:client/src/Components/Row.js
                handleSubmit={props.handleSubmit}
=======
>>>>>>> master:client/src/Components/Row/Row.js
                onChange={props.onChange}
                />
             ))}
        </div>
    )
}

export default Row;