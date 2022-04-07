import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Auth/Hooks/useAuth';

const Register = () => {
	const location = useLocation();
	const history = useHistory();

	const [registerData, setRegisterData] = useState({});

	const { user, registerUser, authError } = useAuth();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newRegisterData = { ...registerData };
		newRegisterData[field] = value;

		setRegisterData(newRegisterData);
	};

	const handleRegisterSubmit = (e) => {
		if (registerData.password !== registerData.password2) {
			alert('Password did not match');
			return;
		}

		registerUser(registerData.email, registerData.password, location, history);

		e.preventDefault();
	};

	return (
		<div className="bg_img py-5" style={{ height: '100vh' }}>
			<div className="color-overlay d-flex flex-column justify-content-center align-items-center">
				<Form
					className="mt-5 w-25 bg-light w-50 h-75 d-flex flex-column justify-content-center align-items-center p-5 border border-5 rounded"
					onSubmit={handleRegisterSubmit}
				>
					<Form.Group className="mb-3 pb-3 w-75" controlId="formBasicEmail">
						{/* <Form.Label>Email address</Form.Label> */}
						<Form.Control
							className="border-top-0"
							type="email"
							name="email"
							id="email"
							required
							onChange={handleOnChange}
							placeholder="Enter email"
						/>
					</Form.Group>

					<Form.Group className="mb-3 pb-3 w-75" controlId="formBasicPassword">
						{/* <Form.Label>Password</Form.Label> */}
						<Form.Control
							className="border-top-0"
							type="password"
							name="password"
							id="password"
							required
							onChange={handleOnChange}
							placeholder="Enter Password"
						/>
					</Form.Group>
					<Form.Group className="mb-3 pb-3 w-75" controlId="formBasicPassword">
						{/* <Form.Label>Password</Form.Label> */}
						<Form.Control
							className="border-top-0"
							type="password"
							name="password2"
							id="password2"
							required
							onChange={handleOnChange}
							placeholder="Re-type Password"
						/>
					</Form.Group>

					<Button className="w-75" variant="secondary" type="submit">
						Register
					</Button>
					{user.email && (
						<p className="text-secondary">User login done successfully</p>
					)}
					{authError && <p className="text-danger">{authError}</p>}
					<Link to="/login" style={{ textDecoration: 'none' }}>
						<p className="lead text-dark text-center mt-3">
							Already a member? Login here
						</p>
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Register;
