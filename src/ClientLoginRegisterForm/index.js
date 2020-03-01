import React from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'

// Place styles here to overwrite semantic. If overwrite does not work, try utilizing {Styled Components}
// ^ read docs for install and implementation.

export default function ClientLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<div className='Login-Form'>
				
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
						<Button size={'mini'} color={'vk'} type='Submit'>Login</Button>
					</Form.Group>
				</Form>
			</div>

			{/* Register Form Field */}
			<div className='Register-Main'>	
				<div className='Client-Register-Form'>
					<Form onSubmit={
						// recoveryQuestion default on submission, due to select not defaulting unless changed.
						props.registerForm.recoveryQuestion ? props.registerForm.recoveryQuestion : props.registerForm.recoveryQuestion='Where were you born?',
						(e) => props.handleAllFormSubmission(e, 'register', 'client')
					}>
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
									placeholder='Enter Email'
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
									placeholder='"Country Road"'
									value={props.registerForm.recoveryAnswer}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
						</Form.Group>
						<Button color={'vk'} type='Submit'>Register</Button>
						<h2>Hello {(props.registerForm.firstName || props.loggedInUser.firstName)} {(props.registerForm.lastName || props.loggedInUser.lastName)}, let's find us a Realtor!</h2>
					</Form>
				</div>
				<div className='About-Us'>
					<img className='Realtor-Logo' alt='ReState Logo' src={props.logo} />
					<h3>Who We Are</h3>
					<p>What We Are</p>
					<p>How We Can Help</p>
					<h5>Mission</h5>
					<p>learn more</p>
				</div>
			</div>	
		</React.Fragment>
	)
}

