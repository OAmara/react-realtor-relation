import React from 'react'
import { Form, Input, Label, Button } from 'semantic-ui-react'

export default function RealtorLoginRegisterForm(props) {

	return(
		<React.Fragment>

			<div className='Register-Main'>
				{/* Register Form Field */}
				<div className='Register-Form'>
					<Form onSubmit={() => props.handleAllFormSubmission('register')}>
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
							<Button color={'vk'} type='Submit'>Register</Button>
						</Form.Group>
					</Form>
				</div>
				<div className='About-Us'>
					<h3>Who We Are</h3>
					<p>What We Our</p>
					<p>How We Can Help</p>
					<h5>Realtor Register Instructions</h5>
					<p>Rules of Conduct</p>
					<p>How the Realtor Portal works and how it helps organize clients...</p>
					<p>learn more</p>
				</div>
			</div>
			<div className='Login-Form'>
				<h2>Welcome {props.myName.firstName + " " + props.myName.lastName}, are you a Real Estate Broker?</h2>

				{/* Login Form Field*/}
				<Form onSubmit={() => props.handleAllFormSubmission('login')}>
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
						<Button color={'vk'} type='Submit'>Login</Button>
					</Form.Group>
				</Form>
			</div>
		</React.Fragment>
	)
}/*
	company: {
		name: {
		},
		location: {
			street1: {
			},
			street2: {
			},
			city: {
			},
			state: {
			},
			zipcode: {
			}
		},
		phone: {
			minlength: 10,
		}
	},
	username:	firstName:   lastName:   email:   brokerLicenseNumber:    websiteURL:    password:
	phoneNumber: {
		minlength: 10,
	},
*/