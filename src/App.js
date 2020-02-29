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
	// Commented out prefilled fields below prevents warning for uncontrolled input, this solution would be to utilize
		// seperste state for each form and prefill each state with expected forms.
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
		setLoginForm({})
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
  	console.log(registerForm);
  	return (
    	<div className="App">
	  		<Router>

	  			<Switch>
	  				<Route path='/realtor-register'>
	  					<div className='Client-Link'>
		  					<h5>Return to Client Login:</h5>
		  						<Link to='/'>
				  					<Button onClick={resetForms} color={'twitter'} >
				  						Client Portal
				  					</Button>
		  						</Link>
		  				</div>

	  					<RealtorLoginRegisterForm 
	  						myName={loggedInUser}
	  						loginForm={loginForm}
	  						handleLoginFormChange={handleLoginFormChange}
	  						registerForm={registerForm}
	  						handleRegisterFormChange={handleRegisterFormChange}
	  					/>
	  				</Route>
	  				<Route path='/'>
   						<ClientLoginRegisterForm 
   							myName={loggedInUser}
   							loginForm={loginForm}
   							handleLoginFormChange={handleLoginFormChange}
   							registerForm={registerForm}
   							handleRegisterFormChange={handleRegisterFormChange}
   						/>

   						<div className='Realtor-Link'>
   							<h5>Realtors, Login Here:</h5>
				  				<Link to='/realtor-register'>
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
