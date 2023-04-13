export type messageType = {
	id?: string | number;
	author: string;
	authorId?: string;
	time: string;
	text: string;
};

export type MessageListProps = {
	messages: messageType[];
};

export type MessageInputProps = {
	onSendMessage: (text: string) => void;
};

export type headerProps = {
	handleLogOut: () => void;
};
