import React, { useEffect, useState } from 'react'
import { Segment, Button, Icon } from 'semantic-ui-react'

export default function ClientList(props) {

	// state for realtor's clients list
	const [clients, setClients] = useState({})


	const getClients = async () => {
		try{
			const foundClientsResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/realtors/client-list', {
				'credentials': 'include'
			})

			console.log(foundClientsResponse);
			const foundClientsJson = await foundClientsResponse.json()
			console.log('foundClients in getClient func: ', foundClientsJson);

		} catch(err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getClients()
	}, [])

	return(
		<React.Fragment>
			<Segment>
				<h1>List of Clients go here!</h1>
				<Button><Icon name='user'/>Pointless Button</Button>
			</Segment>
		</React.Fragment>
	)

}