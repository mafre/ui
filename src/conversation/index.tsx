import * as React from "react";
import { IConversation } from "../interface";
import Chat from './../chat';

export interface ConversationProps {
	conversation: IConversation
}

const style:React.CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column'
};

class Conversation extends React.Component<ConversationProps, {}> {

    render() {

        return <div style={ style }>
			<Chat messages={ this.props.conversation.messages } />
		</div>;
    }
}

export default Conversation;
