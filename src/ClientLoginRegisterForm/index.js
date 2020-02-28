import React from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'
import './index.css'

// Place styles here to overwrite semantic. If overwrite does not work, try utilizing {Styled Components}
// ^ read docs for install and implementation.

export default function ClientLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<h2>Hello {props.myName.firstName + " " + props.myName.lastName}, let's find you a realtor!</h2>
			{
				// Login Form Field
			}
			<div>
				<Form onSubmit={null}>
					<Form.Group widths='equal'>
						<Form.Field>
							<Label className='Label'>Email:</Label>
							<Input
								required
								type='email'
								name='email'
								placeholder='Enter Email'
								// value={null}
								onChange={null}
							/>
						</Form.Field>
						<Form.Field>
							<Label className='Label'>Password:</Label>
							<Input
								required
								type='text'
								name='password'
								placeholder='Enter Password'
								// value={null}
								onChange={null}
							/>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
			{
				// Register Form Field
			}

		</React.Fragment>
	)
}