import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './Pages/user'
import NavBar from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import LoginModal from './Components/Modals/LoginModal';
import SignupModal from './Components/Modals/SignupModal';
import HelpModal from './Components/Modals/HelpModal';

function App() {
	return (
		<React.Fragment>
			<Router>
				<NavBar />
				<LoginModal />
				<SignupModal />
				<HelpModal />
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
