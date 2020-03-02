import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Button, Divider, Segment, Sticky } from 'semantic-ui-react'

import ClientLoginRegisterForm from '../ClientLoginRegisterForm'
import RealtorLoginRegisterForm from '../RealtorLoginRegisterForm'
import ClientContainer from '../ClientContainer'
import RealtorList from '../ClientContainer/RealtorList'
import ChatContainer from '../ChatContainer'

export default function Routes(props) {
	return(
// 		<Switch>
// 			<Route path='/' exact component={ClientLoginRegisterForm} />
// 			<Route path'/realtors' component={RealtorLoginRegisterForm} />
// 
// 			<Route path='/dashboard' component={ClientContainer} isClient />
// 
// 			{/* Redirect if not signed in */}
// 			<Route component={SignIn} />
// 
// 		</Switch>

		// Already in Router from App.js render
		<React.Fragment>
			{
				/* Client Logged In */
				(props.isClient === true) 
				? 
				<React.Fragment>
				<Sticky>
					<Segment raised size='mini' color='blue'>
						<Link to='/clients/'>
							<Button>{props.loggedInUser.firstName}'s Home</Button>
						</Link>
						<Link to='/clients/realtor-list'>
							<Button>Realtor List</Button>
						</Link>
					</Segment>
				</Sticky>

  				<Switch>
	  				<Route path='/clients/realtor-list'>
  						<RealtorList 
  							loggedInUser={props.loggedInUser}
  						/>
	  				</Route>

	  				<Route path='/clients/'>
  						<ClientContainer 
							loggedInUser={props.loggedInUser}
							logo={props.logo}
							isClient={props.isClient}
						/>
					</Route>
	  			</Switch>
				<ChatContainer />
	  			</React.Fragment>
  				:

  				/* Realtor Logged In */
  				(props.isClient === false)
  				?
  				<React.Fragment>
  					<Link to='/realtors/home'>
  						{props.loggedInUser.lastName} Home
  					</Link>
  					<Switch>
		  				<Route path='/realtors/home'>
		  					{/* RealtorContainer */}
		  					isClient={props.isClient}
		  					loggedInUser={props.loggedInUser}
		  					logo={props.realtorLogo}
		  				</Route>
		  			</Switch>
	  			</React.Fragment>
  				:

  				/* User !Logged In */
		  		<React.Fragment>
		  			<Switch>
		  				<Route path='/realtors'>
		  					<div className='Client-Link'>
		  						<Link to='/'>
		  						<Divider fitted horizontal>Return to Client Login:
				  					<Button compact fluid circular onClick={props.resetForms} color={'twitter'} >
				  						Client Portal
				  					</Button></Divider>
		  						</Link>
		  					</div>
		  					<RealtorLoginRegisterForm 
		  					// Try spread operating props instead of writing out each. ex = render={props=><RealtorLoginRegisterForm {...props}/>}
		  						myName={props.loggedInUser}
		  						loginForm={props.loginForm}
		  						handleLoginFormChange={props.handleLoginFormChange}
		  						registerForm={props.registerForm}
		  						handleRegisterFormChange={props.handleRegisterFormChange}
		  						handleAllFormSubmission={props.handleAllFormSubmission}
		  						logo={props.realtorLogo}
		  						loggedInUser={props.loggedInUser}
		  					/>
		  				</Route>

		  				<Route path='/'>
	   						<ClientLoginRegisterForm 
	   							myName={props.loggedInUser}
	   							loginForm={props.loginForm}
	   							handleLoginFormChange={props.handleLoginFormChange}
	   							registerForm={props.registerForm}
	   							handleRegisterFormChange={props.handleRegisterFormChange}
	   							handleAllFormSubmission={props.handleAllFormSubmission}
	   							logo={props.logo}
	   							loggedInUser={props.loggedInUser}
	   						/>
	   						<div className='Realtor-Link'>
				  				<Link to='/realtors'>
						  			<Divider fitted horizontal>Realtor's Login Here:<Button compact fluid onClick={props.resetForms} color={'twitter'} className='Link'>
						  				Realtor Portal
						  			</Button></Divider>
				  				</Link>
					  		</div>
		  				</Route>
	  				</Switch>
  				</React.Fragment>
  			}
	  	</React.Fragment>
	);
}