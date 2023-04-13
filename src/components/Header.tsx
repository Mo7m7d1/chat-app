import { headerProps } from "@/types";
import { Button } from "@material-tailwind/react";

const Header = ({ handleLogOut }: headerProps) => {
	return (
		<header className="sticky top-0 flex justify-between items-center py-2 px-8 bg-gray-100 shadow-md rounded-b-xl">
			<h1 className="text-lg font-semibold">Chat Room</h1>
			<Button
				onClick={handleLogOut}
				size="sm"
				style={{ textTransform: "none" }}
			>
				Logout
			</Button>
		</header>
	);
};

export default Header;
