import React from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'

// Place styles here to overwrite semantic. If overwrite does not work, try utilizing {Styled Components}
// ^ read docs for install and implementation.

export default function ClientLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<div className='Login-Form'>
				<h2>Hello {props.myName.firstName + " " + props.myName.lastName}, let's find you a Realtor!</h2>
				{/* Login Form Field */}
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
						<img className='Logo' alt='logo goes here' href=''/>
					</Form.Group>
				</Form>
			</div>

			{/* Register Form Field */}
			<div className='Register-Main'>	
				<div className='Register-Form'>
					<Form onSubmit={() => props.handleAllFormSubmission('register')}>
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
								<select name='recoveryQuestion' value={props.registerForm.recoveryQuestion} onChange={props.handleRegisterFormChange}>
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
					</Form>
				</div>
				<div className='About-Us'>
					<h3>Who We Are</h3>
					<p>What We Our</p>
					<p>How We Can Help</p>
					<h5>Mission</h5>
					<p>learn more</p>
				</div>
			</div>	
		</React.Fragment>
	)
}

