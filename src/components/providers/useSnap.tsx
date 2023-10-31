import { getDocs, query, collection, orderBy } from "firebase/firestore";
import React, { createContext, useMemo, useState } from "react";
import { IPost } from "../../types";
import { initialPost } from "../pages/home/initialPost";
import { useAuth } from "./useAuth";

export const useSnap = () => {
	const [state, setState] = useState<IPost[]>(initialPost);
	const [error, setError] = useState(null);
	const { db } = useAuth();

	const unSnap = async () => {
		try {
			const querySnapshot = getDocs(
				query(collection(db, "posts"), orderBy("createdAt", "asc"))
			);
			await querySnapshot.then((shap) => {
				const newPosts: IPost[] = [...initialPost];
				shap.forEach((doc: any) => {
					newPosts.unshift(doc.data());
				});

				setState(newPosts);
			});
		} catch (error: any) {
			setError(error);
		}
	};

	const values = useMemo(() => {
		return {
			unSnap,
			state,
		};
	}, [state]);
	return values;
};

export default useSnap;
