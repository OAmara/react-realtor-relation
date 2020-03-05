import React from 'react'
import { Form, Input, Label, Button, Image, Grid, Segment, Icon, Header } from 'semantic-ui-react'

export default function RealtorLoginRegisterForm(props) {

	return(
		<React.Fragment>
		<Segment raised color='blue'>
			<Grid columns={2}>
				{/* Register Form Field */}
				<Grid.Column className='Realtor-Register-Form'>
					<Segment raised size='tiny' color='red'>
						<Form size='mini' onSubmit={(e) => props.handleAllFormSubmission(e, 'register', 'realtor')}>
							<Form.Group widths='equal'>
								<Form.Field>
									<Label className='Label'>Email:</Label>
									<Input
										required
										type='email'
										name='email'
										placeholder='Enter Email'
										value={props.registerForm.email}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
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
							<Form.Group widths='equal'>
								<Form.Field>
									<Label className='Label'>First Name:</Label>
									<Input
										required
										type='text'
										name='firstName'
										placeholder='Your First Name'
										value={props.registerForm.firstName}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>Last Name:</Label>
									<Input
										required
										type='text'
										name='lastName'
										placeholder='Your Last Name'
										value={props.registerForm.lastName}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>Phone Number:</Label>
									<Input
										required
										type='tel'
										name='phoneNumber'
										placeholder='Enter Phone Number'
										value={props.registerForm.phoneNumber}
										onChange={props.handleRegisterFormChange}
										minLength='10'
										maxLength='12'
									/>
								</Form.Field>
							</Form.Group>
							<Form.Group widths='equal'>
								<Form.Field>
									<Label className='Label'>Broker License Number:</Label>
									<Input
										required
										type='text'
										name='brokerLicenseNumber'
										placeholder='Broker License #'
										value={props.registerForm.brokerLicenseNumber}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>Website Link:</Label>
									<Input
										type='url'
										name='websiteURL'
										placeholder='Website Link'
										value={props.registerForm.websiteURL}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
							</Form.Group>
							<Form.Group widths='equal'>
								<Form.Field>
									<Label className='Label'>Company Name:</Label>
									<Input
										required
										type='text'
										name='companyName'
										placeholder='Your Company Name'
										value={props.registerForm.companyName}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>Company Number:</Label>
									<Input
										required
										type='text'
										name='companyPhone'
										placeholder='Company Number'
										value={props.registerForm.companyPhone}
										onChange={props.handleRegisterFormChange}
										minLength='10'
										maxLength='12'
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>Street 1:</Label>
									<Input
										required
										type='text'
										name='street1'
										placeholder='Company Street Number'
										value={props.registerForm.street1}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
							</Form.Group>
								<Form.Group widths='equal'>
								<Form.Field>
									<Label className='Label'>City:</Label>
									<Input
										required
										type='text'
										name='city'
										placeholder="Your Company's City"
										value={props.registerForm.city}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>State:</Label>
									<Input
										required
										type='text'
										name='state'
										placeholder='State'
										value={props.registerForm.state}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
								<Form.Field>
									<Label className='Label'>Zipcode:</Label>
									<Input
										required
										type='number'
										name='zipcode'
										placeholder='Zipcode'
										maxLength='10'
										value={props.registerForm.zipcode}
										onChange={props.handleRegisterFormChange}
									/>
								</Form.Field>
							</Form.Group>
							<Button size='tiny' color={'vk'} floated='right' animated='vertical' type='Submit'>
								<Button.Content visible>Register</Button.Content>
								<Button.Content hidden><Icon name='paper plane' /></Button.Content>
							</Button>
						<Header as='h2' disabled color='red'>Welcome {(props.registerForm.firstName || props.loggedInUser.firstName)} {(props.registerForm.lastName?props.registerForm.lastName:props.loggedInUser.lastName)}, are you a Realtor?</Header>
						</Form>
					</Segment>
				</Grid.Column>
				<Grid.Column className='About-Us'>
					<Image className='Realtor-Logo' src={props.logo} centered size='small'/>
					<h3>Who We Are</h3>
					<p>What We Our</p>
					<p>How We Can Help</p>
					<h4>Realtor Register Instructions</h4>
					<p>Rules and Code of Conduct</p>
					<p>How the Realtor Portal works and how it helps organize clients...</p>
					<h6>To register a Realtor Account you must have a Real Estate Broker License that is valid</h6>
					<p>Visit: <a href='https://www.idfpr.com/DRE.asp for license verification'>IDFPR</a> for License Verification</p>
					<p>learn more</p>
				</Grid.Column>
				</Grid>
				</Segment>
			<div className='Login-Form' id='Realtor-Login-Form'>
				{/* Login Form Field*/}
				<Form onSubmit={(e) => props.handleAllFormSubmission(e, 'login', 'realtor')}>
					<Form.Group widths='equal'>
						<Form.Field>
							<Input
								required
								label='Email'
								type='email'
								name='email'
								placeholder='Enter Username or Email'
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
						<Button size={'mini'} color={'vk'} animated type='Submit'>
							<Button.Content visible>Login</Button.Content>
							<Button.Content hidden><Icon name='sign-in' /></Button.Content>
						</Button>
					</Form.Group>
				</Form>
			</div>
		</React.Fragment>
	)
}
