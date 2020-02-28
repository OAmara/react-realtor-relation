import React from 'react'

export default function ClientLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<h2>Hello {props.myName.firstName + " " + props.myName.lastName}, let's find you a realtor!</h2>
		</React.Fragment>
	)
}