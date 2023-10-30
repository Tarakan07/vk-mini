import React, { FC } from "react";
import {
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { menu } from "./dataMenu";

const Menu: FC = () => {
	const navigate = useNavigate();
	return (
		<Paper
			variant="outlined"
			sx={{ padding: 1, backgroundColor: "#f6f6f6", marginTop: "25px" }}
		>
			<MenuList>
				{menu.map((item, ind) => {
					return (
						<MenuItem key={ind} onClick={() => navigate(item.link)}>
							<ListItemIcon>
								<item.icon />
							</ListItemIcon>
							<ListItemText>{item.title}</ListItemText>
						</MenuItem>
					);
				})}
			</MenuList>
		</Paper>
	);
};

export default Menu;
