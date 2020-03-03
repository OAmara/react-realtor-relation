import React, { useEffect, useState } from 'react'
import { /*Segment, Modal,*/ Sticky, Form, Label, Menu, Input, Button, Grid, Popup, Header, Icon } from 'semantic-ui-react'

export default function ChatContainer({chatList, chatThreads, isClient, createMessage}) {

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
							<Popup trigger={<Button size='mini' inverted color='orange'>{realtor.firstName} {realtor.lastName}</Button>} flowing hoverable>
								<Grid centered divided columns={1}>
									<Grid.Column textAlign='center'>
										<Header as='h3'>{realtor.firstName}</Header>
											{/*
											(messages.length > 0)
											?
												messages.forEach((message) => {
													<p>
														<small>message.body</small>
													</p>
												})
											:
											<p>hello</p>
											*/}
											{
											(messages.length > 0)
											?
											<p>{messages[0].body}</p>
											:
											null
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
											<Button type='Submit' size='mini' icon='telegram plane' compact></Button>
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