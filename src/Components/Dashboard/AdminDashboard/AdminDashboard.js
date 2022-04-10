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
import EditIcon from '@mui/icons-material/Edit';

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

const appData = [
	{
		id: 1,
		date: '27-02-2022',
		time: '3.30 PM',
		name: 'Alif',
		contact: '+0123445566',
		prescription: 'View',
		action: 'Pending',
	},
	{
		id: 2,
		date: '27-02-2022',
		time: '3.30 PM',
		name: 'Jonayed',
		contact: '+0123445566',
		prescription: 'Not Added',
		action: 'Cancelled',
	},
	{
		id: 2,
		date: '27-02-2022',
		time: '3.30 PM',
		name: 'Jonayed',
		contact: '+0123445566',
		prescription: 'View',
		action: 'Approved',
	},
];

const AdminDashboard = () => {
	return (
		<Container style={{ marginTop: '-10px' }}>
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
						{appData.map((data, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>{data.date}</td>
								<td>{data.time}</td>
								<td>{data.name}</td>
								<td>{data.contact}</td>
								<td>
									{data.prescription === 'View' ? (
										<Button className="text-white" variant="info">
											{data.prescription}
										</Button>
									) : (
										'Not Added'
									)}
								</td>
								<td className="d-flex align-items-center gap-2">
									<Button
										className=" text-white"
										variant={
											data.action === 'Pending'
												? 'info'
												: data.action === 'Approved'
												? 'success'
												: 'danger'
										}
									>
										{data.action}
									</Button>
									<Button className="text-white" variant="warning">
										<EditIcon />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</Container>
	);
};

export default AdminDashboard;
