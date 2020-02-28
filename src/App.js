import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom';
import './App.css';


// import logo image as variable to pass in props. Create lib folder, then import//


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
	  						myName={loggedInUser}
	  					/>
	  				</Route>
	  				<Route path='/'>
   						<ClientLoginRegisterForm 
   							myName={loggedInUser}
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

// Example of useParams to be implemented
// function ComponentName() {
//   let { firstName, lastName } = useParams();
//   return(<h2>Hello {firstName} {lastName}!</h2>)
// }

export default App;
