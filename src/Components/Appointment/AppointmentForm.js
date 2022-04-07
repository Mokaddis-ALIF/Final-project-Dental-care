import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const services = [
	{ id: 1, name: ' Invisalign' },
	{ id: 2, name: 'Modern Braces' },
	{ id: 3, name: 'Hidden Braces' },
	{ id: 4, name: 'Dental Implants' },
	{ id: 5, name: 'Airway Orthodontics' },
	{ id: 6, name: 'Wisdom Teeth removal' },
	{ id: 7, name: 'Braces for kids' },
	{ id: 8, name: '3D Imaging' },
	{ id: 9, name: 'Buccal Fat Removal' },
	{ id: 10, name: 'TMJ Specialist' },
	{ id: 11, name: 'Emergency' },
];

const AppointmentForm = () => {
	const { id } = useParams();
	const [date, setDate] = useState(new Date());

	const pickedService = services.find((service) => service.id == id);

	return (
		<Container className="p-5">
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="bg-light py-2 px-3">
					<div>
						<p className="lead text-muted">Make an appointment </p>
						<h4 className="text-dark">Tell us about you</h4>
						<p className="lead text-secondary">
							We'll need your basic info and contact so we can follow up and
							confirm your appointment for <b>{pickedService.name}</b>
						</p>
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
			<div className="d-flex flex-row justify-content-between align-items-center">
				<Link to={`/pickDate/${id}`} style={{ textDecoration: 'none' }}>
					<Button variant="secondary">Go back</Button>
				</Link>
				<Button variant="secondary">Next</Button>
			</div>
		</Container>
	);
};

export default AppointmentForm;
