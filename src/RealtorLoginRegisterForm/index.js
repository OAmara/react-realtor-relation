import React from 'react'

export default function RealtorLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<h2>Welcome {props.myName.firstName + " " + props.myName.lastName}, are you a realtor?</h2>

		</React.Fragment>
	)
}
