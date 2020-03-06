import React from 'react'
import { Header, Button, Segment, Icon, Grid } from  'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ClientSearchList({activate, defaultActivate, realtorClientSearches}) {

	if(activate === 'redirect realtors/client-searches') {
		defaultActivate()
	}

	return(
		<React.Fragment>
 			<Header as='h2' textAlign='center' dividing color='black'>{(realtorClientSearches.length > 0)?realtorClientSearches[0].client.firstName + ' ' + realtorClientSearches[0].client.lastName + `'s`:null} Searches</Header>
 			{
 				(realtorClientSearches.length > 0)
 				?
 					<React.Fragment>
 					<Grid columns={2}>
 					{
 						realtorClientSearches.map(({_id, name, zipcode, sqrft, upperPrice, lowerPrice}) => (
 							<Grid.Column key={_id}>
 								<Segment raised>
 									<Segment stacked color='green'>
 										<Button onClick={null} animated='fade' inverted circular color={'twitter'} size='tiny' floated='right'>
 											<Button.Content visible>Leave a Note</Button.Content>
 											<Button.Content hidden>
 												<Icon name='list'/>
 											</Button.Content>
 										</Button>
 										<Header as='h2'>{name}</Header>
 										<Segment>
 										{/* insert logic for editSeachModal to open with modal logic in App.js and by using a function to generate search based on {_id} here*/}
 										<p><Icon name='pin'/>Zipcode:{zipcode}</p>
 										<p><Icon name='expand'/>Square Feet:{sqrft}</p>
 										<p><Icon name='money bill alternate outline'/>Price Range:${lowerPrice} - ${upperPrice}</p>
 										</Segment>
 									</Segment>
 								</Segment>
 							</Grid.Column>
 						))
 					}
 					</Grid>
 					</React.Fragment>
 				:
 				<Header as='h2' color='green' textAlign='center'>Click on Client's Search in Client List to View Their Search</Header>
 			}
 			<Link to='/realtors/client-list'><Button color='green'>View a Different Client's Search</Button></Link>
		</React.Fragment>
	)
}
