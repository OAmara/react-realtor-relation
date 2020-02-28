import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import './App.css';


// import logo image as variable to pass in props. Create lib folder, then import//


/* -- Components -- */
import ClientLoginRegisterForm from './ClientLoginRegisterForm'
import RealtorLoginRegisterForm from './RealtorLoginRegisterForm'

function App(props) {
	// user info retrieved from API on login/ register
	const [loggedInUser, setLoggedInUser] = useState({firstName: 'Omar', lastName: 'Amara'})
	// determination if User is a Client or Realtor: Can also be used as loggedIn authentication if not null.(true, false)
	const [isClient, setIsCLient] = useState(null)
	//* This will be filled with information posted from all 4 forms!
	const [formBody, setFormBody] = useState({
		email: "",
		username: "bb",
		lastName: "bb",
		recoveryAnswer: "webb",
		firstName: "",
		password: "245345",
		recoveryQuestion: "wwer"
	})


	useEffect(() => {
		document.title = loggedInUser.firstName + ' ' + loggedInUser.lastName
	})

	function handleFormChange(e) {
		setFormBody({
				...formBody,
				[e.target.name]: e.target.value
		});		
	}

  	console.log(formBody);
  	console.log(formBody.firstName);
  	return (
    	<div className="App">
	  		<Router>


	  			<Switch>
	  				<Route path='/realtor/register'>
	  					<h5>Return to Client Login:</h5>
	  						<Link to='/'>
			  					<Button color={'twitter'} >
			  						Client Portal
			  					</Button>
	  						</Link>

	  					<RealtorLoginRegisterForm 
	  						myName={loggedInUser}
	  					/>
	  				</Route>
	  				<Route path='/'>
   						<ClientLoginRegisterForm 
   							myName={loggedInUser}
   							handleFormChange={handleFormChange}
   							formBody={formBody}
   						/>

   						<div className='Realtor-Link'>
   							<h5>Realtors Please Login Here:</h5>
				  				<Link to='/realtor/register'>
						  			<Button color={'twitter'} className='Link'>
						  				Realtor Portal
						  			</Button>
				  				</Link>
				  		</div>
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
