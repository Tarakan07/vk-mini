import * as Icons from "@mui/icons-material";
import { IMenuItem } from "../../../types";

export const menu: IMenuItem[] = [
	{
		title: "My page",
		link: "/profile",
		icon: Icons.Home,
	},
	{
		title: "Messages",
		link: "/messages",
		icon: Icons.Forum,
	},
	{
		title: "Friends",
		link: "/friends",
		icon: Icons.People,
	},
	{
		title: "News",
		link: "/news",
		icon: Icons.Article,
	},
];
