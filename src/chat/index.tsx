import * as React from "react";
import Message from "./../message";
import { IMessage } from "./../interface";

export interface ChatProps {
	messages: Array<IMessage>
}

const style:React.CSSProperties = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column'
};

class Chat extends React.Component<ChatProps, {}> {

    render() {

		let messages:Array<any> = [];

		if (this.props.messages) {

			messages = this.props.messages.map((message: IMessage, i: number) =>
				<Message key={ i } message={ message } />
			);
		}

        return <ul style={ style }>
			{ messages }
		</ul>;
    }
}

export default Chat;
