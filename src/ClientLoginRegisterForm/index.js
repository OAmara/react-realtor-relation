import React from 'react'
import { Form, Label, Input, Button, Image, Segment, Grid, Divider, Icon, Header } from 'semantic-ui-react'

// Place styles here to overwrite semantic. If overwrite does not work, try utilizing {Styled Components}
// ^ read docs for install and implementation.

export default function ClientLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<div className='Login-Form' id='Client-Login-Form'>
				{/* Login Form Field */}
				<Form onSubmit={(e) => props.handleAllFormSubmission(e, 'login', 'client')}>
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

			<Segment raised color='blue'>
				<Divider fitted horizontal>Register Below</Divider>
				<Grid columns={2} className='segment'>
					<Grid.Column className='Client-Register-Form'>
						{/* Register Form Field */}
						<Segment size='mini' raised color='grey'>
							<Form onSubmit={
								// recoveryQuestion default on submission, due to select not defaulting unless changed.
								props.registerForm.recoveryQuestion ? props.registerForm.recoveryQuestion : props.registerForm.recoveryQuestion='Where were you born?',
								(e) => props.handleAllFormSubmission(e, 'register', 'client')
							}>
								<Segment size='small' stacked color='blue'>
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
									</Form.Group>
									<Form.Group widths='equal'>
										<Form.Field>
											<Label className='Label'>Recovery Question:</Label>
											<select required name='recoveryQuestion' value={props.registerForm.recoveryQuestion} onChange={props.handleRegisterFormChange}>
												<option value='Where were you born?'>Where were you born?</option>
												<option value="What is your mother's maiden name?">What is your Mother's Maiden Name?</option>
												<option value='Which elementary school did you attend?'>Which Elementary School did you attend?</option>
											</select>
										</Form.Field>
										<Form.Field>
											<Label className='Label'>Recovery Answer:</Label>
											<Input
												required
												type='text'
												name='recoveryAnswer'
												placeholder='"Sweet Home Alabama"'
												value={props.registerForm.recoveryAnswer}
												onChange={props.handleRegisterFormChange}
											/>
										</Form.Field>
									</Form.Group>
									<Button size='tiny' color={'twitter'} floated='right' animated='vertical' type='Submit'>
										<Button.Content visible>Register</Button.Content>
										<Button.Content hidden><Icon name='paper plane' /></Button.Content>
									</Button>
									<Header as='h2' disabled color='blue'>Hello {(props.registerForm.firstName || props.loggedInUser.firstName)} {(props.registerForm.lastName || props.loggedInUser.lastName)}, let's find a Realtor!</Header>
								</Segment>
							</Form>
						</Segment>
					</Grid.Column>
					<Grid.Column className='About-Us'>

						<Image className='Realtor-Logo' src={props.logo} centered size='small'/>
						<h3>Who We Are</h3>
						<p>What We Are</p>
						<p>How We Can Help..</p>
						<p>We give power to the home seekers! Only Clients can start a conversation, only a Client can seek to hire a realtor</p>
						<p>Here you get no spam mail, no bother from individual realtor ads!</p>
						<p>You choose the content, you choose your realtor, we help you find them!</p>
						<h5>Mission</h5>
						<p>learn more</p>


					</Grid.Column>
				</Grid>
			</Segment>
		</React.Fragment>
	)
}

