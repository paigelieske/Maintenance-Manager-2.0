import React from 'react';
import EverythingContainer from "../Components/EverythingContainer"
import ContainerForTasks from "../Components/ContainerForTasks"
import NewTaskDivAndButtons from "../Components/NewTaskDivAndButtons"

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