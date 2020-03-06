import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Header, Grid } from  'semantic-ui-react'

	const profileStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/dMlvXWD.png'})`, backgroundSize: 'cover',}
	const clientListStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/obYScyd.png'})`, backgroundSize: 'cover', opacity: '0.9'}
	const clientSearchStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/Fg7ZXna.png'})`, backgroundSize: 'cover', opacity: '0.9'}
	const messageOptionsStyle = { width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/feNs9DJ.png'})`, backgroundSize: 'cover', opacity: '0.9'}

export default function RealtorContainer(props) {


	return(
		<React.Fragment>
			<Header as='h1' color='violet' dividing textAlign='center'>Welcome {props.loggedInUser.firstName}</Header>
			<Grid columns={2}>
				<Grid.Column>
					<Link to='/realtors/home'>
						<Segment raised circular color='violet' style={profileStyle}>
							<Header as='h1' dividing block inverted color='violet'><Header.Subheader>{props.loggedInUser.firstName}'s</Header.Subheader>Profile</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to='/realtors/client-list'>
						<Segment raised circular color='orange' style={clientListStyle}>
							<Header as='h1' block dividing inverted color='orange'><Header.Subheader>{props.loggedInUser.firstName}</Header.Subheader>Clients</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to='/realtors/client-searches'>
						<Segment raised circular color='green' style={clientSearchStyle}>
							<Header as='h1' block dividing inverted color='green'>Client's Search</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to='/realtors/home'>
						<Segment raised circular disabled color='blue' style={messageOptionsStyle}>
						{/* Create Component here to view all realtor's messaging with and to change message options(like read/sent...booleans in models)*/}
							<Header as='h1' dividing block inverted color='blue'>Messaging Options</Header>
						</Segment>
					</Link>
				</Grid.Column>
			</Grid>
		</React.Fragment>
	)
}
