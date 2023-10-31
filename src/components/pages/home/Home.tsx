import React from "react";
import AddPost from "./AddPost";

import Posts from "./Posts";
import useSnap from "../../providers/useSnap";

const Home: React.FC = () => {
	const { state, unSnap } = useSnap();
	const callSnap = () => {
		unSnap();
	};
	return (
		<>
			<AddPost callSnap={callSnap} />
			<Posts posts={state} callSnap={callSnap} />
		</>
	);
};

export default Home;
