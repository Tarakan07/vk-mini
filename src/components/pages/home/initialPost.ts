import { IPost } from "../../../types";

export const initialPost: IPost[] = [
	{
		author: {
			id: "asda",
			avatar: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
			name: "Borik",
		},
		createdAt: JSON.stringify(new Date()),
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto illum ab numquam dignissimos, nam cumque!",
		images: [
			"https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png/revision/latest/scale-to-width-down/1200?cb=20141215045059&path-prefix=ru",
			"https://s0.rbk.ru/v6_top_pics/media/img/6/35/756667973377356.webp",
			"https://www.classmag.ru/data/344/900/1239/19-1.jpg",
		],
	},
];
