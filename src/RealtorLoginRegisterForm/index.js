import React from 'react'
import { Form, Input, Label } from 'semantic-ui-react'

export default function RealtorLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<h2>Welcome {props.myName.firstName + " " + props.myName.lastName}, are you a realtor?</h2>

			{/* Login Form Field*/}
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
								value={props.loginForm.email}
								onChange={props.handleLoginFormChange}
							/>
						</Form.Field>
						<Form.Field >
							<Input
								required
								label='Password'
								type='password'
								name='password'
								placeholder='Enter Password'
								value={props.loginForm.password}
								onChange={props.handleLoginFormChange}
							/>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>

			{/* Register Form Field */}
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
								value={props.registerForm.username}
								onChange={props.handleRegisterFormChange}
							/>
							</Form.Field>
							<Form.Field>
							<Label className='Label'>Password:</Label>
							<Input
								required
								type='password'
								name='password'
								placeholder='Enter Password'
								value={props.registerForm.password}
								onChange={props.handleRegisterFormChange}
							/>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
		</React.Fragment>
	)
}
