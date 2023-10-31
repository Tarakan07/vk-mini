import React from "react";
import AddPost from "./AddPost";

import Posts from "./Posts";

const Home: React.FC = () => {
	return (
		<>
			<AddPost />
			<Posts />
		</>
	);
};

export default Home;
