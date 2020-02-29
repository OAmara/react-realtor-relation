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
	const names = [{
			firstName: 'Benjamin', lastName: 'Franklin'
		},{
			firstName: 'George', lastName: 'Washington'
		},{
			firstName: 'Abraham', lastName: 'Lincoln'
		},{
			firstName: 'John', lastName: 'Adams'
	}]
	let randomName = Math.floor(Math.random() * names.length)
	// user info retrieved from API on login/ register
	const [loggedInUser, setLoggedInUser] = useState(names[randomName])
	// determines if User is a Client or Realtor: Can also be used as loggedIn authentication if not null.(true, false)
	const [isClient, setIsCLient] = useState(null)
	//* This will be filled with information posted from all login forms!
	// Commented fields below prevents uncontrolled input warning when inserted. Seperate states with fields would be needed for each form.
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

	// clears forms when switching components. Choose Random Name!
	function resetForms() {
		setRegisterForm({})
		setLoginForm({})
		setLoggedInUser(names[randomName])
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

	function handleAllFormSubmission(form, whichForm) {
		if(form === 'login') {
			console.log('loginForm in App.js: ', loginForm);

		} else if(form === 'register') {
			 console.log('registerForm in App.js: ', registerForm);
			register(registerForm, whichForm)

		}
		// may need additional conditional logic to fetch between all 4 forms. That rhymed!
	}

	const register = async (registerFormBody, whichForm) => {
		console.log('\n', registerFormBody, whichForm);
		let apiUrl = null
		if(whichForm === 'client') {
			apiUrl = process.env.REACT_APP_MEN_API_URL + '/api/v1.0/clients/register'

		} else if(whichForm === 'realtor') {
			console.log('Realtor is trying to fetch register route!');

		}
		try {
			const registerResponse = await fetch(apiUrl, {

			})


		} catch(err) {
			if(err) {
				// can crearte custom error
				console.error(err)
			}
		}
			
	}

	useEffect(() => {
		document.title = 'Estate: ' + (registerForm.firstName || loggedInUser.firstName) + ' ' + (registerForm.lastName?registerForm.lastName:loggedInUser.lastName)
	})

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
	  						handleAllFormSubmission={handleAllFormSubmission}
	  					/>
	  				</Route>

	  				<Route path='/'>
	  				<div>
   						<ClientLoginRegisterForm 
   							myName={loggedInUser}
   							loginForm={loginForm}
   							handleLoginFormChange={handleLoginFormChange}
   							registerForm={registerForm}
   							handleRegisterFormChange={handleRegisterFormChange}
   							handleAllFormSubmission={handleAllFormSubmission}
   						/>

   						<div className='Realtor-Link'>
   							<h5>Realtors, Login Here:</h5>
				  				<Link to='/realtor-register'>
						  			<Button onClick={resetForms} color={'twitter'} className='Link'>
						  				Realtor Portal
						  			</Button>
				  				</Link>
				  		</div>
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
