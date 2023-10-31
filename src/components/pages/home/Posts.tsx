import React, { FC, useEffect, useState } from "react";
import { IPost } from "../../../types";
import { Box, Avatar, ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";
import { initialPost } from "./initialPost";
import {
	collection,
	getDocs,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import useSnap from "../../providers/useSnap";

const Posts: FC = () => {
	const { db } = useAuth();
	const [error, setError] = useState("");
	const { state, unSnap } = useSnap();
	useEffect(() => {
		console.log("update");
	}, [state]);
	useEffect(() => {
		unSnap();
	}, []);
	// const [posts, setPosts] = useState<IPost[]>(initialPost);

	// const unSnap = async () => {
	// 	try {
	// 		const querySnapshot = getDocs(
	// 			query(collection(db, "posts"), orderBy("createdAt", "desc"))
	// 		);
	// 		await querySnapshot.then((shap) => {
	// 			const newPosts: IPost[] = [...initialPost];
	// 			shap.forEach((doc: any) => {
	// 				newPosts.unshift(doc.data());
	// 			});

	// 			setPosts(newPosts);
	// 		});
	// 	} catch (error: any) {
	// 		setError(error);
	// 	}
	// };

	// useEffect(() => {
	// 	unSnap();
	// }, [db]);

	return (
		<>
			{state.map((post, ind) => {
				return (
					<Box key={ind} sx={{ marginTop: "30px" }}>
						<Link
							to={`/profile/${post.author.id}`}
							style={{
								textDecoration: "none",
								color: "#111",
								display: "flex",
								alignItems: "center",
								width: "100%",
								marginBottom: 15,
							}}
						>
							<Avatar
								alt="Remy Sharp"
								src={post.author.avatar}
								sx={{ borderRadius: "50%", width: 45, height: 45 }}
							/>

							<div>
								<span style={{ fontSize: 14, paddingLeft: 15 }}>
									{post.author.name}
								</span>
								<span style={{ fontSize: 14, paddingLeft: 15 }}>
									{post.createdAt.toString()}
								</span>
							</div>
						</Link>
						<p>{post.content}</p>
						{post.images?.length && (
							<ImageList>
								{post.images.map((image) => {
									return (
										<ImageListItem key={image}>
											<img src={image} alt="" loading="lazy" />
										</ImageListItem>
									);
								})}
							</ImageList>
						)}
					</Box>
				);
			})}
		</>
	);
};

export default Posts;
