import { messageType } from "@/types";

const Message = ({
	author,
	time,
	text,
	alignRight,
}: messageType & { alignRight?: string }) => (
	<div className={`flex py-1.5 mx-2 ${alignRight}`}>
		<div
			className={`p-4 rounded-xl shadow-md ${
				alignRight === "justify-end" ? "bg-white" : "bg-green-100"
			}`}
		>
			{alignRight !== "justify-end" && (
				<p className="text-sm font-medium text-gray-600">{author}</p>
			)}
			<p className="text-md ">{text}</p>
			<p className="text-xs text-gray-500">
				{new Date(time).toLocaleTimeString([], {
					hour: "numeric",
					minute: "2-digit",
					hour12: true,
				})}
			</p>
		</div>
	</div>
);

export default Message;
