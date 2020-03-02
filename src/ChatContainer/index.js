import React, { useEffect } from 'react'
import { /*Segment, Modal,*/ Sticky, Form, Label, Menu, Input, Button } from 'semantic-ui-react'

export default function ChatContainer({chatList, chatThreads}) {

	useEffect(() => {
		// chatList()
	})

	console.log('\n\nchatThreads in ChatContainer: ', chatThreads);

	/*  Incorporate Semantic-UI: Popup for chat message threads to display messages w/ scroll */
	return(
		<div className="Bottom-Sticky">
			<Menu>
				<Form>
					<Form.Field>
						<Label>Chat Messaging goes here and is generated per Thread</Label>
					</Form.Field>
				</Form>
				{
					(chatThreads.length > 0)
					?
					 chatThreads.map(({_id}) => (
					 	<div key={_id}>
					 		<Button	class='ui button' size='mini' inverted color='blue'>Chat</Button>
					 	</div>
					 ))
					 :
					 <p>Message Threads will be listed Here</p>
				}
				<Menu.Item position='right'>
					<Input className='icon' icon='search' placeholder='Search...messages' size='mini'/>
				</Menu.Item>
			</Menu>
		</div>
	)
}