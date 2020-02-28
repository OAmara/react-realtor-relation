import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom';
import './App.css';
/* -- Components -- */
import ClientLoginRegisterForm from './ClientLoginRegisterForm'
import RealtorLoginRegisterForm from './RealtorLoginRegisterForm'

function App() {
const [loggedInUser, setLoggedInUser] = useState({firstName: 'Omar', lastName: 'Amara'})

useEffect(() => {
	document.title = loggedInUser.firstName + ' ' + loggedInUser.lastName
})

  	return (
    	<div className="App">
   			<ClientLoginRegisterForm />

	  		<Router>

	  			<h4>
	  				<Link to='/realtor/register'>
	  					Realtor Registration
	  				</Link>
	  			</h4>

	  			<Switch>
	  				<Route path='/realtor/register'>
	  					<RealtorLoginRegisterForm />
	  				</Route>
	  			</Switch>

	  		</Router>
    	</div>
  	);
}

export default App;
