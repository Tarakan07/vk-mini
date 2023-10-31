import React from "react";

import UserItems from "./UserItems";
import Menu from "./Menu";
import User from "./User";

const Sidebar: React.FC = () => {
	return (
		<>
			<User />
			<UserItems />
			<Menu />
		</>
	);
};

export default Sidebar;
