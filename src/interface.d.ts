export interface ISpeaker {
	visitId: string,
	userId: string
}

export interface IRecipient {
	visitId: string,
	userId: string
}

export interface IMessage {
	id: string,
	messageType: string,
	message: string,
	recipients: Array<IRecipient>,
	speaker: ISpeaker,
	tags: Array<string>,
	createdAt: string,
	type: string,
	conversationId: string
	createdRaw: number
}

export interface IActivity {
	createdRaw: number,
	messageType: string,
	activity: string,
	change: string,
	tags: Array<string>,
	recipients: Array<IRecipient>,
	type: string,
	id: string,
	createdAt: string,
	conversationId: string,
	speaker: ISpeaker
}

export interface IUserInfo {
	name: string,
	owner: boolean,
	titleId: string,
	role: string
}

export interface IParticipant {
	id: string,
	createdRaw: string,
	userId: string,
	visitId: string,
	connectionState: string,
	state: string,
	addedAuthorizations: Array<string>,
	removedAuthorizations: Array<string>,
	info: IUserInfo
}

export interface IVisitor {
	id: string,
	groupId: string,
	visitId: string,
	visitRevision: number,
	ownerUserId: string,
	title: string,
	state: number,
	durationSinceRequestConversationMs: number,
	durationSinceLockMs: number,
	durationSinceTransferMs: number,
	durationSinceStateChangeMs: number,
	inTransfer: boolean,
	lostByUser: boolean
}

export interface IConversation {
	id: string,
	refNumber: number,
	participants: Array<IParticipant>,
	state: string,
	events: Array<any>,
	messages: Array<IMessage>,
	stateTime: string
}
