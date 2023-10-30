import React from "react";

import UserItems from "./UserItems";
import Menu from "./Menu";

const Sidebar: React.FC = () => {
	return (
		<>
			<UserItems />
			<Menu />
		</>
	);
};

export default Sidebar;
