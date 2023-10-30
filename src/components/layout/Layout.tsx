import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

// const Layout: React.FC<
// 	React.PropsWithChildren<{ children: React.ReactNode }>
const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Grid container spacing={3} paddingX={5} marginTop={2}>
				<Grid item md={2}>
					<Sidebar />
				</Grid>

				<Grid item md={10}>
					<Outlet />
				</Grid>
			</Grid>
		</>
	);
};

export default Layout;
