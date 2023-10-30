import React, { FC } from "react";
import { IPost } from "../../../types";
import { Box, Avatar, ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface IPosts {
	posts: IPost[];
}

const Posts: FC<IPosts> = ({ posts }) => {
	return (
		<>
			{posts.map((post) => {
				return (
					<Box sx={{ marginTop: "30px" }}>
						<Link
							key={post.author.id}
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
									{post.createdAt}
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
