import React, { useEffect, useState } from 'react'
import { Segment, Form, Menu, Input, Button, Grid, Popup, Header, Icon, Image } from 'semantic-ui-react'
import './index.css'

export default function ChatContainer({chatList, chatThreads, isClient, createMessage, loggedInUser, deleteMessage}) {

	// chat message body
	const [messageBody, setMessageBody] = useState({body: ''})

	// Determines which popup chatThread to open. Changes to index in popup that is clicked on.
	// Fun Fact!: If this were Python, it would always open the last chatThread!
	const [openPopup, setOpenPopup] = useState(-1)


	useEffect(() => {
		chatList()
	},[])


	const handleMessageChange = (e) => {
		setMessageBody({
		...messageBody,
		[e.target.name]: e.target.value})
	}

	const handleMessageSubmit = (chatId) => {
		createMessage(messageBody, chatId)
		setMessageBody({body: ''})
	}

	/*  Incorporate Semantic-UI: Popup for chat message threads to display messages w/ scroll */
	return(
		<div className="Bottom-Sticky">
			<Menu stackable borderless fluid widths={(chatThreads.length > 2)?chatThreads.length+2:null} attached='bottom' size='mini'>
				<Menu.Item>
					<Button compact animated color={(isClient=== true)?'blue':'violet'} size='large'>
						<Button.Content visible>Say Hi!</Button.Content>
						<Button.Content hidden><Icon color={(isClient === true)?'violet':'blue'} name='mail'/><Icon name='long arrow alternate right'/></Button.Content>
					</Button>:
				</Menu.Item>
				{
					(chatThreads.length > 0 && isClient === true)
					?
						chatThreads.map(({_id, realtor, messages}, i) => (
						 	<Menu.Item key={_id}>
								<Popup 
									className='Popup' 
									eventsEnabled={true} open={(openPopup === i)?true:false} on='click' onOpen={() => setOpenPopup(i)} onClose={() => setOpenPopup(-1)} 
									trigger={
										<Button animated='fade' compact size='mini' circular inverted color='violet'>
											<Button.Content visible>{realtor.firstName} {realtor.lastName}</Button.Content>
											<Button.Content hidden>Realtor {realtor.firstName}</Button.Content>
										</Button>
									} 
									flowing
								>
									<Grid centered divided columns={1}>
										<Grid.Column textAlign='center'>
											<Header sub textAlign='center' block/*dividing*/ color='violet' as='h3'><Image circular src='https://i.imgur.com/T60FXNN.jpg?1'/>{realtor.firstName} {realtor.lastName}</Header>
												<Segment size='mini' className='top-overflow'>
												{
												(messages.length > 0)
												?
													messages.map(({_id, body, isSenderClient, timeSent}) => (
														isSenderClient
														?
															<Segment vertical size='mini' className='Client-Message' key={_id}>
																<Button compact onClick={() => deleteMessage(chatThreads[i]._id ,_id)} animated='fade' floated='right' inverted size='mini'>
																	<Button.Content visible><Header as='h5' color='blue' textAlign='left'>{body}<Header.Subheader><small><small>{new Date().toLocaleTimeString('en-US')}</small></small></Header.Subheader></Header></Button.Content>
																	<Button.Content hidden>
																		<Icon color='red' name='delete'/>{body}
																	</Button.Content>
																</Button>
															</Segment>
														:
														<Segment veritcal compact size='mini' className='Realtor-Message' key={_id}>
															<Header as='h5' color='violet' textAlign='left'>{body}<Header.Subheader><small><small>- {realtor.firstName} {new Date().toLocaleTimeString('en-US')}</small></small></Header.Subheader></Header>
														</Segment>
													))
												:
												<Header as='h4' dividing disabled color='blue'>Say hi to {realtor.firstName}!</Header>
												}
												</Segment>
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
						 	</Menu.Item>
						))
					:
					(chatThreads.length > 0 && isClient === false)
					?
						chatThreads.map(({_id, client, messages}, i) => (
						 	<Menu.Item key={_id}>
								<Popup 
									className='Popup' 
									eventsEnabled={true} open={(openPopup === i)?true:false} on='click' onOpen={() => setOpenPopup(i)} onClose={() => setOpenPopup(-1)} 
									trigger={
										<Button animated='fade' compact size='mini' circular inverted color='blue'>
											<Button.Content visible>{client.firstName} {client.lastName}</Button.Content>
											<Button.Content hidden>Client {client.firstName}</Button.Content>
										</Button>
									} 
									flowing
								>
									<Grid centered divided columns={1}>
										<Grid.Column textAlign='center'>
											<Header sub textAlign='center' block/*dividing*/ color='blue' as='h3'><Image circular src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/>{client.firstName} {client.lastName}</Header>
												<Segment size='mini' className='top-overflow'>
												{
													(messages.length > 0)
													?
														messages.map(({_id, body, isSenderClient}) => (
															!isSenderClient
															?
																<Segment vertical size='mini' className='Client-Message' key={_id}>
																	<Button compact onClick={() => deleteMessage(chatThreads[i]._id ,_id)} animated='fade' floated='right' inverted size='mini'>
																		<Button.Content visible><Header as='h5' color='violet' textAlign='left'>{body}<Header.Subheader><smaill><small>{new Date().toLocaleTimeString('en-US')}</small></smaill></Header.Subheader></Header></Button.Content>
																		<Button.Content hidden>
																			<Icon color='red' name='delete'/>{body}
																		</Button.Content>
																	</Button>
																</Segment>
															:
															<Segment vertical compact size='mini' className='Realtor-Message' key={_id}>
																<Header as='h5' color='blue' textAlign='left'>{body}<Header.Subheader><small><small>- {client.firstName} {new Date().toLocaleTimeString('en-US')}</small></small></Header.Subheader></Header>
															</Segment>
														))
													:
													<Header as='h4' dividing disabled color='violet'>Say hi to {client.firstName}!</Header>
												}
												</Segment>
												<Form onSubmit={() => handleMessageSubmit(_id)}>
												<Input
													size='mini'
													type='text'
													name='body'
													placeholder='...'
													value={messageBody.body}
													onChange={handleMessageChange}
												/>
												<Button type='Submit' size='mini' icon='telegram plane' inverted color='violet' compact></Button>
												</Form>
										</Grid.Column>
									</Grid>
								</Popup>
						 	</Menu.Item>
						))
					:
					<Menu.Item fitted>
					{
						(isClient === true)
						?
							<Header as='h5' inverted textAlign='center'>Message Threads Will Be Listed Here When You Start a Chat With a Realtor
							<Header.Subheader>Go to Realtor List to start a chat!</Header.Subheader></Header>
						:
							<Header as='h5' inverted textAlign='center'>Message Threads Will Be Listed Here When A Client Starts a Chat With You</Header>
					}
					</Menu.Item>
				}
				<Menu.Item position='right'>
					<Input className='icon' icon='search' placeholder='Search...messages' size='mini'/>
				</Menu.Item>
			</Menu>
		</div>
	)
}