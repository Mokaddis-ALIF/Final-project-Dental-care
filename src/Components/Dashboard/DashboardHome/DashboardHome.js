import React from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	Row,
	SplitButton,
	Table,
} from 'react-bootstrap';
import { FaRegCalendarAlt } from 'react-icons/fa';

const appointments = [
	{ id: 1, number: 9, title: 'Pending appointments', color: 'bg-danger' },
	{ id: 2, number: 19, title: "Today's appointments", color: 'bg-primary' },
	{ id: 3, number: 34, title: 'Total appointments', color: 'bg-success' },
	{ id: 4, number: 78, title: 'Total patients', color: 'bg-warning' },
];

const tableHeading = [
	'Date',
	'Time',
	'Name',
	'Contact',
	'Prescription',
	'Action',
];

const DashboardHome = () => {
	return (
		<Container style={{ marginTop: '-40px' }}>
			<div className="text-start">
				<h3>Dashboard</h3>
			</div>
			<Row>
				{appointments.map((a) => (
					<Col key={a.id} md={3} sm={6}>
						<Card
							className={`p-1 text-white rounded ${a.color}`}
							style={{ width: '14rem', height: '7rem' }}
						>
							<Card.Body className="d-flex justify-content-around align-items-center gap-3">
								<Card.Subtitle className="mb-2 text-white display-3">
									{a.number}
								</Card.Subtitle>
								<Card.Text>{a.title}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<div className="bg-light mt-5 px-5 py-2">
				<div className="d-flex justify-content-between px-2">
					<p className="lead">Recent Appointments</p>

					<SplitButton variant="outline-secondary" title="Choose">
						<Dropdown.Item eventKey="1">Week</Dropdown.Item>
						<Dropdown.Item eventKey="2">Month</Dropdown.Item>
						<Dropdown.Item eventKey="3">Year</Dropdown.Item>
					</SplitButton>
				</div>

				<Table responsive className="mt-4">
					<thead>
						<tr>
							<th>Sr.No</th>
							{tableHeading.map((th, index) => (
								<th key={index}>{th}</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							{Array.from({ length: 6 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
					</tbody>
				</Table>
			</div>
		</Container>
	);
};

export default DashboardHome;
