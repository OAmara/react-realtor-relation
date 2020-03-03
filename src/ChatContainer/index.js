import React, { useEffect, useState } from 'react'
import { Segment, Sticky, Form, Label, Menu, Input, Button, Grid, Popup, Header, Icon, Image } from 'semantic-ui-react'
import './index.css'

export default function ChatContainer({chatList, chatThreads, isClient, createMessage, loggedInUser}) {

	// chat message body
	const [messageBody, setMessageBody] = useState({body: ''})

	// Is there a way to generate state based on props...
	// const chatStates = () => {
	// 	for(let i = 0; i < chatThreads.length; i++){
	// 		const [messageBody[i], setMessageBody[i]] = useState({body: ''})
	// 		
	// 	}
	// }

	useEffect(() => {
		 chatList()
	},[])

	console.log('\n\nchatThreads in ChatContainer: ', chatThreads);

	const handleMessageChange = (e) => {
		setMessageBody({
		...messageBody,
		[e.target.name]: e.target.value})
	}

	const handleMessageSubmit = (chatId) => {
		createMessage(messageBody, chatId)
		setMessageBody({body: ''})
	}

	console.log(messageBody);

	/*  Incorporate Semantic-UI: Popup for chat message threads to display messages w/ scroll */
	return(
		<div className="Bottom-Sticky">
			<Menu>
				{
					(chatThreads.length > 0 && isClient === true)
					?
						chatThreads.map(({_id, realtor, messages}) => (
						 	<div key={_id}>
								<Popup className='Popup' trigger={<Button size='mini' circular inverted color='orange'>{realtor.firstName} {realtor.lastName}</Button>} flowing hoverable>
									<Grid centered divided columns={1}>
										<Grid.Column textAlign='center'>
											<Header sub textAlign='center' block/*dividing*/ as='h3'><Image circular src='https://i.imgur.com/T60FXNN.jpg?1' />{realtor.firstName} {realtor.lastName}</Header>
												<Segment size='mini' className='top-overflow'>
												{
												(messages.length > 0)
												?
													messages.map(({_id, body, isSenderClient}) => (
														isSenderClient
														?
															<Segment stacked size='mini' className='Client-Message' key={_id}>
																<Button onClick={null} animated='fade' floated='right' size='mini'>
																	<Button.Content visible>{body}</Button.Content>
																	<Button.Content hidden>
																		<Icon color='red' name='delete'/>{body}
																	</Button.Content>
																</Button>
															</Segment>
														:
															<p className='Realtor-Message'>{body}</p>
													))
												:
													<p>Say hi to {realtor.firstName}!</p>
												}
												</Segment>
												{// Also write conditions for message[?].isClient === true then color='blue', textAlign='right'....
												// (messages.length > 0)
												// ?
												// <p>{messages[0].body}</p>
												// :
												// null
												}
												<Form onSubmit={() => handleMessageSubmit(_id)}>
												<Input
													size='mini'
													type='text'
													name='body'
													placeholder='...'
													value={messageBody.body}
													onChange={handleMessageChange}
												/>
												<Button type='Submit' size='mini' icon='telegram plane' inverted color='blue' compact></Button>
												</Form>
										</Grid.Column>
									</Grid>
								</Popup>
						 	</div>
						))
					:
					(chatThreads.length > 0 && isClient === false)
					?
						<Button size='massive'>I work!</Button>
						//	https://react.semantic-ui.com/images/avatar/large/matthew.png
					:
					<p>Message Threads will be listed Here</p>
					 //next ternary for if isClient === false
				}
				<Menu.Item position='right'>
					<Input className='icon' icon='search' placeholder='Search...messages' size='mini'/>
				</Menu.Item>
			</Menu>
		</div>
	)
}