import React, { FC } from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../layout/Layout";

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
