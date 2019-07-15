import React from "react";
import StartButtonCreater from './StartButton'
import Row from './Row'


class NewTaskDivAndButtons extends React.Component {
    state = {
        newTask: {},
        currentButtons: [[], [], [], [], [], []],
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState((state) => {
            state.newTask.notes = value
        })
        this.setState(() => {
            return this.state.values.splice(5, 1, value)
        })
    }

    handleClick = (value) => {
        if (value) {
            if (value === "Start Button") {
                this.setState((state) => {
                    return (state.currentButtons.splice(0, 1, ["EastZone", "WestZone"]) && state.currentButtons.splice(1, 1, []) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "EastZone") {
                this.setState((state) => {
                    state.newTask.zone = value
                });
                this.setState((state) => {
                    return (state.currentButtons.splice(1, 1, ["Purchasing", "Accounting", "Other Rooms East"]) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "WestZone") {
                this.setState((state) => {
                    state.newTask.zone = value
                });
                this.setState((state) => {
                    return (state.currentButtons.splice(1, 1, ["Sales", "Billing", "Other Rooms West"]) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Purchasing" || value === "Accounting" || value === "Sales" || value === "Billing") {
                this.setState((state) => {
                    state.newTask.department = value
                });
                this.setState((state) => {
                    return (state.currentButtons.splice(2, 1, ["Bathroom", "Personal Office", "Cubicle Area"]) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Other Rooms East") {
                this.setState((state) => {
                    state.newTask.department = value
                })
                this.setState((state) => {
                    return (state.currentButtons.splice(2, 1, ["Conference Room", "Lobby or Reception"]) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Other Rooms West") {
                this.setState((state) => {
                    state.newTask.department = value
                })
                this.setState((state) => {
                    return (state.currentButtons.splice(2, 1, ["Office Area", "Conference Room"]) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Bathroom") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return (state.currentButtons.splice(3, 1, ["Plumbing", "Electrical"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Personal Office" || value === "Cubicle Area" || value === "Lobby or Reception") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return (state.currentButtons.splice(3, 1, ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Breakroom") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return (state.currentButtons.splice(3, 1, ["HVAC", "Plumbing", "Electrical", "Equipment"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "Office Area" || value === "Conference Room") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return (state.currentButtons.splice(3, 1, ["HVAC", "Electrical", "Technical", "Equipment"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                })
            }
            else if (value === "HVAC" || value === "Electrical" || value === "Technical" || value === "Equipment" || value === "Plumbing" || value === "Logins") {
                this.setState((state) => {
                    state.newTask.problem = value
                })
                        this.setState((state) => {
                            return (state.currentButtons.splice(4, 1, ["1", "2", "3", "4", "5"]) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        })
            }
            else if (value === "1" || value === "2" || value === "3" || value === "4" || value === "5") {
                this.setState((state) => {
                    state.newTask.severity = value
                })
                this.setState((state) => {
                    return state.currentButtons.splice(5, 1, ["Note"])
                })
            }
            else if (value === "Note") {
                this.setState((state) => {
                    return (state.currentButtons.splice(0, 1, []) && state.currentButtons.splice(1, 1, []) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, ["Task has been submitted"]))
                })
            }
            else {
                return console.log("There was a problem rendering the buttons")
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="breadCrumbs">{Object.values(this.state.newTask).map((crumb, index) => (
                    index < 4 ? crumb + " > " : crumb))}
                </div>
                <StartButtonCreater
                    value="Start Button"
                    onClick={this.handleClick}
                >
                </StartButtonCreater>
                {this.state.currentButtons.map((row, index) => {
                    return <Row
                        buttons={row}
                        clickfunction={this.handleClick}
                        onChange={this.handleChange}
                    ></Row>
                })}
            </React.Fragment>
        )
    }
}


export default NewTaskDivAndButtons
