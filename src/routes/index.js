import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Button, Divider, Sticky, Image, Icon, Menu, Header } from 'semantic-ui-react'

import ClientLoginRegisterForm from '../ClientLoginRegisterForm'
import RealtorLoginRegisterForm from '../RealtorLoginRegisterForm'
import ClientContainer from '../ClientContainer'
import RealtorList from '../ClientContainer/RealtorList'
import ChatContainer from '../ChatContainer'
import RealtorContainer from '../RealtorContainer'
import ClientList from '../RealtorContainer/ClientList'
import CurrentRealtorModal from '../ClientContainer/CurrentRealtorModal'
import NewSearchFormModal from '../ClientContainer/NewSearchFormModal'
import SearchList from '../ClientContainer/SearchList'

export default function Routes(props) {
	return(
		// Already in Router from App.js render
		<React.Fragment>
			{
				/* Client Logged In */
				(props.isClient === true) 
				? 
				<React.Fragment>
					{/* Automatically Redirects to /clients when isClient===true */}
					<Redirect to='/clients'/>
					{// condition to redirect to Search List after search is created
						(props.activate === 'redirect search index')
						?
						<Redirect to='/clients/searches/index'/>
						:
						null
					}
					<Sticky>
						<Menu>
							<Menu.Item>
								<Link to='/clients'>
									<Button animated='fade'>
										<Button.Content visible>{props.loggedInUser.firstName}'s Home</Button.Content>
										<Button.Content hidden>{props.loggedInUser.firstName}'s <Icon color='blue' name='home' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to='/clients/realtor-list'>
									<Button animated='fade'>
										<Button.Content visible>Realtor List</Button.Content>
										<Button.Content hidden>Realtor <Icon color='orange' name='list' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to='/clients/my-realtor'>
									<Button animated='fade'>
										<Button.Content visible>My Realtor</Button.Content>
										<Button.Content hidden>{props.loggedInUser.firstName}'s <Icon color='red' name='handshake outline' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item>
								{/* Opens SearchList */}
								<Link to='/clients/searches/index'>
									<Button animated='fade'>
										<Button.Content visible>Search List</Button.Content>
										<Button.Content hidden>Search <Icon color='green' name='list' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item>
								{/* Opens SearchList */}
								<Link >
									{/*Open NewSearchFormModal*/}
									<Button onClick={() => props.openSearchModals('open new modal')} animated='fade'>
										<Button.Content visible>New Search</Button.Content>
										<Button.Content hidden>New <Icon color='teal' name='home' /></Button.Content>
									</Button>
								</Link>
							</Menu.Item>
							<Menu.Item header>
								<Link >

										<Icon name='settings' />Options

								</Link>
							</Menu.Item>
							<Menu.Item position='right'>
								<Button animated onClick={props.logout}>
									<Button.Content visible>Log-<Icon color='black' name='sign-out'/></Button.Content>
									<Button.Content hidden>Out-<Icon color='red' name='sign-out'/></Button.Content>
								</Button>
							</Menu.Item>
							<Image className='Realtor-Logo' src={props.logo} avatar floated='right' size='tiny'/>
						</Menu>
					</Sticky>

	  				<Switch>
	  					<Route path='/clients/searches/index'>
	  						<SearchList

	  						/>
	  					</Route>

	  					<Route path='/clients/my-realtor'>
	  						<CurrentRealtorModal

	  						/>
	  					</Route>

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
		  			{/* ChatContainer... Exists In All Components listed in switch above */}
		  			<NewSearchFormModal
		  				toggleNewSearchModal={props.toggleNewSearchModal}
		  				toggleOpenSearchModals={props.toggleOpenSearchModals}
		  				openSearchModals={props.openSearchModals}
		  				closeSearchModals={props.closeSearchModals}
		  				createClientSearch={props.createClientSearch}
		  			/>
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
					<Sticky>
						<Menu>
							<Menu.Item>
			  					<Link to='/realtors/home'>
			  						<Button animated='fade'>
			  							<Button.Content visible>{props.loggedInUser.firstName}'s Home</Button.Content>
			  							<Button.Content hidden>{props.loggedInUser.firstName}'s <Icon color='blue' name='home' /></Button.Content>
			  						</Button>
			  					</Link>
			  				</Menu.Item>
			  				<Menu.Item>
			  					<Link to='/realtors/client-list'>
			  						<Button animated='fade'>
			  							<Button.Content visible>Client List</Button.Content>
			  							<Button.Content hidden>Client <Icon color='orange' name='list' /></Button.Content>
			  						</Button>
			  					</Link>
			  				</Menu.Item>
			  				<Menu.Item position='right'>
			  					<Button animated onClick={props.logout}>
			  						<Button.Content visible>Log-<Icon color='black' name='sign-out'/></Button.Content>
			  						<Button.Content hidden>Out-<Icon color='red' name='sign-out'/></Button.Content>
			  					</Button>
			  				</Menu.Item>
			  				<Image className='Realtor-Logo' src={props.realtorLogo} floated='right' size='tiny'/>
			  			</Menu>
			  		</Sticky>

  					<Switch>
  						<Route path='/realtors/client-list'>
  						 	<ClientList 
	  							loggedInUser={props.loggedInUser}
	  							updateLoggedInUser={props.updateLoggedInUser}
	  							terminateContract={props.terminateContract}
	  							chatList={props.chatList}
	  							chatThreads={props.chatThreads}
	  							activate={props.activate}
	  							defaultActivate={props.defaultActivate}
	  						/>
	  					</Route>

		  				<Route path='/realtors/home'>
		  					<RealtorContainer
			  					isClient={props.isClient}
			  					loggedInUser={props.loggedInUser}
			  					logo={props.realtorLogo}
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