import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const UserDetails = () => {
	const [date, setDate] = useState(new Date());
	return (
		<Container className="p-2">
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="bg-light py-2 px-3">
					<div>
						<h4 className="text-dark">Tell us more about you</h4>
					</div>

					<Form className="text-secondary">
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Full Name</Form.Label>
								<Form.Control type="email" placeholder="Enter Full Name" />
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="number" placeholder="Enter Phone Number" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Full Name</Form.Label>
								<Form.Control type="email" placeholder="Enter full name" />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="formGridAddress2">
							<Form.Label>DOB</Form.Label>
							<Form.Control
								type="date"
								name="duedate"
								placeholder="Due date"
								value={date}
								className="text-secondary"
								onChange={(e) => setDate(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formGridAddress1">
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder="1234 Main St" />
						</Form.Group>

						<Form.Select
							aria-label="Default select example"
							className="text-secondary my-1"
						>
							<option>Choose your Doctor</option>
							<option value="1">One</option>
							<option value="2">Two</option>
						</Form.Select>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Special Notes</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<hr className="mt-2" style={{ border: '1px solid gray' }} />
		</Container>
	);
};

export default UserDetails;
