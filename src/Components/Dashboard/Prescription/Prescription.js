import React from 'react';
import {
	Button,
	Container,
	Dropdown,
	SplitButton,
	Table,
} from 'react-bootstrap';

const data = [
	{
		id: 1,
		date: '27-02-2022',
		name: 'Alif',
		contact: '+012291213231',
		prescription: 'View',
	},
	{
		id: 2,
		date: '27-02-2022',
		name: 'Jonayed',
		contact: '+012291213231',
		prescription: 'View',
	},
	{
		id: 3,
		date: '27-02-2022',
		name: 'Ayon',
		contact: '+012291213231',
		prescription: 'View',
	},
	{
		id: 4,
		date: '27-02-2022',
		name: 'Karim',
		contact: '+012291213231',
		prescription: 'View',
	},
	{
		id: 5,
		date: '27-02-2022',
		name: 'Miraz',
		contact: '+012291213231',
		prescription: 'View',
	},
	{
		id: 6,
		date: '27-02-2022',
		name: 'Fahim',
		contact: '+012291213231',
		prescription: 'View',
	},
];

const Prescription = () => {
	return (
		<Container>
			<div className="d-flex justify-content-between">
				<p className="lead">All Prescriptions</p>

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
						{['Date', 'Name', 'Contact', 'Prescription'].map((data, index) => (
							<th key={index}>{data}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((d) => (
						<tr key={d.id}>
							<td>{d.id}</td>
							<td>{d.date}</td>
							<td>{d.name}</td>
							<td>{d.contact}</td>
							<td>
								<Button variant="primary">{d.prescription}</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Prescription;
