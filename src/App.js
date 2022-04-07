import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shared from './Components/Shared/Shared';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Header from './Components/Header/Header';
import ServicesApp from './Components/Appointment/ServicesApp';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import DatePickerApp from './Components/Appointment/DatePickerApp';
import AppointmentForm from './Components/Appointment/AppointmentForm';

function App() {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevState) => !prevState);
	};

	return (
		<>
			<Router>
				<Header openSidebar={toggleSidebar} />
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
					<PrivateRoute exact path="/pickDate/:id">
						<DatePickerApp />
					</PrivateRoute>
					<PrivateRoute exact path="/form/:id">
						<AppointmentForm />
					</PrivateRoute>
				</Switch>
			</Router>
		</>
	);
}

export default App;
