import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Auth/Hooks/useAuth';
import './Login.css';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleGoogleSignIn = () => {
		googleSignIn(location, history);
	};

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, location, history);
	};

	return (
		<div className="bg_img py-5" style={{ height: '100vh' }}>
			<div className="color-overlay d-flex flex-column justify-content-start align-items-center">
				{/* <h2 className="text-secondary">Login Here</h2> */}

				{!isLoading && (
					<Form
						className="mt-5 w-25 bg-light w-50 h-75 d-flex flex-column justify-content-center align-items-center p-5 border border-5 rounded"
						onSubmit={handleLoginSubmit}
					>
						<Form.Group className="mb-3 pb-3 w-75" controlId="formBasicEmail">
							{/* <Form.Label>Email address</Form.Label> */}
							<Form.Control
								className="border"
								type="email"
								name="email"
								id="email"
								required
								onChange={handleOnChange}
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group
							className="mb-3 pb-3 w-75"
							controlId="formBasicPassword"
						>
							{/* <Form.Label>Password</Form.Label> */}
							<Form.Control
								className="border"
								type="password"
								name="password"
								id="password"
								required
								onChange={handleOnChange}
								placeholder="Enter Password"
							/>
						</Form.Group>

						<Button className="w-75" variant="secondary" type="submit">
							Login
						</Button>
						<Button
							className="w-75 my-2"
							variant="outline-secondary"
							type="submit"
							onClick={handleGoogleSignIn}
						>
							Sign in by Google
						</Button>
						{user.email && (
							<p className="text-secondary">User login done successfully</p>
						)}
						{authError && <p className="text-danger">{authError}</p>}
						<Link
							to="/register"
							style={{
								textDecoration: 'none',
								// marginBottom: 5,
								// paddingBottom: '20px',
							}}
						>
							<p className="lead text-dark text-center">
								Don't have any account? Create an account here
							</p>
						</Link>
					</Form>
				)}
			</div>
		</div>
	);
};

export default Login;
