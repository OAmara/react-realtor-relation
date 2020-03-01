import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import { Segment } from  'semantic-ui-react'

import RealtorList from './RealtorList'

export default function ClientContainer(props) {


	return(
		<React.Fragment>
			<h2>Go Here!</h2>
			<h2>Also Go Here!</h2>
			<p>Can also go here!</p>
		</React.Fragment>
	)
}