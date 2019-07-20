import React from 'react';
import EverythingContainer from "../Components/EverythingContainer/EverythingContainer"
import ContainerForTasks from "../Components/ContainerForTasks/ContainerForTasks"
import NewTaskDivAndButtons from "../Components/NewTaskDivAndButtons/NewTaskDivAndButtons"

class UserPage extends React.Component {
  state = {
    username: ""
  }

  componentDidMount (){
    this.handleSession();
  }

  handleSession = () => {
    let sessionUsername = sessionStorage.getItem("sessionUsername");
    if (sessionUsername) {
      this.setState({ username: sessionUsername },()=>{
        console.log(this.state);
      });
      // return true;
    }
    else {
      this.setState({ username: "" },()=>{
        console.log(this.state);
      });
      // return false;
    }
  }

  render() {
    return (
      <React.Fragment>
        <EverythingContainer>
          <ContainerForTasks>
          </ContainerForTasks>
          { this.state.username ? <NewTaskDivAndButtons /> : null }
        </EverythingContainer>
      </React.Fragment>
    );
  }
}

export default UserPage;