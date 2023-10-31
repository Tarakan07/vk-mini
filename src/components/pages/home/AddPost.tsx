import { Alert, Box, TextField } from "@mui/material";
import React, { FC, useState } from "react";

import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";

const AddPost: FC = () => {
	const [content, setContent] = useState<string>("");
	const [error, setError] = useState(null);
	const { user, db } = useAuth();
	const onKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === "Enter" && user) {
			try {
				await addDoc(collection(db, "posts"), {
					author: user,
					createdAt: "1 minutes ago",
					content,
				});
			} catch (error: any) {
				setError(error);
			}
			setContent("");
		}
	};
	return (
		<>
			{error && (
				<Alert severity="error" style={{ marginBottom: "15px" }}>
					{error}
				</Alert>
			)}
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
		</>
	);
};

export default AddPost;
