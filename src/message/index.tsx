import * as React from 'react';

import { IMessage } from './../interface';

export interface MessageProps {
	message: IMessage
}

const style:React.CSSProperties = {
  	fontSize: 'large'
};

const Message = (props: MessageProps) =>
	<span style={ style }>{ props.message.message }</span>;

export default Message;
