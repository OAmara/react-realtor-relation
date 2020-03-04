import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Header } from  'semantic-ui-react'

const links = { width: 400, height: 350 }
const realtorListStyle = {width: 400, height: 350, backgroundImage: `url(${'https://i.imgur.com/obYScyd.png'})`, backgroundSize: 'cover', opacity: '0.9'}
const profileStyle = {width: 400, height: 350, backgroundImage: `url(${'https://i.imgur.com/8wOo25s.png'})`, backgroundSize: 'cover',}
const realtorStyle = {width: 400, height: 350, backgroundImage: `url(${'https://i.imgur.com/8xG8w0F.png'})`, backgroundSize: 'cover',}
const newSearchStyle = {width: 400, height: 350, backgroundImage: `url(${'https://i.imgur.com/3IIQwnO.png'})`, backgroundSize: 'cover', opacity: '0.9'}

export default function ClientContainer(props) {

	/* -- 

	NewSearchFormModal --> Needs to be accessed anywhere... 
		//what else is currently accessible anywhere?? ClientContianer is!!


	EditSearchFormModal --> accessible in SearchList

	// need calls to: Create, Edit, Delete, List

	SearchList --> Where button is to open EditSearchFormModal, deleteSearch, new search

	searchContainer holds: new



	 -- */

	return(
		<React.Fragment>
			<Header as='h1' inverted color='blue' textAlign='center'>Welcome {props.loggedInUser.firstName}</Header>
			<Link to='/clients'>
				<Segment raised circular color='blue' style={profileStyle}>
					<Header as='h1' dividing block  color='blue'><Header as='h3' >{props.loggedInUser.firstName}'s</Header> Profile</Header>
				</Segment>
			</Link>
			<Link to='/clients/realtor-list'>
				<Segment raised circular /*size='large'*/ dividing color='orange' style={realtorListStyle} >
						<Header as='h1' block inverted color='orange'><Header as='h3' disabled>{props.loggedInUser.firstName}'s</Header> Realtor List</Header>
				</Segment>
			</Link>
			<Link to='/clients/my-realtor'>
				<Segment raised circular color='red' dividing style={realtorStyle}>
					<Header as='h1' block inverted color='red'><Header as='h3' disabled>{props.loggedInUser.firstName}'s</Header> Realtor</Header>
				</Segment>
			</Link>
			<Link>
				<Segment raised circular color='green' style={links}>
					<Header as='h1' block color='green'><Header as='h3' disabled>{props.loggedInUser.firstName}'s</Header> Search List</Header>
				</Segment>
			</Link>
			<Link onClick={() => props.openSearchModals('open new modal')}>
				<Segment raised circular color='teal' style={newSearchStyle}>
					<Header block as='h1' inverted color='teal'>Create New Search</Header>
				</Segment>
			</Link>
			{/* Create Component here to view all realtor's messaging with and to change message options(like read/sent...booleans in models)*/}
			<Link to='/clients'>
				<Segment raised circular color='violet' style={links}>
					<Header as='h1' disabled block color='violet'>Messaging Options</Header>
				</Segment>
			</Link>
		</React.Fragment>
	)
}