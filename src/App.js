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
	  		<Router>


	  			<Switch>
	  				<Route path='/realtor/register'>
	  					<h4>
	  						<Link to='/'>
	  							Client
	  						</Link>
	  					</h4>
	  					<RealtorLoginRegisterForm 

	  					/>
	  				</Route>
	  				<Route path='/'>
   						<ClientLoginRegisterForm 

   						/>
			  			<h4>
			  				<Link to='/realtor/register'>
			  					Realtor Register
			  				</Link>
			  			</h4>
	  				</Route>
	  			</Switch>

	  		</Router>
    	</div>
  	);
}

export default App;
