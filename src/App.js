import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
/* -- Components -- */
import Routes from './routes';

// imported logo image to pass as variable.
const mainLogo = require('./lib/restate.png')
const realtorLogo = require('./lib/restateRealtors.png')

function App(props) {
	const names = [{
			firstName: 'Benjamin', lastName: 'Franklin'
		},{
			firstName: 'George', lastName: 'Washington'
		},{
			firstName: 'Abraham', lastName: 'Lincoln'
		},{
			firstName: 'John', lastName: 'Adams'
		},{
			firstName: 'Franklin', lastName: 'Roosevelt'
		},{
			firstName: 'John F.', lastName: 'Kennedy'
	}]
	let randomName = Math.floor(Math.random() * names.length)
	// user info retrieved from API on login/ register
	const [loggedInUser, setLoggedInUser] = useState(names[randomName])
	// determines if User is a Client or Realtor: Used as loggedIn authentication if not null.(true=client routes, false=realtor routes)
	const [isClient, setIsCLient] = useState(true)// ***Set to null, true/false for testing
	//* This will be filled with information posted from all login forms!
	const [loginForm, setLoginForm] = useState({})
	// This will be filled with info from both register froms!
	// Commented fields below prevents uncontrolled input warning when inserted. Seperate states with fields would be needed for each form.
	const [registerForm, setRegisterForm] = useState({
		// email: "",
		// username: "",
		// lastName: "",
		// recoveryAnswer: "",
		// firstName: "",
		// password: "",
		// recoveryQuestion: ""
	})
	// logo to be passed in state
	const [logo, setLogo] = useState(mainLogo)

	// clears forms when switching components. Choose Random Name!
	function resetForms() {
		setRegisterForm({})
		setLoginForm({})
		setLoggedInUser(names[randomName])
	}

	// handles loginForm state
	function handleLoginFormChange(e) {
		setLoginForm({
			...loginForm,
			[e.target.name]: e.target.value
		});		
	}

	// handles registerForm state
	function handleRegisterFormChange(e) {
		setRegisterForm({
			...registerForm,
			[e.target.name]: e.target.value
		})
	}

	// handles all 4 login/register form submission for client/realtor
	function handleAllFormSubmission(e, form, whichForm) {
		// e.preventDefault()
		if(form === 'login') {
			// calls login function and passes state and which from submitted as arguments.
			login(loginForm, whichForm)
		} else if(form === 'register') {
			register(registerForm, whichForm)
		}
	}

	const register = async (registerFormBody, whichForm) => {
		let apiUrl = process.env.REACT_APP_MEN_API_URL
		if(whichForm === 'client') {
			apiUrl += '/api/v1.0/clients/register'
		} else if(whichForm === 'realtor') {
			apiUrl += '/api/v1.0/realtors/register'
			console.log('hello');
		}
		try {
			const registerResponse = await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify(registerFormBody),
				headers: {
					'Content-Type': 'application/json'
				},
			})

			const registerJson = await registerResponse.json()
			console.log(registerJson);

			if(registerResponse.status === 201) {
				setLoggedInUser(registerJson.data)
				if(whichForm === 'client') {
					setIsCLient(true)
				} else if (whichForm === 'realtor') {
					setIsCLient(false)
				}
			}
		} catch(err) {
			if(err) {
				// can crearte custom error
				console.error(err)
			}
		}	
	}

	const login = async (loginFormBody, whichForm) => {
		let apiUrl = process.env.REACT_APP_MEN_API_URL
		if(whichForm === 'client') {
			apiUrl += '/api/v1.0/clients/login'
		} else if(whichForm === 'realtor') {
			apiUrl += '/api/v1.0/realtors/login'
		}
		try {
			const loginResponse = await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify(loginFormBody),
				headers: {
					'Content-Type': 'application/json'
				},
			})

			const loginJson = await loginResponse.json()
			console.log(loginJson);

			if (loginResponse.status === 200) {
				setLoggedInUser(loginJson.data)
				if(whichForm === 'client') {
					setIsCLient(true)
				} else if (whichForm === 'realtor') {
					setIsCLient(false)
				}
			}
		} catch(err) {
			if(err) {
				// can crearte custom error
				console.error(err)
			}
		}	
	}

	useEffect(() => {
		 document.title = 'ReState: ' + (registerForm.firstName || loggedInUser.firstName) + ' ' + (registerForm.lastName || loggedInUser.lastName)
	})

	console.log(loggedInUser);
	console.log(isClient);
  	return (
		<div className='App'>
	  		<Router >
	  			<Routes 
	  				// Try spread operating props instead of writing out each. ex = render={props=><RealtorLoginRegisterForm {...props}/>}
		   			myName={loggedInUser}
					loginForm={loginForm}
					handleLoginFormChange={handleLoginFormChange}
					registerForm={registerForm}
					handleRegisterFormChange={handleRegisterFormChange}
					handleAllFormSubmission={handleAllFormSubmission}
					logo={logo}
					loggedInUser={loggedInUser}
					resetForms={resetForms}
					realtorLogo={realtorLogo}
					isClient={isClient}
	  			/>
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
