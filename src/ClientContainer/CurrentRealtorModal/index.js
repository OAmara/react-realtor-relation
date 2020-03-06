import React from 'react'
import { Modal, Header, Button, Segment, Label, Icon } from  'semantic-ui-react'

export default function CurrentRealtorModal(props) {

	// TURN THIS INTO A MODAL TO VIEW ANYWHERE

	return(
		<React.Fragment>
			<Modal open={props.toggleMyRealtorModal} closeIcon={true} onClose={() => props.closeSearchModals('close realtor modal')} >
				
				<Header as='h3' textAlign='center'>Hired Realtor:<Header as='h2' textAlign='center' color='violet'>here</Header></Header>
				<Modal.Content>
					<Segment raised color='violet'>
					{
						// first condition is used for testing since cannot use .length if undefined...
						(props.loggedInUser.currentRealtor && props.loggedInUser.currentRealtor.length > 0)
						?
							<Label as='a' color='blue' ribbon='left' onClick={null}>
							<Button animated='fade' color={'blue'} size='large' floated='right'>
								<Button.Content visible>My Realtor</Button.Content>
								<Button.Content hidden>
									<Icon name='handshake'/>
								</Button.Content>
							</Button>
							</Label>
						:
						null
						// MAKE THIS TO TERMINATE REALTOR.-> JUST CONNECT PROPS FOR ROUTE IN APP.JS
						// <Label as='a' color='red' ribbon='right' onClick={() => contractRealtor(_id)}>
						// <Button  animated='fade' color={'red'} size='tiny' floated='right'>
						// 	<Button.Content visible>Hire Realtor</Button.Content>
						// 	<Button.Content hidden>
						// 		<Icon name='handshake'/>
						// 	</Button.Content>
						// </Button>
						// </Label>
					}
					<h2>firstName lastName</h2>
					<Segment>
					{// insert logic to not be able to create a message thread with realtor if already created, or maybe when clicked it will open modal containing chat??
						(props.loggedInUser)
						?
						<Button onClick={null} animated circular inverted color='violet' floated='right' size='huge'>
							<Button.Content visible><Icon name='mail'/></Button.Content>
							<Button.Content hidden>Say Hi!</Button.Content>
						</Button>
						:
						<Button>Bye</Button>
					}
					<h4>Contact Info:</h4>
					<p><Icon name='at'/>: email, <Icon name='phone'/>: phoneNumber</p>
					<p><Icon name='marker'/>Works at companyName on street1 in city, state zipcode</p>
					<p><Icon name='linkify'/>: <span className='underline'>websiteURL</span> Find out more about Realtor by visiting their site or by calling companyName <small><Icon name='phone'/></small><span className='underline'>companyPhone</span></p>

					</Segment>
					</Segment>
					<Modal.Actions>
						<Button circular floated='right' inverted color={'google plus'} size={'medium'} type="Submit">Close</Button>
					</Modal.Actions>
				</Modal.Content>
			</Modal>

		</React.Fragment>
	)
}



