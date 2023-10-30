import { Box, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUsers";
interface IAddPost {
	setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
	const [content, setContent] = useState<string>("");
	const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === "Enter") {
			setPosts((prev) => [
				{
					author: users[0],
					createdAt: "1 minutes ago",
					content,
				},
				...prev,
			]);
			setContent("");
		}
	};
	return (
		<Box sx={{ width: "100%", borderRadius: "30px" }}>
			<TextField
				onChange={(e) => setContent(e.target.value)}
				onKeyDown={onKeyDown}
				value={content}
				label="Writing what's new with you"
				variant="outlined"
				InputProps={{
					sx: {
						borderRadius: "25px",
					},
				}}
				sx={{
					width: "100%",
				}}
			/>
		</Box>
	);
};

export default AddPost;
