import React from 'react'

function CreateSeverityDropDownMenu() {
    for (var i = 0; i <= 5; i++) {
        return (
            <input type="button" id={i} value={i} className="text-center" />
        )
    }
}

export default CreateSeverityDropDownMenu 