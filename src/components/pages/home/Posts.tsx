import React, { FC, useEffect, useState } from "react";
import { IPost, IUser } from "../../../types";
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

interface IProps {
	posts: IPost[];
	callSnap: () => void;
}

const Posts: FC<IProps> = ({ posts, callSnap }: IProps) => {
	const { db } = useAuth();
	const [error, setError] = useState("");

	useEffect(() => {
		callSnap();
	}, []);

	return (
		<>
			{posts.map((post, ind) => {
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
