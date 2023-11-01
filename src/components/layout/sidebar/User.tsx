import { Button, Card } from "@mui/material";
import React, { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const User: FC = () => {
	const { user, ga } = useAuth();
	const navigate = useNavigate();

	const logOut = () => {
		navigate("/auth");
		localStorage.clear();
		signOut(ga);
	};

	return (
		<Card
			variant="outlined"
			sx={{
				padding: 2,
				backgroundColor: "#F1F7Fa",
				border: "none",
				borderRadius: 3,
			}}
		>
			{user ? (
				<>
					{user.name}
					<Button onClick={logOut}>logout</Button>
				</>
			) : (
				<Button onClick={() => navigate("/auth")}>login</Button>
			)}
		</Card>
	);
};

export default User;
