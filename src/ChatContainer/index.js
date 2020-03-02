import React from 'react'
import { Segment, Modal, Form, Label, Sticky, Menu, Input } from 'semantic-ui-react'

export default function ChatContainer() {



	{/*  Incorporate Semantic-UI: Popup for chat message threads to display messages w/ scroll */}
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