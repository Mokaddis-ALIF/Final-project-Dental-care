import React from 'react';
import { Container, Dropdown, SplitButton, Table } from 'react-bootstrap';

const data = [
	{
		id: 1,
		name: 'Alif',
		contact: '01298384747',
		service: 'Wisdom Teeth Removal',
		visit: '2nd visit',
		payment: '500 Taka',
		due: '1000 Taka',
	},
	{
		id: 2,
		name: 'Jonayed',
		contact: '01298384747',
		service: 'Invisalign',
		visit: '1st visit',
		payment: '1000 Taka',
		due: 'none',
	},
	{
		id: 3,
		name: 'Ayon',
		contact: '01298384747',
		service: 'Clear Braces',
		visit: '3rd visit',
		payment: '2000 Taka',
		due: '1000 Taka',
	},
	{
		id: 4,
		name: 'Karim',
		contact: '01298384747',
		service: 'Oral Surgary',
		visit: '2nd visit',
		payment: '500 Taka',
		due: '1000 Taka',
	},
	{
		id: 5,
		name: 'Miraz',
		contact: '01298384747',
		service: 'Emergency',
		visit: '1st visit',
		payment: '2000 Taka',
		due: 'none',
	},
];

const AdminPayments = () => {
	return (
		<Container>
			<div className="d-flex justify-content-between">
				<p>Payments history</p>
				<SplitButton variant="outline-secondary" title="Week">
					<Dropdown.Item eventKey="2">Week</Dropdown.Item>
					<Dropdown.Item eventKey="2">Month</Dropdown.Item>
					<Dropdown.Item eventKey="3">Year</Dropdown.Item>
				</SplitButton>
			</div>
			<Table responsive>
				<thead>
					<tr>
						<th>SL No</th>
						{['Name', 'Contact', 'Service', 'Visit', 'Payments', 'Due'].map(
							(data, index) => (
								<th key={index}>{data}</th>
							)
						)}
					</tr>
				</thead>
				<tbody>
					{data.map((d) => (
						<tr key={d.id}>
							<td>{d.id}</td>
							<td>{d.name}</td>
							<td>{d.contact}</td>
							<td>{d.service}</td>
							<td>{d.visit}</td>
							<td>{d.payment}</td>
							<td>{d.due}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default AdminPayments;
