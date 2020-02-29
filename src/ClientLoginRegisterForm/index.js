import React from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'

// Place styles here to overwrite semantic. If overwrite does not work, try utilizing {Styled Components}
// ^ read docs for install and implementation.

export default function ClientLoginRegisterForm(props) {

	return(
		<React.Fragment>
			<h2>Hello {props.myName.firstName + " " + props.myName.lastName}, let's find you a realtor!</h2>
			{/* Login Form Field */}
			<div>
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

			{/* Register Form Field */}
			<div className='Client-Register-Form'>
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
							<Input
								required
								type='text'
								name='recoveryQuestion'
								placeholder="Where I'm From."
								value={props.registerForm.recoveryQuestion}
								onChange={props.handleRegisterFormChange}
							/>
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
		</React.Fragment>
	)
}
 
// 
// 	recoveryQuestion: type: [String],
// 	"Where were you born?","What is your mother's maiden name?", "Which elementary Schoold did you graduate from?"]

// 	recoveryAnswer: type: String,	hometown: type: String		zipcode: type: String,

