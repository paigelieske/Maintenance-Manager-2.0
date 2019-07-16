import React from 'react';
import EverythingContainer from "../Components/EverythingContainer/EverythingContainer"
import ContainerForTasks from "../Components/ContainerForTasks/ContainerForTasks"
import NewTaskDivAndButtons from "../Components/NewTaskDivAndButtons/NewTaskDivAndButtons"

function UserPage() {
  return (
    <React.Fragment>
      <EverythingContainer>
        <ContainerForTasks>
        </ContainerForTasks>
        <NewTaskDivAndButtons/>
      </EverythingContainer>
    </React.Fragment>
  );
}

export default UserPage;