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
	//* This will be filled with information posted from all login forms!
	const [loginForm, setLoginForm] = useState({
		// email: "",
		// username: "",
		// lastName: "",
		// recoveryAnswer: "",
		// firstName: "",
		// password: "",
		// recoveryQuestion: ""
	})
	// This will be filled with info from both register froms!
	const [registerForm, setRegisterForm] = useState({})


	useEffect(() => {
		document.title = loggedInUser.firstName + ' ' + loggedInUser.lastName
	})

	// clears forms when switching components
	function resetForms() {
		setRegisterForm({})
	}

	function handleLoginFormChange(e) {
		setLoginForm({
			...loginForm,
			[e.target.name]: e.target.value
		});		
	}

	// OR: 
	/*
	const handleLoginFormChange = (e) {
		setLoginFormBody({
			...loginFormBody,
			[e.target.name]: e.target.value
		})
	}
	*/

	function handleRegisterFormChange(e) {
		setRegisterForm({
			...registerForm,
			[e.target.name]: e.target.value
		})
	}

  	console.log(loginForm);
  	console.log(loginForm.firstName);
  	console.log(registerForm);
  	console.log(registerForm.firstName);
  	return (
    	<div className="App">
	  		<Router>


	  			<Switch>
	  				<Route path='/realtor/register'>
	  					<h5>Return to Client Login:</h5>
	  						<Link to='/'>
			  					<Button onClick={resetForms} color={'twitter'} >
			  						Client Portal
			  					</Button>
	  						</Link>

	  					<RealtorLoginRegisterForm 
	  						myName={loggedInUser}
	  						handleRegisterFormChange={handleRegisterFormChange}
	  						registerForm={registerForm}
	  					/>
	  				</Route>
	  				<Route path='/'>
   						<ClientLoginRegisterForm 
   							myName={loggedInUser}
   							handleLoginFormChange={handleLoginFormChange}
   							loginForm={loginForm}
   							handleRegisterFormChange={handleRegisterFormChange}
   							registerForm={registerForm}
   						/>

   						<div className='Realtor-Link'>
   							<h5>Realtors Please Login Here:</h5>
				  				<Link to='/realtor/register'>
						  			<Button onClick={resetForms} color={'twitter'} className='Link'>
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
//   let { firstName, lastName } = useParams();			//--> sets param for that route?
//   return(<h2>Hello {firstName} {lastName}!</h2>)		//--> shows params on page
// }

export default App;
