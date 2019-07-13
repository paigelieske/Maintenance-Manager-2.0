import React from 'react';
import EverythingContainer from './Components/EverythingContainer';
import ContainerForTasks from './Components/ContainerForTasks'
import NavBar from './Components/NavBar'
// import StartButtonCreater from './Components/StartButton'
import NewTaskDivAndButtons from './Components/NewTaskDivAndButtons'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <EverythingContainer>
        <ContainerForTasks>
        </ContainerForTasks>

        <NewTaskDivAndButtons/>
      </EverythingContainer>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
