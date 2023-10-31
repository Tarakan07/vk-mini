import {
	onSnapshot,
	collection,
	addDoc,
	query,
	orderBy,
	getDocs,
	where,
} from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { IMessage, IPost } from "../../../types";
import { useAuth } from "../../providers/useAuth";
import { initialPost } from "../home/initialPost";
import { Alert, Avatar, Box, Button, Card, TextField } from "@mui/material";

const Messages: FC = () => {
	const { db, user } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState<string>("");
	const [messages, setMessages] = useState<IMessage[]>([]);
	useEffect(() => {
		unSnap();
	}, []);

	const unSnap = async () => {
		const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
		const querySnapshot = await getDocs(q);
		const newMessages: IMessage[] = [];
		querySnapshot.forEach((doc: any) => {
			newMessages.unshift(doc.data());
		});
		setMessages(newMessages);
	};

	const sentMessageHandler = async () => {
		try {
			const createdAt = new Date();
			await addDoc(collection(db, "messages"), {
				user,
				message,
				createdAt,
			});
			await unSnap();
		} catch (error: any) {
			setError(error);
		}
		setMessage("");
	};
	return (
		<>
			{error && (
				<Alert severity="error" style={{ marginBottom: "15px" }}>
					{error}
				</Alert>
			)}{" "}
			<Card
				sx={{
					padding: 5,
				}}
			>
				{messages.map((message, ind) => {
					return (
						<Box
							key={ind}
							sx={{
								width: "100%",
								paddingBottom: "10px",
								marginBottom: "30px",
								borderBottom: "1px solid gray",
								display: "flex",
								justifyContent:
									message.user.id === user?.id ? "flex-end" : "flex-start",
							}}
						>
							<Box
								sx={{
									width: "30%",
									justifyContent: "space-between",
									display: "flex",
									alignItems: "center",
									flexDirection:
										message.user.id === user?.id ? "row-reverse" : "row",
								}}
							>
								<Box>
									<Avatar
										sx={{ width: "30px", height: "30px" }}
										src={message.user.avatar}
									/>
									{message.user.name}
								</Box>
								<Box>{message.message}</Box>
							</Box>
						</Box>
					);
				})}

				<Box
					sx={{
						display: "flex",
						boxSizing: "border-box",
						justifyContent: "space-between",
						marginTop: "50px",
						alignItems: "center",
					}}
				>
					<TextField
						onChange={(e) => setMessage(e.target.value)}
						value={message}
						// label="Writing what's new with you"
						variant="outlined"
						placeholder="Write message"
						InputProps={{
							sx: {
								borderRadius: "5px",
							},
						}}
						sx={{
							width: "80%",
						}}
					/>
					<Button variant="contained" onClick={sentMessageHandler}>
						Sent
					</Button>
				</Box>
			</Card>
		</>
	);
};

export default Messages;
