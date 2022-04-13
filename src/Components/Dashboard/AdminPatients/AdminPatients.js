import React from 'react';
import { Container, Dropdown, SplitButton, Table } from 'react-bootstrap';

const data = [
	{
		id: 1,
		name: 'Alif',
		gender: 'Male',
		age: '26',
		contact: '01298384747',
		address: 'Nazirbari North Kattali',
		visit: 'Not Visited',
	},
	{
		id: 2,
		name: 'Jonayed',
		gender: 'Male',
		age: '26',
		contact: '01298384747',
		address: 'Nazirbari North Kattali',
		visit: 'Not Visited',
	},
	{
		id: 3,
		name: 'Ayon',
		gender: 'Male',
		age: '26',
		contact: '01298384747',
		address: 'Nazirbari North Kattali',
		visit: 'Not Visited',
	},
	{
		id: 4,
		name: 'Karim',
		gender: 'Male',
		age: '26',
		contact: '01298384747',
		address: 'Nazirbari North Kattali',
		visit: 'Visited',
	},
	{
		id: 5,
		name: 'Miraz',
		gender: 'Male',
		age: '26',
		contact: '01298384747',
		address: 'Nazirbari North Kattali',
		visit: 'Visited',
	},
	{
		id: 6,
		name: 'Fahim',
		gender: 'Male',
		age: '26',
		contact: '01298384747',
		address: 'Nazirbari North Kattali',
		visit: 'Visited',
	},
];

const AdminPatients = () => {
	return (
		<Container>
			<div className="d-flex justify-content-between">
				<p>All Patients</p>
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
						{['Name', 'Gender', 'Age', 'Contact', 'Address', 'Visit'].map(
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
							<td>{d.gender}</td>
							<td>{d.age}</td>
							<td>{d.contact}</td>
							<td>{d.address}</td>
							<td
								className={
									d.visit === 'Visited' ? 'text-success' : 'text-danger'
								}
							>
								{d.visit}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default AdminPatients;
