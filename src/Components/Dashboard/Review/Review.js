import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Review = () => {
	return (
		<Container>
			<h4>Share your experience with us</h4>
			<Form className="mt-5">
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>
				<Form.Select
					aria-label="Default select example"
					className="text-secondary my-1 mb-4"
				>
					<option>Choose your Doctor</option>
					<option value="1">One</option>
					<option value="2">Two</option>
				</Form.Select>
				<Form.Select
					aria-label="Default select example"
					className="text-secondary my-1 mb-4"
				>
					<option>Give a rating</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
					<option value="4">Four</option>
					<option value="5">Five</option>
				</Form.Select>

				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Share your experience</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>

				<Button variant="outline-secondary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Review;
