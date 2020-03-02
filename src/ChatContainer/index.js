import React, { useEffect } from 'react'
import { /*Segment, Modal, Sticky*/ Form, Label, Menu, Input } from 'semantic-ui-react'

export default function ChatContainer({chatList}) {

	useEffect(() => {
		// chatList()
	})

	/*  Incorporate Semantic-UI: Popup for chat message threads to display messages w/ scroll */
	return(
		<div className="Messaging-Footer">
			<Menu>
				<Form>
					<Form.Field>
						<Label>Chat Messaging goes here and is generated per Thread</Label>
					</Form.Field>
				</Form>
				<Menu.Item position='right'>
					<Input className='icon' icon='search' placeholder='Search...messages' size='mini'/>
				</Menu.Item>
			</Menu>
		</div>
	)
}