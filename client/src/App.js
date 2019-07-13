import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './Pages/user'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/users" component={UserPage} />
          <Route exact path="/admin" component={UserPage} />
          <Route component={UserPage} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
