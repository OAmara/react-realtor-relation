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
		},{ 
			firstName: 'Barrack', lastName: 'Obama'
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
		// email: "", username: "", lastName: "", recoveryAnswer: "", firstName: "", password: "", recoveryQuestion: ""
	})

	// Chat threads/ messages
	const [chatThreads, setChatThreads] = useState({})

	// Open/Close logic for Search Modals
	const [toggleNewSearchModal, setToggleNewSearchModal] = useState(false)
	const [toggleEditSearchModal, setToggleEditSearchModal] = useState(false)

	// search form body from client's newSearchFormModal
	const [searchBody, setSearchBody] = useState({})

	// property to universally activate functions within child components. Requires defaultActivate() call in child to revert to default.
	// important: always revert to falsy value.
	// Usage:
		// RealtorContainer/ClientList. activation --> 'refresh list'
		// in routes & used with createClientSearch. activation --> 'redirect search index'
	const [activate, setActivate] = useState(undefined)


	/* -- toggle child component functionality -- */

	// function called from child components to default (state)activate
	function defaultActivate() {
		setActivate(undefined)
	}

	// string argument, toggleSearchModal's state to true
	function openSearchModals(str) {
		if(str === 'open new modal') {
			setToggleNewSearchModal(true)
		} else if (str === 'open edit modal') {
			setToggleEditSearchModal(true)
		}
	}

	// defaults toggle Search Modals to false
	function closeSearchModals(str) {
		if(str === 'close new modal') {
			setToggleNewSearchModal(false)
		} else if(str === 'close edit modal') {
			setToggleEditSearchModal(false)
		}
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
		e.preventDefault()
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

			if(registerJson.status === 201) {
				setLoggedInUser(registerJson.data)
				if(whichForm === 'client') {
					setIsCLient(true)
				} else if (whichForm === 'realtor') {
					setIsCLient(false)
				}
				// resets register forms
				setRegisterForm({})
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

			if (loginJson.status === 200) {
				setLoggedInUser(loginJson.data)
				if(whichForm === 'client') {
					setIsCLient(true)
				} else if (whichForm === 'realtor') {
					setIsCLient(false)
				}
				// resets forms
				setLoginForm({})
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

			// set all state back to default // comment out for testing
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
		//

	function handleChange(e) {
		setSearchBody({
			...searchBody,
			[e.target.name]: e.target.value
		})
	}

	// Creates New Search for Client
	const createClientSearch = async (searchBody) => {
		try{
			console.log('\n\nThis is the body that we are using to create search: ', searchBody)
			const searchResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/searches/', {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(searchBody),
				headers: {
					'Content-Type': 'application/json'
				},
			})
			const searchJson = await searchResponse.json()
			console.log(searchJson.message)

			if(searchJson.status === 201) {
				// on json status code, once search is created:
				setActivate('redirect search index')
				closeSearchModals('close new modal')
				if(searchResponse.status === 201) {
					// waits for model to close and activate before performing:
					setActivate('get searches')
					setSearchBody({})
				}
			}
		} catch(err) {
			console.error(err)
		}
	}

	const deleteMessage = async (chatId, messageId) => {
		try{
			 const messageResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/chats/' + chatId + '/' + messageId, {
			 	credentials: 'include',
			 	method: 'DELETE',
			 	headers: {
			 		'Content-Type': 'application/json'
			 	},
			 })
			 console.log('\n\n\n\tmessageResponse: ', messageResponse)
			 const messageJson = await messageResponse.json()
			 console.log('\n\n\n\tmessageJson: ', messageJson)
			 console.log(messageJson.message)

			 if(messageJson.status === 200) {
			 	console.log('\n\n\nI work!!!!')
			 	console.log('delete This if works!: ', messageJson.message)
			 }

			console.log('\n\nchatId in deleteMessage func in app.js: ', chatId)
			console.log('\n\nmessageId in deleteMessage in app.js: ', messageId)

			// set to getChatThreads after success status in Json response

		} catch(err) {
			console.error(err)
		}
	}

	// Component mounted, updated, will update hook function
	useEffect(() => {
		document.title = 'ReState: ' + (registerForm.firstName || loggedInUser.firstName) + ' ' + (registerForm.lastName || loggedInUser.lastName)
	})


	/* -- Auth State Changing Functions -- */
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
	// Note: If anything needs to be visible universaly, include in routes component.
		// example: Chat/messaging Footer, Nav Header. Look at NewSearchFormModal as a good example.
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
					toggleEditSearchModal={toggleEditSearchModal}
					toggleNewSearchModal={toggleNewSearchModal}
					openSearchModals={openSearchModals}
					closeSearchModals={closeSearchModals}
					createClientSearch={createClientSearch}
					handleChange={handleChange}
					searchBody={searchBody}
					deleteMessage={deleteMessage}
	  			/>
	  		</Router>
    	</div>
  	);
}
// Example of useParams to be implemented //--> shows params on page
// function ComponentName() { let { firstName, lastName } = useParams();	return(<h2>Hello {firstName} {lastName}!</h2>) } 

export default App;
