import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaTooth } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const services = [
	{ id: 1, name: 'Invisalign' },
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

const ServicesApp = () => {
	return (
		<Container className="pt-4">
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="bg-light py-2 px-3">
					<p className="lead text-secondary">Make an appointment</p>
					<h3 className="text-dark">What's brings you in?</h3>
					<div className="d-flex flex-wrap">
						{services.map((service) => (
							<Link
								to={`/pickDate/${service.id}`}
								key={service.id}
								style={{ textDecoration: 'none' }}
							>
								<Card
									className="m-2"
									style={{ width: '15rem', height: '9rem' }}
								>
									<Card.Body className="d-flex flex-column justify-content-center align-items-center">
										<Card.Subtitle className="mb-2 text-muted fs-4">
											{service.name}
										</Card.Subtitle>
										<div className="fs-4 text-secondary">
											<GiMagnifyingGlass />
											<FaTooth />
										</div>
									</Card.Body>
								</Card>
							</Link>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ServicesApp;
