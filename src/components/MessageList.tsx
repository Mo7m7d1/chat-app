import { useState, useEffect, useRef } from "react";
import { MessageListProps } from "@/types";
import Message from "./Message";
import { auth } from "../../firebase/firebaseApp";

const MessageList = ({ messages }: MessageListProps) => {
	const [currentUser, setCurrentUser] = useState(auth.currentUser?.uid!);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div
			className="max-h-[820px] container rounded-lg p-4 mb-12 overflow-y-scroll"
			ref={containerRef}
		>
			{messages.map((message) => {
				const isCurrentUser = message.authorId === currentUser;
				const alignRight = isCurrentUser ? "justify-end" : "justify-start";
				return (
					<Message
						key={message.id}
						author={message.author}
						time={message.time}
						text={message.text}
						alignRight={alignRight}
					/>
				);
			})}
		</div>
	);
};

export default MessageList;
