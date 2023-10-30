import { Avatar, Box, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { users } from "./dataUsers";

const UserItems: React.FC = () => {
	return (
		<Card variant="outlined" sx={{ padding: 1, backgroundColor: "#f6f6f6" }}>
			{users.map((user) => {
				return (
					<Link
						key={user.id}
						to={`/profile/${user.id}`}
						style={{
							textDecoration: "none",
							color: "#111",
							display: "flex",
							alignItems: "center",
							width: "100%",
							marginBottom: 15,
						}}
					>
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								alt="Remy Sharp"
								src={user.avatar}
								sx={{ borderRadius: "50%", width: 45, height: 45 }}
							/>
							{user.isAuth && (
								<Box
									sx={{
										position: "absolute",
										width: 10,
										height: 10,
										bottom: 0,
										right: 2,
										background: "green",
										borderRadius: "50%",
										borderWidth: 1,
										borderColor: "#fff",
										borderStyle: "solid",
									}}
								/>
							)}
						</Box>
						<span style={{ fontSize: 14, paddingLeft: 15 }}>{user.name}</span>
					</Link>
				);
			})}
		</Card>
	);
};

export default UserItems;
