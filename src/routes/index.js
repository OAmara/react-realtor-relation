import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Button, Divider, Sticky, Image, Icon, Menu } from 'semantic-ui-react'

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
// 		</Switch>

		// Already in Router from App.js render
		<React.Fragment>
			{
				/* Client Logged In */
				(props.isClient === true) 
				? 
				<React.Fragment>
					{/* Automatically Redirects to /clients when isClient===true */}
					<Redirect to='/clients'/>
					<Sticky>
						<Menu>
							<Menu.Item>
								<Link to='/clients'>
									<Button animated='fade'>
										<Button.Content visible>{props.loggedInUser.firstName}'s Home</Button.Content>
										<Button.Content hidden>{props.loggedInUser.firstName}'s <Icon name='home' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to='/clients/realtor-list'>
									<Button animated='fade'>
										<Button.Content visible>Realtor List</Button.Content>
										<Button.Content hidden>Realtor <Icon name='list' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item position='right'>
								<Button animated onClick={props.logout}>
									<Button.Content visible>Log-<Icon name='sign-out'/></Button.Content>
									<Button.Content hidden>Out-<Icon name='sign-out'/></Button.Content>
								</Button>
							</Menu.Item>
							<Image className='Realtor-Logo' src={props.logo} avatar floated='right' size='tiny'/>
						</Menu>
					</Sticky>

	  				<Switch>
		  				<Route path='/clients/realtor-list'>
	  						<RealtorList 
	  							loggedInUser={props.loggedInUser}
	  							updateLoggedInUser={props.updateLoggedInUser}
	  							terminateContract={props.terminateContract}
	  							chatList={props.chatList}
	  							chatThreads={props.chatThreads}
	  						/>
		  				</Route>

		  				<Route path='/clients'>
	  						<ClientContainer 
								loggedInUser={props.loggedInUser}
								logo={props.logo}
								isClient={props.isClient}
								chatThreads={props.chatThreads}
							/>
						</Route>
		  			</Switch>
		  			{/* ChatContainer Exists In All Components listed in switch above */}
					<ChatContainer
						chatList={props.chatList}
						chatThreads={props.chatThreads}
						isClient={props.isClient}
						createMessage={props.createMessage}
					/>
	  			</React.Fragment>
  				:

  				/* Realtor Logged In */
  				(props.isClient === false)
  				?
  				<React.Fragment>
  					{/* Automatically Redirects to /clients when isClient===true */}
					<Redirect to='/realtors/home'/>
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
				  					<Button compact fluid circular onClick={props.resetForms} animated='fade' color={'twitter'} >
				  						<Button.Content visible>Client Portal</Button.Content>
				  						<Button.Content hidden><Icon name='users' /></Button.Content>
				  					</Button>
				  				</Divider>
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
						  			<Divider fitted horizontal>Realtor's Login Here:
							  			<Button compact fluid onClick={props.resetForms} color={'twitter'} animated='fade' className='Link'>
							  				<Button.Content visible>Realtor Portal</Button.Content>
							  				<Button.Content hidden><Icon name='briefcase' /></Button.Content>
							  			</Button>
						  			</Divider>
				  				</Link>
					  		</div>
		  				</Route>
	  				</Switch>
  				</React.Fragment>
  			}
	  	</React.Fragment>
	);
}