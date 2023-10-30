import React, { useState } from "react";
import AddPost from "./AddPost";
import { IPost } from "../../../types";
import Posts from "./Posts";
import { initialPost } from "./initialPost";
const Home: React.FC = () => {
	const [posts, setPosts] = useState<IPost[]>(initialPost);
	return (
		<>
			<AddPost setPosts={setPosts} />
			<Posts posts={posts} />
		</>
	);
};

export default Home;
