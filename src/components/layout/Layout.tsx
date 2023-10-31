import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./header/Header";
import { useAuth } from "../providers/useAuth";

// const Layout: React.FC<
// 	React.PropsWithChildren<{ children: React.ReactNode }>
const Layout: React.FC = () => {
	const { user } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	if (location.pathname === "/auth" && user) navigate("/");
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

// const arr=	{!user ? (
// 	<>
// 		{/* <Navigate to="/" /> */}
// 		<Grid item md={2}>
// 			<Sidebar />
// 		</Grid>
// 		<Grid item md={!user ? 10 : 12}>
// 			<Outlet />
// 		</Grid>
// 	</>
// ) : (
// 	<>
// 		{/* <Navigate to="/auth" /> */}
// 		<Grid item md={user ? 10 : 12}>
// 			<Outlet />
// 		</Grid>
// 	</>
// )}
