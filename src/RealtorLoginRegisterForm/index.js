import React from 'react'
import { Form, Input, Label } from 'semantic-ui-react'

export default function RealtorLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<h2>Welcome {props.myName.firstName + " " + props.myName.lastName}, are you a realtor?</h2>
						{
				// Login Form Field
			}
			<div>
				<Form onSubmit={null}>
					<Form.Group widths='equal'>
						<Form.Field>
							<Input
								required
								label='Email'
								type='email'
								name='email'
								placeholder='Enter Email'
								// value={null}
								onChange={null}
							/>
						</Form.Field>
						<Form.Field >
							<Input
								required
								label='Password'
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
			<div className='Client-Register'>
				<Form onSubmit={null}>
					<Form.Group widths='equal'>
						<Form.Field>
							<Label className='Label'>Username:</Label>
							<Input
								required
								type='text'
								name='username'
								placeholder='Enter Username'
								// value={null}
								onChange={null}
							/>
							</Form.Field>
							<Form.Field>
							<Label className='Label'>Password:</Label>
							<Input
								required
								type='number'
								name='password'
								placeholder='Enter Password'
								// value={null}
								onChange={null}
							/>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
		</React.Fragment>
	)
}
