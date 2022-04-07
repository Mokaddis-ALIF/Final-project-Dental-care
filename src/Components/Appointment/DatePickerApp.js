import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import {
	Button,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Row,
} from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

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

const times = [
	{ id: 1, time: '10:30' },
	{ id: 2, time: '11:30' },
	{ id: 3, time: '12:30' },
];

const DatePickerApp = () => {
	const [value, onChange] = useState(new Date());
	const [selectedItem, setSelectedItem] = useState('');

	const { id } = useParams();

	const pickedService = services.find((service) => service.id == id);

	return (
		<Container className="pt-4 pb-2 px-2">
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="bg-light py-2 px-3">
					<h3>Select Date and Time</h3>
					<p className="lead">
						Select your preferred date and time below for{' '}
						<b>{pickedService.name}</b>.You can select one timeslot at a time.
					</p>
					<Row>
						<Col lg={6} sm={12}>
							<Calendar onChange={onChange} value={value} />
						</Col>
						<Col
							lg={6}
							sm={12}
							className="d-flex flex-column justify-content-start align-items-center"
						>
							<div className="text-muted h5 mt-3">
								{value.toLocaleDateString()}
							</div>
							<div className="d-flex flex-wrap gap-2 mt-2">
								<DropdownButton
									id="dropdown-button-dark-example2"
									variant="secondary"
									menuVariant="dark"
									title="Choose your time"
									className="mt-2"
								>
									{times.map((time) => (
										<Dropdown.Item
											href="#/action-1"
											active
											className="bg-secondary"
											onClick={() => setSelectedItem(time)}
											key={time.id}
										>
											{time.time}
										</Dropdown.Item>
									))}
								</DropdownButton>
							</div>
						</Col>
					</Row>
					<hr className="mt-5" style={{ border: '1px solid gray' }} />
					<div className="d-flex flex-row justify-content-between align-items-center">
						<Link to="/servicesApp">
							<Button variant="secondary">Go back</Button>
						</Link>
						<Link to={`/form/${id}`} style={{ textDecoration: 'none' }}>
							{selectedItem && (
								<div className="d-flex justify-content-center align-items-center gap-5">
									<p className="text-secondary">
										<b>
											{value.toLocaleDateString()} at {selectedItem.time}
										</b>
									</p>
									<Button variant="secondary">Next</Button>
								</div>
							)}
						</Link>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default DatePickerApp;
