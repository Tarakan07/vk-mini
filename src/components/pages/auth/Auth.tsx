import { Alert, Button, ButtonGroup, TextField } from "@mui/material";
import React, { FC, memo, useEffect, useState } from "react";
import { IUserData } from "./types";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useAuth } from "../../providers/useAuth";
const Auth: FC = () => {
	const { ga, user } = useAuth();
	const [isRegForm, setIsRegForm] = useState(false);
	const [userData, setUsetData] = useState<IUserData>({
		name: "",
		email: "",
		password: "",
	} as IUserData);
	const [error, setError] = useState(null);
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isRegForm) {
			try {
				const res = await createUserWithEmailAndPassword(
					ga,
					userData.email,
					userData.password
				);
				await updateProfile(res.user, {
					displayName: userData.name,
				});
			} catch (error: any) {
				if (error) {
					setError(error.message);
				}
			}
		} else {
			try {
				await signInWithEmailAndPassword(ga, userData.email, userData.password);
			} catch (error: any) {
				if (error) {
					setError(error.message);
				}
			}
		}
	};

	// useEffect(() => {
	// 	if (user) {
	// 		navigate("/");
	// 	}
	// }, [user]);
	return (
		<>
			{error && (
				<Alert severity="error" style={{ marginBottom: "15px" }}>
					{error}
				</Alert>
			)}

			<form
				onSubmit={handleLogin}
				style={{
					flexDirection: "column",
					display: "flex",
					width: "40%",
					alignItems: "center",
					margin: "0 auto",
				}}
			>
				<TextField
					type="text"
					label="Name"
					variant="outlined"
					value={userData.name}
					sx={{ width: "100%" }}
					required
					onChange={(e) => setUsetData({ ...userData, name: e.target.value })}
				/>
				<TextField
					type="email"
					label="Email"
					variant="outlined"
					sx={{ width: "100%", marginTop: "10px" }}
					value={userData.email}
					required
					onChange={(e) => setUsetData({ ...userData, email: e.target.value })}
				/>
				<TextField
					type="password"
					label="password"
					variant="outlined"
					sx={{ width: "100%", marginTop: "10px" }}
					value={userData.password}
					required
					onChange={(e) =>
						setUsetData({ ...userData, password: e.target.value })
					}
				/>
				<ButtonGroup
					variant="outlined"
					sx={{
						marginTop: "10px",
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Button type="submit" onClick={() => setIsRegForm(false)}>
						Login
					</Button>
					<Button type="submit" onClick={() => setIsRegForm(true)}>
						Register
					</Button>
				</ButtonGroup>
			</form>
		</>
	);
};

export { Auth };
