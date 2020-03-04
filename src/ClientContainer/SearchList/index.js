import React, { useEffect } from 'react'
import { Header, Button } from  'semantic-ui-react'

export default function SearchList() {


	// fetches searches on component mount, update...
	useEffect(() => {
		// insert function to retrieve client's searches!
	},[])

	return(
		<React.Fragment>
			<Header as='h2' textAlign='center'>SearchList to generate search index fetch for client id...</Header>
			<Button>Create Button To Open NewSearchFormModal</Button>
		</React.Fragment>
	)
}