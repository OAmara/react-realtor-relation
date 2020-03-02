import React from 'react'
import { Segment, Modal, Form, Label, Sticky } from 'semantic-ui-react'

export default function ChatContainer() {



	{/*  Incorporate Semantic-UI: Popup for chat message threads to display messages w/ scroll */}
	return(
		<div className="Messaging-Footer">
			<Segment>
				<Form>
					<Form.Field>
						<Label>Chat Messaging goes here and is generated per Thread</Label>
					</Form.Field>
				</Form>
			</Segment>
		</div>
	)
}