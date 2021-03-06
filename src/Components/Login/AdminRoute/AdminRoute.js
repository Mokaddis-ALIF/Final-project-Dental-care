import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Auth/Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user, admin, doctor, isLoading } = useAuth();

	if (isLoading) {
		return <CircularProgress />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				(user.email && admin) || doctor ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/home',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
