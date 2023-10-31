import React, { FC, ReactNode } from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";
interface ISecretsPage {
	children: ReactNode;
	revert?: boolean;
}
const SecretsPages: FC<ISecretsPage> = ({ children, revert = false }) => {
	const { user } = useAuth();

	if (user) {
		return <>{children}</>;
	} else {
		return <Navigate to="/auth" />;
	}
};

export default SecretsPages;
