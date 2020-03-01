import React from 'react'
import { Segment, Modal, Form, Label } from 'semantic-ui-react'

export default function ChatContainer() {



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