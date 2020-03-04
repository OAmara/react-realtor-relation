import React, { useEffect, useState } from 'react'
import { Header, Button } from  'semantic-ui-react'

export default function SearchList() {

	// set search list from searches index fetch
	const [searches, setSearches] = useState({})

	const getSearches = async () => {
		try{
			const searchesResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/searches/index', {
				credentials: 'include'
			})

			console.log(searchesResponse);
			const searchesJson = await searchesResponse.json()
			console.log(searchesJson);

			if(searchesJson.status === 200) {
				console.log(searchesJson.message);
				setSearches(searchesJson.data)
			}
		} catch(err) {
			console.error(err)
		}
	}

	// fetches searches on component mount, update...
	useEffect(() => {
		// insert function to retrieve client's searches!
		getSearches()
	},[])

		console.log(searches);
	return(
		<React.Fragment>
			{
				(searches.length > 0)
				?
					<React.Fragment>
						<Header>Hello</Header>
					</React.Fragment>
				:
				<Header as='h2' textAlign='center'>Come here to see a list of your searches</Header>
			}
			<Button color='teal'>Start A New Search</Button>
		</React.Fragment>
	)
}