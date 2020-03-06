import React from 'react'
import { Modal, Header, Button, Segment, Label, Icon } from  'semantic-ui-react'

export default function CurrentRealtorModal(props) {

	return(
		<React.Fragment>
			<Modal open={props.toggleMyRealtorModal} closeIcon={true} onClose={() => props.closeSearchModals('close realtor modal')} >
				
				<Header as='h3' textAlign='center'>Contracted with:<Header as='h2' textAlign='center' color='violet'>{(props.loggedInUser.currentRealtor && props.loggedInUser.currentRealtor.length > 0)?props.loggedInUser.currentRealtor[0].firstName + ' ' + props.loggedInUser.currentRealtor[0].lastName:'Your Future Realtor Here'}</Header></Header>
				<Modal.Content>
					<Segment raised color='violet'>
					{
						// first condition is used for testing since cannot use .length if undefined...
						(props.loggedInUser.currentRealtor && props.loggedInUser.currentRealtor.length > 0)
						?
							<React.Fragment>
								<Label as='a' color='blue' ribbon='left' onClick={null}>
								<Button animated='fade' color={'blue'} size='large' floated='right'>
									<Button.Content visible>My Realtor</Button.Content>
									<Button.Content hidden>
										<Icon name='secret user'/>
									</Button.Content>
								</Button>
								</Label>
								<h2>{props.loggedInUser.currentRealtor[0].firstName} {props.loggedInUser.currentRealtor[0].firstName}</h2>
								<Segment>
									<Button onClick={null} animated circular inverted color='violet' floated='right' size='huge'>
										<Button.Content visible><Icon name='mail'/></Button.Content>
										<Button.Content hidden>Say Hi!</Button.Content>
									</Button>
								<h4>Contact Info:</h4>
								<p><Icon name='at'/>: {props.loggedInUser.currentRealtor[0].email}, <Icon name='phone'/>: {props.loggedInUser.currentRealtor[0].phoneNumber}</p>
								<p><Icon name='marker'/>Works at {props.loggedInUser.currentRealtor[0].companyName} on street1} in {props.loggedInUser.currentRealtor[0].city}, {props.loggedInUser.currentRealtor[0].state} {props.loggedInUser.currentRealtor[0].zipcode}</p>
								<p><Icon name='linkify'/>: <span className='underline'>{props.loggedInUser.currentRealtor[0].websiteURL}</span> Find out more about Realtor by visiting their site or by calling {props.loggedInUser.currentRealtor[0].companyName} <small><Icon name='phone'/></small><span className='underline'>{props.loggedInUser.currentRealtor[0].companyPhone}</span></p>
								</Segment>
							</React.Fragment>
						:
						// MAKE THIS TO TERMINATE REALTOR.-> JUST CONNECT PROPS FOR ROUTE IN APP.JS
						// <Label as='a' color='red' ribbon='right' onClick={() => contractRealtor(_id)}>
						// <Button  animated='fade' color={'red'} size='tiny' floated='right'>
						// 	<Button.Content visible>Hire Realtor</Button.Content>
						// 	<Button.Content hidden>
						// 		<Icon name='handshake'/>
						// 	</Button.Content>
						// </Button>
						// </Label>
						<React.Fragment>
							<Label as='a' color='red' ribbon='right' onClick={null}>
								<Button  animated='fade' color={'red'} size='tiny' floated='right'>
									<Button.Content visible>Hire Realtor</Button.Content>
									<Button.Content hidden>
										<Icon name='handshake'/>
									</Button.Content>
								</Button>
							</Label>
							<Header as='h2' block color='red'>Visit Realtor List to Chat and Hire a Realtor That Looks Like This.</Header>
							<Segment>
								<Button onClick={null} animated circular inverted color='violet' floated='right' size='huge'>
									<Button.Content visible><Icon name='mail'/></Button.Content>
									<Button.Content hidden>Say Hi!</Button.Content>
								</Button>
							<h4>Contact Info:</h4>
							<p><Icon name='at'/>: their email, <Icon name='phone'/>: their phone number</p>
							<p><Icon name='marker'/>Works at companyName on street1 in city, state zipcode</p>
							<p><Icon name='linkify'/>: <span className='underline'>website</span> Find out more about Realtor by visiting their site or by calling their company <small><Icon name='phone'/></small><span className='underline'></span></p>

							</Segment>
					</React.Fragment>
					}
					</Segment>
					{/*<Modal.Actions>
						<Button circular floated='right' inverted color={'google plus'} size={'medium'} type="Submit">Close</Button>
					</Modal.Actions>*/}
				</Modal.Content>
			</Modal>

		</React.Fragment>
	)
}



