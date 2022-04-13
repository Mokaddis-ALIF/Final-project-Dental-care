import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Auth/Hooks/useAuth';

const DoctorRoute = ({ children, ...rest }) => {
	const { user, doctor, isLoading } = useAuth();
	console.log(doctor);

	if (isLoading) {
		return <CircularProgress />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email && doctor ? (
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

export default DoctorRoute;
