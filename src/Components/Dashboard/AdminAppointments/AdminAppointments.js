import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Calendar from '../../Shared/Calendar/Calendar';

const data = [
	{
		id: '1',
		name: 'Alif',
		time: '7:00 PM',
		service: 'Implants',
		action: 'Not visited',
	},
	{
		id: '2',
		name: 'Jonayed',
		time: '8:00 PM',
		service: 'Retention',
		action: 'Not visited',
	},
	{
		id: '3',
		name: 'Ayon',
		time: '8:00 PM',
		service: 'Extractions',
		action: 'Visited',
	},
];

const AdminAppointments = () => {
	const [date, setDate] = useState(new Date());

	return (
		<Container>
			<Row>
				<Col lg={6} sm={12}>
					<Calendar date={date} setDate={setDate} />
				</Col>
				<Col lg={6} sm={12}>
					<div className="d-flex justify-content-between">
						<p>Appointments</p>
						<p>{date.toLocaleDateString()}</p>
					</div>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>SL No</th>
								<th>Name</th>
								<th>Schedule</th>
								<th>Service</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, i) => (
								<tr>
									<td>{i + 1}</td>
									<td>{item.name}</td>
									<td>{item.time}</td>
									<td>{item.service}</td>
									<td>
										<Button
											variant={
												item.action === 'Visited' ? 'primary' : 'warning'
											}
										>
											{item.action}
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
};

export default AdminAppointments;
