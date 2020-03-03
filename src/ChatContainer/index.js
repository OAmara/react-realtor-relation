import React, { useEffect, useState } from 'react'
import { /*Segment, Modal,*/ Sticky, Form, Label, Menu, Input, Button, Grid, Popup, Header, Icon } from 'semantic-ui-react'

export default function ChatContainer({chatList, chatThreads, isClient}) {

	// chat message body
	const [messageBody, setMessageBody] = useState({body: ''})

	useEffect(() => {
		 chatList()
	},[])

	console.log('\n\nchatThreads in ChatContainer: ', chatThreads);

	const handleMessageChange = (e) => {
		setMessageBody({
		...messageBody,
		[e.target.name]: e.target.value})
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
												(messages.forEach((message) => {
													<p>
														<small>message</small>
													</p>
												}))
											:
											<p>hello</p>
											*/}
											{messages}
											 <Input
											 	size='mini'
											 	type='text'
											 	name='body'
											 	placeholder='...'
											 	value={messageBody.body}
											 	onChange={handleMessageChange}
											 />
											 <Button size='mini' icon='telegram plane' compact></Button>
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