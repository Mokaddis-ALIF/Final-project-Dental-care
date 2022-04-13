import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Mona from '../../../Assets/mona.jpg';
import Rohin from '../../../Assets/rohin.jpg';

const DoctorPick = () => {
	return (
		<Container className="mt-5">
			<p className="lead text-secondary">Start your appointment</p>
			<h3 className="text-muted">Choose your Doctor</h3>
			<Row className="mt-3">
				<Col md={6} sm={12}>
					<Link
						style={{ textDecoration: 'none', color: 'gray' }}
						to="/servicesApp"
					>
						<Card style={{ width: '28rem' }}>
							<Card.Body>
								<Card.Text>
									Dr. Mona Derentz is a Board Certified Orthodontist, a
									specialist who completed 2-3 years of extensive residency
									training followed by board certification examinations in the
									specialty of orthodontics and dento-facial orthopedics.
								</Card.Text>
							</Card.Body>
							<Card.Img variant="bottom" src={Mona} />
						</Card>
					</Link>
				</Col>
				<Col md={6} sm={12}>
					<Link
						to="/servicesApp"
						style={{ textDecoration: 'none', color: 'gray' }}
					>
						<Card style={{ width: '28rem' }}>
							<Card.Body>
								<Card.Text>
									Dr. Rohin Ambaram is a Oral and Maxillofacial Surgeon, a
									specialist . He grew up in the Northern California region
									where he attended the University of California, Davis,
									graduating with a Bachelor of Science in Economics.
								</Card.Text>
							</Card.Body>
							<Card.Img variant="bottom" src={Rohin} />
						</Card>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default DoctorPick;
