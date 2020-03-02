import React, { useEffect, useState } from 'react'
import { Segment, Button, Form, Icon } from 'semantic-ui-react'

export default function RealtorList(props) {

	const [realtors, setRealtors] = useState({})

	const getRealtors = async () => {
		try{
			const realtorsResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/realtors/list', {

			})
			console.log('realtorsResponse: ', realtorsResponse);
			const realtorsJson = await realtorsResponse.json()
			console.log('\nrealtorsJson: ', realtorsJson);
			if(realtorsResponse.status === 200) {
				setRealtors(realtorsJson.data)
			}

		} catch(err) {
			console.error(err)
		}

	}

	const contractRealtor = async (_id) => {
		console.log('Realtor`s _id: ', _id);
		//^^ Use this to hit contract realtor route in API!!
	}

	useEffect(
		() => {
			getRealtors()	
		},
		// empty array tells useEffect to only execute on mount. Adding item/state specifies which one to update on, even after mount. i.e.[realtors]
		[]
	)

	console.log(realtors);
	return(
		<React.Fragment>
			<h2>Realtors In Your Area</h2>
			{
				(realtors.length>0)
				?
				realtors.map(({_id, firstName, lastName, email, phoneNumber, companyName, street1, city, state, zipcode, websiteURL, companyPhone}) => (
					<Segment raised key={_id}>
						<Segment color='orange'>
							{
								// (props.loggedInUser.currentRealtor[0].email === email)
								// ?
								// <h1>Your Realtor</h1>
								// :
								<Button onClick={() => contractRealtor(_id)} animated='fade' inverted color={'youtube'} size='tiny' floated='right'>
									<Button.Content visible>Hire Realtor</Button.Content>
									<Button.Content hidden>
										<Icon name='home'/>
									</Button.Content>
								</Button>
							}
							<h2>{firstName} {lastName}</h2>
							<h4>Contact Info:</h4>
							<p>Email: {email}, Phone: {phoneNumber}</p>
							<p>Part of {companyName}; located on {street1} in {city}, {state} {zipcode}</p>
							<p>Find out more @ {websiteURL} or contact {companyName} at {companyPhone}</p>
						</Segment>
					</Segment>
				))
				:
				<p>Realtors Are Listed Here</p>
			}
		
		</React.Fragment>
	)
}