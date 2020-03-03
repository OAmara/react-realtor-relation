import React, { useEffect, useState } from 'react'
import { Segment, Button, Icon } from 'semantic-ui-react'

export default function ClientList(props) {


	return(
		<React.Fragment>
			<Segment>
				<h1>List of Clients go here!</h1>
				<Button><Icon name='user'/>Pointless Button</Button>
			</Segment>
		</React.Fragment>
	)

}