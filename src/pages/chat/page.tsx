import { useEffect, useState } from "react";
import { Header, MessageInput, MessageList } from "@/components";
import { messageType } from "@/types";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../../../firebase/firebaseApp";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	orderBy,
	query,
} from "firebase/firestore";

const ChatRoom = () => {
	const [messages, setMessages] = useState<messageType[]>([]);
	const router = useRouter();
	const db = getFirestore();
	const colRef = collection(db, "chat");

	const handleSend = async (text: string) => {
		const newMessage: messageType = {
			id: uuidv4(),
			author: auth.currentUser?.displayName!,
			authorId: auth.currentUser?.uid!,
			time: new Date().toString(),
			text,
		};
		try {
			await addDoc(colRef, newMessage);
		} catch (e) {
			console.error("Error adding message: ", e);
		}
	};

	const handleLogOut = async () => {
		await auth.signOut();
		router.push("/");
	};

	const fetchMessages = async () => {
		const q = query(colRef, orderBy("time"));
		const { docs } = await getDocs(q);
		setMessages(docs.map((doc) => doc.data() as messageType));
	};

	useEffect(() => {
		fetchMessages();
	}, [messages]);

	return (
		<div className="container mx-auto">
			<Header handleLogOut={() => handleLogOut()} />
			<MessageList messages={messages} />
			<MessageInput onSendMessage={handleSend} />
		</div>
	);
};

export default ChatRoom;
