import React, { useEffect, useState } from 'react'
import { Segment, Button, Icon, Header, Grid } from 'semantic-ui-react'

export default function RealtorList(props) {

	// State for Realtor List from getRealtors() fetch
	const [realtors, setRealtors] = useState({})

	/* Randome !Necessities */
	// Realtor Greeting for hire button!
	const [greetRealtor, setGreetRealtor] = useState('My Realtor')
	// not necessary, but nice
	function sayHi() {
		(greetRealtor === 'My Realtor')?setGreetRealtor('Hello!'):setGreetRealtor('My Realtor')
	}

	// Retrieves realtor index, then set realtors state.
	const getRealtors = async () => {
		try{
			const realtorsResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/realtors/list')

			const realtorsJson = await realtorsResponse.json()
			console.log('\nrealtorsJson: ', realtorsJson);
			if(realtorsResponse.status === 200) {
				setRealtors(realtorsJson.data)
			}
		} catch(err) {
			console.error(err)
		}
	}

	// Retrieves: Contract realtor/ client, changes state of loggedInUser in App.js
	const contractRealtor = async (_id) => {
		try{
			const contractResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/clients/contract/' + _id, {
				credentials: 'include',
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
			})
			const contractJson = await contractResponse.json()

			// change loggedInUser in App.js without having to query or log back in.
			if(contractResponse.status/* === 201*/) {
				let updateUser = props.loggedInUser
				updateUser.currentRealtor = []
				updateUser.currentRealtor.push(contractJson.data)
				console.log(updateUser);
				props.updateLoggedInUser(updateUser)
			}
			console.log(props.loggedInUser);
			getRealtors()
		} catch(err) {
			console.error(err)
		}
	}

	const createChatThread = async (realtorId) => {
		try {
			const chatResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/chats/' + realtorId, {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
			})
			console.log(chatResponse);
			const chatJson = await chatResponse.json()
			console.log(chatJson);

			props.chatList()
		} catch(err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getRealtors()	
	// empty array below tells useEffect to only execute on mount. Adding item/state specifies which one to update on, even after mount. i.e.[realtors]
	},[])

	console.log(realtors);
	return(
		<React.Fragment>
			<Header as='h3' block textAlign='center'>Realtors In Your Area</Header>
			<Grid columns={2} >
				{
					(realtors.length>0)
					?
						realtors.map(({_id, firstName, lastName, email, phoneNumber, companyName, street1, city, state, zipcode, websiteURL, companyPhone}) => (
							<Grid.Column>
								<Segment raised key={_id}>
									<Segment raised color='orange'>
										{
											// first condition is used for testing since cannot use .length if undefined...
											(props.loggedInUser.currentRealtor && props.loggedInUser.currentRealtor.length > 0 && props.loggedInUser.currentRealtor[0].email === email)
											?
											<Button onClick={sayHi} animated='vertical' inverted color={'blue'} size='large' floated='right'>
												<Button.Content visible><Icon name='home'/></Button.Content>
												<Button.Content hidden>
													{greetRealtor}
												</Button.Content>
											</Button>
											:
											<Button onClick={() => contractRealtor(_id)} animated='fade' inverted color={'youtube'} size='tiny' floated='right'>
												<Button.Content visible>Hire Realtor</Button.Content>
												<Button.Content hidden>
													<Icon name='handshake'/>
												</Button.Content>
											</Button>
										}
										<h2>{firstName} {lastName}</h2>
										<Segment>
										{// insert logic to not be able to create a message thread with realtor if already created, or maybe when clicked it will open modal containing chat??
											(props.loggedInUser)
											?
											<Button onClick={() => createChatThread(_id)} animated circular inverted color='violet' floated='right' size='huge'>
												<Button.Content visible><Icon name='mail'/></Button.Content>
												<Button.Content hidden>Say Hi!</Button.Content>
											</Button>
											:
											<Button>Bye</Button>
										}
										<h4>Contact Info:</h4>
										<p><Icon name='at'/>: {email}, <Icon name='phone'/>: {phoneNumber}</p>
										<p><Icon name='marker'/>Works at {companyName} on {street1} in {city}, {state} {zipcode}</p>
										<p><Icon name='linkify'/>: <span className='underline'>{websiteURL}</span> Find out more about Realtor by visiting their site or by calling {companyName} <small><Icon name='phone'/></small><span className='underline'>{companyPhone}</span></p>
										</Segment>
									</Segment>
								</Segment>
							</Grid.Column>
						))
					:
					<Header as='h2' textAlign='center'>Realtors Are Listed Here</Header>
				}
			</Grid>
		</React.Fragment>
	)
}