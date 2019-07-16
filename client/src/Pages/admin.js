import React from 'react';
import EverythingContainer from "../Components/EverythingContainer"
import ContainerForTasks from "../Components/ContainerForTasks"
import NewTaskDivAndButtons from "../Components/NewTaskDivAndButtons"

function AdminPage() {
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

export default AdminPage;