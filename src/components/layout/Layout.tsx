import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC<React.PropsWithChildren<{ children: any }>> = ({
	children,
}) => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				{children}
			</div>
		</>
	);
};

export default Layout;
