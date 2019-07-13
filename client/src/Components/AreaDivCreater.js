import React from "react"

var divCreaterArray = ["zoneDrop", "departmentDrop", "roomDrop", "problemDrop", "severityDrop", "note"]

function AreaDivCreater({ childern }) {
    return (
        divCreaterArray.map((item, index) => (
            <div id={[item] + "Div"} className={"btn-group buttonContainerContainer " + [index]}>
                <div id={item}>
                    {childern}
                </div>
            </div>
        ))
    )
}

export default AreaDivCreater