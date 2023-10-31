import { Alert, Box, TextField } from "@mui/material";
import React, { FC, useState } from "react";

import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";
import useSnap from "../../providers/useSnap";

const AddPost: FC = () => {
	const [content, setContent] = useState<string>("");
	const [error, setError] = useState(null);
	const { user, db } = useAuth();
	const { unSnap } = useSnap();
	const onKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === "Enter" && user) {
			try {
				const createdAt = new Date();
				await addDoc(collection(db, "posts"), {
					author: user,
					createdAt,
					content,
				});
				unSnap();
			} catch (error: any) {
				setError(error);
			}
			setContent("");
		}
	};
	return (
		<>
			{user && (
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
			)}
		</>
	);
};

export default AddPost;
