import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom';

import RealtorList from './RealtorList'

export default function ClientContainer(props) {



	return(
		<React.Fragment>
			<Router>
				<Link to='/clients/'>
					<p>{props.loggedInUser.firstName} Home</p>
				</Link>
				<Link to='/clients/find-realtors'>
					<p>Find Realtor</p>
				</Link>

				<Switch>
	  				<Route path='/clients/find-realtors'>
	  					<RealtorList />
	  				</Route>

	  				<Route path='/clients-home'>
	  				</Route>
  				</Switch>
  			</Router>

			<h2>Go Here!</h2>
			<h2>Also Go Here!</h2>
			<p>Can also go here!</p>
		</React.Fragment>
	)
}