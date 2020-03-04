import React from 'react'
import { Modal, Header, Form, Button } from  'semantic-ui-react'
import { Redirect } from 'react-router-dom'


export default function NewSearchFormModal(props) {
// fetch for createNewSearch located in App.js

	// CHANGE open= to true to have model open. CREATE A STATE TO DO THIS...
	return(
		<React.Fragment>
			<Modal open={props.toggleNewSearchModal} closeIcon={true} onClose={() => props.closeSearchModals('close new modal')} >
				<Header>Save a New Search Paramater to Store Generated Listings</Header>
				<Modal.Content>
					<Form className="NewFormModal" onSubmit={() => props.closeSearchModals('close new modal')}>
						<Form.Group widths='equal'>
							<Form.Input
								size={'large'}
								label='Name:'
								required
								type="text"
								name="name"
								placeholder='My Dream Home'
								value={null}
								onChange={null}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Input
								size={'small'}
								label='Zipcode:'
								required
								type="number"
								name="zipcode"
								placeholder='Enter Zipcode'
								value={null}
								onChange={null}
								// error
							/>
						</Form.Group>
							{
								// Utilize logic to automatically insert commas
							}
						<Form.Group>
							<Form.Input
								size={'small'}
								label='Square Feet:'
								type="number"
								name="sqrft"
								placeholder='Square Footage'
								value={null}
								onChange={null}
							/>
						</Form.Group>
						{
							// Is this clearly a range that is easier to utilize.
						}
						<Form.Group widths='equal'>
							<Form.Input
								size={'small'}
								label='Price Range High:'
								required
								type="number"
								name="upperprice"
								placeholder='0'
								value={null}
								onChange={null}
							/>
							<Form.Input
								size={'small'}
								label='Price Range Low:'
								type="number"
								name="lowerprice"
								placeholder='0'
								value={null}
								onChange={null}
							/>
						</Form.Group>
						<Modal.Actions>
							<Button inverted color={'google plus'} size={'big'} type="Submit">Create Search</Button>
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		</React.Fragment>
	)
}


