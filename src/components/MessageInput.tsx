import { MessageInputProps } from "@/types";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
	const [text, setText] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text) {
			onSendMessage(text);
			setText("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto fixed bottom-0 w-full container"
		>
			<div className="flex items-center justify-center bg-gray-50 pb-4">
				<Input
					type="text"
					placeholder="Type your message here"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button type="submit" className="mx-2" disabled={text === ""}>
					Send
				</Button>
			</div>
		</form>
	);
};

export default MessageInput;
