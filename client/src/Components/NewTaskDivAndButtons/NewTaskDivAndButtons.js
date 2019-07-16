import React from "react";
import StartButtonCreater from '../StartButton/StartButton';
import Row from '../Row/Row';
import "../EverythingContainer/EverythingContainer.css";
import API from "../../utils/API";

class NewTaskDivAndButtons extends React.Component {
    state = {
        newTask : {},
        values: [],
        currentButtons: [[], [], [], [], [], []]
    }

    // componentDidMount() {
    //     this.loadTasks();
    // }

    // loadTasks = () => {
    //     API.getTasks()
    //         .then(res =>
    //             this.setState({ tasks: res.data }))
    //         .catch(err => console.log(err));
    // };

    handleChange = event => {
        console.log(this.state.newTask)
        const { value } = event.target;
        this.setState((state) => {
            state.newTask.notes = value
        })
        this.setState(() => {
            return this.state.values.splice(5, 1, value)
        })
    }

    handleClick = (value) => {
        console.log(this.state.newTask)
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
                    return (state.values.splice(0, 1, value))
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(1, 1, ["Purchasing", "Accounting", "Other Rooms East"]) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "WestZone") {
                this.setState((state) => {
                    state.newTask.zone = value
                });
                this.setState((state) => {
                    return state.values.splice(0, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(1, 1, ["Sales", "Billing", "Other Rooms West"]) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Purchasing" || value === "Accounting" || value === "Sales" || value === "Billing") {
                this.setState((state) => {
                    state.newTask.department = value
                });
                this.setState((state) => {
                    return state.values.splice(1, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(2, 1, ["Bathroom", "Personal Office", "Cubicle Area"]) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Other Rooms East") {
                this.setState((state) => {
                    state.newTask.department = value
                })
                this.setState((state) => {
                    return state.values.splice(1, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(2, 1, ["Conference Room", "Lobby or Reception"]) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Other Rooms West") {
                this.setState((state) => {
                    state.newTask.department = value
                })
                this.setState((state) => {
                    return state.values.splice(1, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(2, 1, ["Office Area", "Conference Room"]) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Bathroom") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return state.values.splice(2, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(3, 1, ["Plumbing", "Electrical"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Personal Office" || value === "Cubicle Area" || value === "Lobby or Reception") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return state.values.splice(2, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(3, 1, ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Breakroom") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return state.values.splice(2, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(3, 1, ["HVAC", "Plumbing", "Electrical", "Equipment"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "Office Area" || value === "Conference Room") {
                this.setState((state) => {
                    state.newTask.room = value
                })
                this.setState((state) => {
                    return state.values.splice(2, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(3, 1, ["HVAC", "Electrical", "Technical", "Equipment"]) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "HVAC" || value === "Electrical" || value === "Technical" || value === "Equipment" || value === "Plumbing" || value === "Logins") {
                this.setState((state) => {
                    state.newTask.problem = value
                })
                this.setState((state) => {
                    return state.values.splice(3, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(4, 1, ["1", "2", "3", "4", "5"]) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, []))
                        }))
            }
            else if (value === "1" || value === "2" || value === "3" || value === "4" || value === "5") {
                this.setState((state) => {
                    state.newTask.severity = value
                })
                this.setState((state) => {
                    return state.values.splice(4, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return state.currentButtons.splice(5, 1, ["Note"])
                        }))
            }
            else if (value === "Note") {
                this.setState((state) => {
                    return state.values.splice(5, 1, value)
                },
                    () =>
                        this.setState((state) => {
                            return (state.currentButtons.splice(0, 1, []) && state.currentButtons.splice(1, 1, []) && state.currentButtons.splice(2, 1, []) && state.currentButtons.splice(3, 1, []) && state.currentButtons.splice(4, 1, []) && state.currentButtons.splice(5, 1, []) && state.currentButtons.splice(6, 1, ["Task has been submitted"]))
                        }))
            }
            else {
                return console.log("There was a problem rendering the buttons")
            }
        }
        // console.log(this.state.newTask)    
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("api");
        API.saveTask({
            zone: this.state.newTask.zone,
            department: this.state.newTask.department,
            room: this.state.newTask.room,
            problem: this.state.newTask.problem,
            severity: this.state.newTask.severity,
            note: this.state.newTask.notes
        })
            .then(res => this.emailTask())
            .catch(err => console.log(err));
    }


    emailTask = () => {
        API.emailTask({
            zone: this.state.newTask.zone,
            department: this.state.newTask.department,
            room: this.state.newTask.room,
            problem: this.state.newTask.problem,
            severity: this.state.newTask.severity,
            note: this.state.newTask.notes
        })
        .then(res => console.log("email res" + res))
        .catch(err => console.log(err));
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
                        handleSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                    ></Row>
                })}
            </React.Fragment>
        )
    }
}

export default NewTaskDivAndButtons;
