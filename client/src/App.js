import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './Pages/user'
import NavBar from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Admin from './Pages/admin'
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
          <Route component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
