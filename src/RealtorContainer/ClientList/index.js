import React, { useEffect, useState } from 'react'
import { Segment, Button, Icon, Header } from 'semantic-ui-react'

export default function ClientList(props) {

	// state for realtor's clients list
	const [clients, setClients] = useState({})


	const getClients = async () => {
		try{
			const foundClientsResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/realtors/client-list', {
				'credentials': 'include'
			})
			const foundClientsJson = await foundClientsResponse.json()
			console.log(foundClientsJson.message);

			if(foundClientsResponse.status === 200) {
				setClients(foundClientsJson.data)
			}
		} catch(err) {
			console.error(err)
		}
	}
	
	// Prop. for parent component to activate function. 
	// Usage:
		// getClients()
	if(props.activate === 'refresh list') {
		getClients()
		props.defaultActivate()
	}

	useEffect(() => {
		getClients()
	}, [])

	return(
		<React.Fragment>
			<Header as='h2' textAlign='center'>{props.loggedInUser.firstName} {props.loggedInUser.lastName}'s Clients</Header>
			{
				(clients.length > 0)
				?
					clients.map(({_id, firstName, lastName, email, zipcode, currentRealtor}) => (
						<Segment raised key={_id}>
							<Segment stacked color='orange'>
								<Button onClick={() => props.terminateContract(_id)} animated='fade' inverted color={'youtube'} size='tiny' floated='right'>
									<Button.Content visible>Terminate Client</Button.Content>
									<Button.Content hidden>
										<Icon name='handshake'/>
									</Button.Content>
								</Button>
								<h2>{firstName} {lastName}</h2>
								<Segment>
								{// insert logic to not be able to create a message thread with realtor if already created, or maybe when clicked it will open modal containing chat??
									(props.loggedInUser)
									?
									<Button onClick={null} animated circular inverted color='orange' floated='right' size='huge'>
										<Button.Content visible><Icon name='mail'/></Button.Content>
										<Button.Content hidden>Say Hi!</Button.Content>
									</Button>
									:
									<Button>Bye</Button>
								}
								<h4>Contact Info:</h4>
								<p><Icon name='mail'/>: {email}, <Icon name='phone'/>:(ask client for additional contact info)</p>
								</Segment>
							</Segment>
						</Segment>
					))
				:
				<Header as='h3' textAlign='center'>Your Clients Will Be Listed Here</Header>
			}
		</React.Fragment>
	)

}