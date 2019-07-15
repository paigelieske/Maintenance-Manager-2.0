import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserPage from './Pages/user'
import Admin from './Pages/admin'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/users" component={Admin} />
          <Route exact path="/admin" component={Admin} />
          <Route component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
