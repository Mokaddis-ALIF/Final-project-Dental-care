import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shared from './Components/Shared/Shared';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import ServicesApp from './Components/Appointment/ServicesApp';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import DatePickerApp from './Components/Appointment/DatePickerApp';
import AppointmentForm from './Components/Appointment/AppointmentForm';
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Shared />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<PrivateRoute exact path="/servicesApp">
						<ServicesApp />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>

					<PrivateRoute exact path="/pickDate/:id">
						<DatePickerApp />
					</PrivateRoute>
					<PrivateRoute exact path="/form/:id">
						<AppointmentForm />
					</PrivateRoute>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
