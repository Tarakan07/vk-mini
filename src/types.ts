import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Dispatch, SetStateAction } from "react";
export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
	id: string;
	avatar: string;
	name: string;
	isAuth?: boolean;
}

export interface IPost {
	author: IUser;
	createdAt: string;
	content: string;
	images?: string[];
}

export interface IMenuItem {
	title: string;
	link: string;
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export interface IMessage {
	user: IUser;
	message: string;
	createdAt: string;
}
