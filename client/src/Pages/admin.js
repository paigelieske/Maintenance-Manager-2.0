import React from 'react';
import EverythingContainer from "../Components/EverythingContainer"
import NewTaskDivAndButtons from "../Components/NewTaskDivAndButtons"
import CardCreaterBasedOnType from "../Components/CardTypeForTasks/CardTypeForTasks"

function AdminPage() {
  return (
    <React.Fragment>
      <EverythingContainer>
        <CardCreaterBasedOnType>
        </CardCreaterBasedOnType>
        <NewTaskDivAndButtons/>
      </EverythingContainer>
    </React.Fragment>
  );
}

export default AdminPage;