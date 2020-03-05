import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Header } from  'semantic-ui-react'

export default function RealtorContainer(props) {

	const links = { width: 250, height: 200 }

	return(
		<React.Fragment>
			<Header as='h1' color='violet' textAlign='center'>Welcome {props.loggedInUser.firstName}</Header>
			<Link>
				<Segment circular style={links}>
					<h1>{props.loggedInUser.firstName}'s Profile</h1>
				</Segment>
			</Link>
			<Link to='/realtor/client-list'>
				<Segment circular size='large' style={links} >
						<h1>(works)Client List</h1>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h1>Client's Searches!</h1>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h2>Navigate Area Here</h2>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h3>Navigate Here</h3>
				</Segment>
			</Link>
		</React.Fragment>
	)
}