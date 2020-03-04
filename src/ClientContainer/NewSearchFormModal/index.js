import React, { useState } from 'react'
import { Modal, Header, Form, Button, Input } from  'semantic-ui-react'


export default function NewSearchFormModal(props) {

	console.log(props.searchBody)
	return(
		<React.Fragment>
			<Modal open={props.toggleNewSearchModal} closeIcon={true} onClose={() => props.closeSearchModals('close new modal')} >
				
				<Header as='h4'>Create A New Search:<Header as='h3' textAlign='center' color='red'>{props.searchBody.name}</Header></Header>
				<Modal.Content>
					<Form className="NewFormModal" onSubmit={() => props.createClientSearch(props.searchBody)}>
						<Form.Group widths='equal'>
							<Form.Input
								size={'large'}
								label='Name:'
								required
								type="text"
								name="name"
								placeholder='My Dream Home'
								value={props.searchBody.name}
								onChange={props.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Input
								size={'small'}
								label='Zipcode:'
								required
								minLength='5'
								maxLength='9'
								type="text"
								name="zipcode"
								placeholder='Enter Zipcode'
								value={props.searchBody.zipcode}
								onChange={props.handleChange}
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
								maxLength='7'
								minLength='4'
								type="text"
								name="sqrft"
								placeholder='Square Footage'
								value={props.searchBody.sqrft}
								onChange={props.handleChange}
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
								name="upperPrice"
								placeholder='0'
								value={props.searchBody.upperPrice}
								onChange={props.handleChange}
							/>
							<Form.Input
								size={'small'}
								label='Price Range Low:'
								type="number"
								name="lowerPrice"
								placeholder='0'
								value={props.searchBody.lowerPrice}
								onChange={props.handleChange}
							/>
						</Form.Group>
						<Modal.Actions>
							<Button circular floated='right' inverted color={'google plus'} size={'medium'} type="Submit">Create Search</Button>
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		</React.Fragment>
	)
}


