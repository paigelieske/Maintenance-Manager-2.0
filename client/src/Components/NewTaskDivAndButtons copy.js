import React from "react";
import StartButtonCreater from './StartButton'
import Row from './Row'
let newTask = {};


class NewTaskDivAndButtons extends React.Component {
    state = {
        values: [],
        currentButtons: [["EastZone", "WestZone"]],
        rowsObject: {
            EastZone: {
                Purchasing: {
                    Bathroom: {
                        Plumbing: { "name": "Plumbing" },
                        Electrical: { "name": "Electrical" }
                    },
                    PersonalOffice: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    },
                    CubicleArea: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    }
                },
                Accounting: {
                    Bathroom: {
                        Plumbing: { "name": "Plumbing" },
                        Electrical: { "name": "Electrical" }
                    },
                    PersonalOffice: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    },
                    CubicleArea: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    }
                },
                OtherRoomsEast: {
                    ConferenceRoom: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Equipment: { "name": "Equipment" }
                    },
                    LobbyOrReception: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    }
                }
            },
            WestZone: {
                Sales: {
                    Bathroom: {
                        Plumbing: { "name": "Plumbing" },
                        Electrical: { "name": "Electrical" }
                    },
                    PersonalOffice: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    },
                    CubicleArea: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    }
                },
                Billing: {
                    Bathroom: {
                        Plumbing: { "name": "Plumbing" },
                        Electrical: { "name": "Electrical" }
                    },
                    PersonalOffice: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    },
                    CubicleArea: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Logins: { "name": "Logins" },
                        Equipment: { "name": "Equipment" }
                    }
                },
                OtherRoomsWest: {
                    ConferenceRoom: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Equipment: { "name": "Equipment" }
                    },
                    OfficeArea: {
                        HVAC: { "name": "HVAC" },
                        Electrical: { "name": "Electrical" },
                        Technical: { "name": "Technical" },
                        Equipment: { "name": "Equipment" }
                    }
                }
            }
        },
    }


    handleClick = (value) => {
        if (value) {
            this.setState((state) => {
                console.log(value)
                return state.values.push(value)
            },
                () => {
                    this.setState((state) => {
                        return state.currentButtons.push(Object.keys(this.state.rowsObject[this.state.values[0][this.state.values[1]]]))
                    },
                        () => { console.log("STATE: " + this.state.currentButtons) }
                    )
                }
            )
        } 
        else {
            return console.log("There was a problem rendering the buttons")
        }
    }

    render() {
        return (
            <React.Fragment>
                <StartButtonCreater
                >
                </StartButtonCreater>
                <div id="newTaskDiv">
                </div>
                {this.state.currentButtons.map((row, index) => {
                    console.log(row)
                    return <Row

                        buttons={row}
                        clickfunction={this.handleClick}
                    ></Row>
                })}
            </React.Fragment>
        )
    }
}

// export default NewTaskDivAndButtons
