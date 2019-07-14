import React from "react";
import Button from "../ButtonCreator/ButtonCreator";

function Row(props) {
    return (
        <div className="row col-sm-12" id={10}>
            {props.buttons.map((button, index) => (
                <Button 
                button={button} 
                clickFunction={props.clickfunction}
                onChange={props.onChange}
                />
             ))}
        </div>
    )
}

export default Row;