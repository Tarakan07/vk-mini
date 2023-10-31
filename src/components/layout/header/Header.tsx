import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="header">
			<Grid
				container
				spacing={3}
				paddingX={5}
				sx={{ display: "flex", alignItems: "center" }}
			>
				<Grid item md={2} onClick={() => navigate("/")}>
					<img
						className="logo"
						src="https://cdn-icons-png.flaticon.com/512/39/39699.png"
						alt=""
					/>
				</Grid>

				<Grid item md={10}>
					<div className="box-search">
						<input type="text" />
						<div className="input_add">
							<SearchIcon />
							<span>Search</span>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Header;
