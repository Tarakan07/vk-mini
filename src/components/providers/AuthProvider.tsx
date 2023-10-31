import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
	useMemo,
} from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { users } from "../layout/sidebar/dataUsers";

interface IContext {
	user: IUser | null;
	setUser: TypeSetState<IUser | null>;
	ga: Auth;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(null);
	const ga = getAuth();

	useEffect(() => {
		const unListen = onAuthStateChanged(ga, (authUser) => {
			if (authUser) {
				console.log(authUser.displayName);
				setUser({
					id: authUser.uid,
					avatar: users[1].avatar,
					name: authUser.displayName || "",
				});
			} else {
				setUser(null);
			}
		});
		return () => unListen();
	}, []);

	const values = useMemo(() => {
		return {
			ga,
			user,
			setUser,
		};
	}, [ga, user]);

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
