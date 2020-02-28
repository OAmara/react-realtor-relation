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
						<Button color={'vk'} type='Submit'>Login</Button>
					</Form.Group>
				</Form>
			</div>
			{
				// Register Form Field
			}
			<div className='Client-Register'>
				<Form onSubmit={props.handleFormSubmit}>
					<Form.Group widths='equal'>
						<Form.Field>
							<Label className='Label'>Email:</Label>
							<Input
								required
								type='email'
								name='email'
								placeholder='Enter Email'
								value={props.formBody.email}
								onChange={props.handleFormChange}
							/>
						</Form.Field>
						<Form.Field>
							<Label className='Label'>Username:</Label>
							<Input
								required
								type='text'
								name='username'
								placeholder='Enter Email'
								value={props.formBody.username}
								onChange={props.handleFormChange}
							/>
						</Form.Field>
						<Form.Field>
							<Label className='Label'>Password:</Label>
							<Input
								required
								type='number'
								name='password'
								placeholder='Enter Password'
								value={props.formBody.password}
								onChange={props.handleFormChange}
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
								value={props.formBody.firstName}
								onChange={props.handleFormChange}
							/>
						</Form.Field>
						<Form.Field>
							<Label className='Label'>Last Name:</Label>
							<Input
								required
								type='text'
								name='lastName'
								placeholder='Your Last Name'
								value={props.formBody.lastName}
								onChange={props.handleFormChange}
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
								value={props.formBody.recoveryQuestion}
								onChange={props.handleFormChange}
							/>
						</Form.Field>
						<Form.Field>
							<Label className='Label'>Recovery Answer:</Label>
							<Input
								required
								type='text'
								name='recoveryAnswer'
								placeholder='"Country Road"'
								value={props.formBody.recoveryAnswer}
								onChange={props.handleFormChange}
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

