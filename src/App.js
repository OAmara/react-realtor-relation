import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
/* -- Components -- */
import Routes from './routes';

// imported logo image to pass as variable in props.
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
	const [isClient, setIsCLient] = useState(false)// ***Set to null, true/false for testing
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
	// Chat threads/ messages
	const [chatThreads, setChatThreads] = useState({})
	// property to universally activate functions within child components. Requires a callback in child to revert to default.
	// important: always revert to falsy value. Can specify specific usage by changing to value to trigger function in child component.
	// Usage:
		// RealtorContainer/ClientList activation --> 'refresh list'
	const [activate, setActivate] = useState(undefined)

	// function called from child components to default (state)activate
	function defaultActivate() {
		setActivate(undefined)
	}


	/* -- Auth Related Functions -- */

	// clears forms when switching auth components. Chooses a new Random Name!
	function resetForms() {
		setRegisterForm({})
		setLoginForm({})
		setLoggedInUser(names[randomName])
	}

	// handles loginForm state
	// to prevent uncontrolled warning, try indicating specific fields here as well as useState(...)
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
		}
		try {
			const registerResponse = await fetch(apiUrl, {
				credentials: 'include',
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
				credentials: 'include',
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

	const logout = async () => {
		// back-end should store this in main server file??
		let apiUrl = process.env.REACT_APP_MEN_API_URL
		if(isClient === true) {
			apiUrl += '/api/v1.0/clients/logout'
		} else if(isClient === false) {
			apiUrl += '/api/v1.0/realtors/logout'
		}
		try {
			const logoutResponse = await fetch(apiUrl)
			const logoutJson = await logoutResponse.json()

			// set all state back to default
			if(logoutResponse.status === 200) {
				console.log(logoutJson.message);
				setIsCLient(null)
				setLoggedInUser(names[randomName])
			}
		} catch(err) {
			console.error(err)
		}
	}


	/* -- Routed Component Methods -- */

		// To terminate Contract/Relationship.
	const terminateContract = async (clientId) => {
		try{
			const cutTiesResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/clients/terminate/' + clientId, {
				credentials: 'include',
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
			});
			const cutTiesJson = await cutTiesResponse.json()
			console.log(cutTiesJson.message);
			if(cutTiesJson.status === 200) {
				setActivate('refresh list')
			}
		} catch(err) {
			console.error(err)
		}
	}

	const chatList = async () => {
		try {
			const chatResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/chats/',{
				credentials: 'include'
			})
			const chatJson = await chatResponse.json()
			if(chatResponse.status === 200) {
				setChatThreads(chatJson.data)
			}
		} catch(err) {
			console.error(err)
		}
	}

	const createMessage = async (messageBody, chatId) => {
		try{
			console.log('body in createMessage: ', messageBody);
			console.log('clientId in createMessage: ', chatId);
 			const messageResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/chats/messages/' + chatId, {
 				credentials: 'include',
 				method: 'POST',
 				body: JSON.stringify(messageBody),
 				headers: {
 					'Content-Type': 'application/json'
 				},
 			})
 			console.log('messageResponse in createMessage: ', messageResponse);
 			const messageJson = await messageResponse.json()
 			console.log('messageJson in createMessage: ', messageJson);
 
 			if(messageResponse.status === 201){
 				chatList()
 			}

		} catch(err) {
			console.error(err)
		}
	}

	// Chat function to delete a message
		//
	// ^ Should both these be in Chat Container??

	useEffect(() => {
		 document.title = 'ReState: ' + (registerForm.firstName || loggedInUser.firstName) + ' ' + (registerForm.lastName || loggedInUser.lastName)
	})

	/* -- State Changing Functions -- */
	// these can be replaced by using global variables for state such as loggedInUser

	// Change/setLoggedInUser
	function updateLoggedInUser(updatedUser) {
		// may need to update api if utilizable content/ sensitive info is being displayed here.
		console.log('\n\ncurrent loggedInUser info: ', loggedInUser);
		console.log('^\nChange loggedInUser to this: ', updatedUser);

		// let updateUser = updatedUser
		setLoggedInUser(updatedUser)
	}

	console.log(loggedInUser);
	console.log(isClient);
	console.log('\n\n\t\tThis is activate!', activate);
  	return (
		<div className='App'>
	  		<Router >
	  			<Routes 
	  				/*---> Try spread operating props instead of writing out each. ex = render={props=><RealtorLoginRegisterForm {...props}/>} */
		   			/* Important auth logged in state properties */ //--> consider global variables for these!
					isClient={isClient}
		   			myName={loggedInUser}
					loggedInUser={loggedInUser}
					chatThreads={chatThreads}
					activate={activate}
					/* Auth methods */
					loginForm={loginForm}
					registerForm={registerForm}
					resetForms={resetForms}
					handleLoginFormChange={handleLoginFormChange}
					handleRegisterFormChange={handleRegisterFormChange}
					handleAllFormSubmission={handleAllFormSubmission}
					logout={logout}
					/* client/realtor logos */
					logo={mainLogo}
					realtorLogo={realtorLogo}
					/* strictly children methods to update (should be global) variables*/
					updateLoggedInUser={updateLoggedInUser}
					chatList={chatList}
					terminateContract={terminateContract}
					createMessage={createMessage}
					defaultActivate={defaultActivate}
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
