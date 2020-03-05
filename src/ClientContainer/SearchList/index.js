import React, { useEffect, useState } from 'react'
import { Header, Button, Segment, Icon, Grid } from  'semantic-ui-react'

export default function SearchList(props) {

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
			<Header as='h2' textAlign='center' dividing color='black'>See Your List of Searches</Header>
			{
				(searches.length > 0)
				?
					<React.Fragment>
					<Grid columns={2}>
					{
						searches.map(({_id, name, zipcode, sqrft, upperPrice, lowerPrice}) => (
							<Grid.Column>
								<Segment raised key={_id}>
									<Segment stacked color='green'>
										<Button onClick={null} animated='fade' inverted color={'youtube'} size='tiny' floated='right'>
											<Button.Content visible>Delete Search</Button.Content>
											<Button.Content hidden>
												<Icon name='list'/>
											</Button.Content>
										</Button>
										<Header as='h2'>{name}</Header>
										<Segment>
										{/* insert logic for editSeachModal to open with modal logic in App.js and by using a function to generate search based on {_id} here*/}
										<p><Icon name='pin'/>Zipcode:{zipcode}</p>
										<p><Icon name='expand'/>Square Feet:{sqrft}</p>
										<p><Icon name='money bill alternate outline'/>Price Range:${lowerPrice} - ${upperPrice}</p>
										</Segment>
									</Segment>
								</Segment>
							</Grid.Column>
						))
					}
					</Grid>
					</React.Fragment>
				:
				<Header as='h2' textAlign='center'>Come here to see a list of your searches</Header>
			}
			<Button onClick={() => props.openSearchModals('open new modal')} color='teal'>Start A New Search</Button>
		</React.Fragment>
	)
}