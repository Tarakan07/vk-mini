import React, { FC, PropsWithChildren } from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

const SecretsPages: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();
	if (user) {
		return <>{children}</>;
	} else {
		return <Navigate to="/auth" />;
	}
};

export default SecretsPages;
