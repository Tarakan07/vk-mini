import React, { FC } from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Profile from "../pages/profile/Profile";
import Messages from "../pages/messages/Messages";
import Friends from "../pages/friends/Friends";
import Conversation from "../pages/messages/Conversation";
import { Auth } from "../pages/auth/Auth";
import News from "../pages/news/News";
import SecretsPages from "../providers/SecretsPages";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <div>Error page!!</div>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profile",
				element: (
					<SecretsPages>
						<Profile />
					</SecretsPages>
				),
			},
			{
				path: "/profile/:id",
				element: (
					<SecretsPages>
						<Profile />
					</SecretsPages>
				),
			},

			{
				path: "/messages",
				element: (
					<SecretsPages>
						<Messages />
					</SecretsPages>
				),
			},
			{
				path: "/message/:id",
				element: <Conversation />,
			},
			{
				path: "/friends",
				element: (
					<SecretsPages>
						<Friends />
					</SecretsPages>
				),
			},
			{
				path: "/news",
				element: <News />,
			},
			{
				path: "/auth",
				element: <Auth />,
			},
		],
	},
]);

// const Routing: FC = () => {
// 	const isAuth = true;
// 	return (
// 		<Router>
// 			<Routes>
// 				{routes.map((route) => {
// 					if (route.auth && !isAuth) {
// 						return false;
// 					}
// 					<Route path={route.path} key={`route ${route.path}`}></Route>;
// 				})}
// 			</Routes>
// 		</Router>
// 	);
// };

// export default Routing;
