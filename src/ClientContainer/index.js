import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Header, Grid } from  'semantic-ui-react'

const links = { width: 450, height: 350 }
const profileStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/dMlvXWD.png'})`, backgroundSize: 'cover',}
const realtorListStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/obYScyd.png'})`, backgroundSize: 'cover', opacity: '0.9'}
const realtorStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/8xG8w0F.png'})`, backgroundSize: 'cover',}
const newSearchStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/3IIQwnO.png'})`, backgroundSize: 'cover', opacity: '0.9'}
const searchListStyle = {width: 450, height: 350, backgroundImage: `url(${'https://i.imgur.com/Fg7ZXna.png'})`, backgroundSize: 'cover', opacity: '0.9'}

export default function ClientContainer(props) {

	/* -- 

	EditSearchFormModal --> accessible in SearchList

	// need calls to: Edit, Delete

	SearchList --> Where button is to open EditSearchFormModal, deleteSearch

	 -- */

	return(
		<React.Fragment>
			<Header as='h1' color='blue' dividing textAlign='center'>Welcome {props.loggedInUser.firstName}</Header>
			<Grid columns={3}>
				<Grid.Column>
					<Link to='/clients'>
						<Segment raised circular color='blue' style={profileStyle}>
							<Header as='h1' dividing block inverted color='blue'><Header.Subheader>{props.loggedInUser.firstName}'s</Header.Subheader>Profile</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to='/clients/realtor-list'>
						<Segment raised circular /*size='large'*/ color='orange' style={realtorListStyle} >
								<Header as='h1' block dividing inverted color='orange'><Header.Subheader>{props.loggedInUser.firstName}'s</Header.Subheader>Realtor List</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link to='/clients/my-realtor'>
						<Segment raised circular color='violet' style={realtorStyle}>
							<Header as='h1' block dividing inverted color='violet'><Header.Subheader>{props.loggedInUser.firstName}'s</Header.Subheader>Realtor</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link>
						<Segment raised circular color='green' style={searchListStyle}>
							<Header as='h1' dividing block inverted color='green'><Header.Subheader>{props.loggedInUser.firstName}'s</Header.Subheader>Search List</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					<Link onClick={() => props.openSearchModals('open new modal')}>
						<Segment raised circular color='teal' style={newSearchStyle}>
							<Header as='h1' dividing block inverted color='teal'>Create New Search</Header>
						</Segment>
					</Link>
				</Grid.Column>
				<Grid.Column>
					{/* Create Component here to view all realtor's messaging with and to change message options(like read/sent...booleans in models)*/}
					<Link to='/clients'>
						<Segment raised circular disabled color='violet' style={links}>
							<Header as='h1' dividing block inverted color='violet'>Messaging Options</Header>
						</Segment>
					</Link>
				</Grid.Column>
			</Grid>
		</React.Fragment>
	)
}