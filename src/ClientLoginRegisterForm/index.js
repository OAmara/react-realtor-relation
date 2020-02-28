import React, { Component } from 'react'

export default class ClientLoginRegisterForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			nameToBeLoggedInUser: 'Omar',
			lastNameToBeLoggedInUser: 'Amara',
			loggedInUser: {},
			
		}
	}

	componentDidMount() {
		document.title = this.state.nameToBeLoggedInUser + ' ' + this.state.lastNameToBeLoggedInUser
	}

	render() {
		return(
			<React.Fragment>
				<h1>Form Rendering</h1>
			</React.Fragment>
		)
	}
}