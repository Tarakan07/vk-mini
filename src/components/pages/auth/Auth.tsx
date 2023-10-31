import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { FC, memo, useState } from "react";

interface IUserData {
	email: string;
	password: string;
}

const Auth: FC = () => {
	const [isRegForm, setIsRegForm] = useState(false);
	const [userData, setUsetData] = useState<IUserData>({
		email: "",
		password: "",
	} as IUserData);
	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isRegForm) {
			console.log("register");
		} else {
			console.log("auth");
		}
		console.log(userData.email, userData.password);
	};
	return (
		<form onSubmit={handleLogin}>
			<TextField
				type="email"
				label="Email"
				variant="outlined"
				value={userData.email}
				onChange={(e) => setUsetData({ ...userData, email: e.target.value })}
			/>
			<TextField
				type="password"
				label="password"
				variant="outlined"
				value={userData.password}
				onChange={(e) => setUsetData({ ...userData, password: e.target.value })}
			/>
			<ButtonGroup variant="outlined">
				<Button onClick={() => setIsRegForm(false)}>Login</Button>
				<Button onClick={() => setIsRegForm(true)}>Register</Button>
			</ButtonGroup>
		</form>
	);
};

export default Auth;
