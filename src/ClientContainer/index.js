import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Header } from  'semantic-ui-react'

const links = { width: 250, height: 200 }

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
				<Segment circular style={links}>
					<h1>{props.loggedInUser.firstName}'s Profile</h1>
				</Segment>
			</Link>
			<Link to='/clients/realtor-list'>
				<Segment circular size='large' style={links} >
						<h1>{props.loggedInUser.firstName}'s Realtor List</h1>
				</Segment>
			</Link>
			<Link to='/clients/my-realtor'>
				<Segment circular style={links}>
					<h2>{props.loggedInUser.firstName}'s Realtor</h2>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h1>{props.loggedInUser.firstName}'s Search List</h1>
				</Segment>
			</Link>
			<Link to='/clients/searches/index'>
				<Segment circular style={links}>
				{
					//ALSO A BUTTON THAT WILL OPEN NewSearchFormModal
					<h2>Create New Search</h2>
				}
				</Segment>
			</Link>
		</React.Fragment>
	)
}