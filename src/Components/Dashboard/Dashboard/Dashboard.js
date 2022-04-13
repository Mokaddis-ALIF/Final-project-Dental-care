import * as React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Welcome from '../Welcome/Welcome';
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../Auth/Hooks/useAuth';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminAppointments from '../AdminAppointments/AdminAppointments';
import AdminPatients from '../AdminPatients/AdminPatients';
import Prescription from '../Prescription/Prescription';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AddDoctor from '../AddDoctor/AddDoctor';
import PaymentIcon from '@mui/icons-material/Payment';
import AdminPayments from '../AdminPayments/AdminPayments';
import UserAppointments from '../UserAppointments/UserAppointments';
import PersonIcon from '@mui/icons-material/Person';
import UserDetails from '../UserDetails/UserDetails';
import UserPayment from '../UserPayment/UserPayment';
import Review from '../Review/Review';
import ReviewsIcon from '@mui/icons-material/Reviews';
import DoctorAppointments from '../DoctorAppointments/DoctorAppointments';
import DoctorDashboard from '../DoctorDashboard/DoctorDashboard';

const drawerWidth = 240;

const adminLinks = [
	{ id: 2, to: 'adminDashboard', button: 'Dashboard', icon: <DashboardIcon /> },
	{
		id: 3,
		to: 'adminAppointments',
		button: 'Appointments',
		icon: <CalendarMonthIcon />,
	},
	{
		id: 4,
		to: 'adminPatients',
		button: 'Patients',
		icon: <PersonAddAltIcon />,
	},
	{
		id: 5,
		to: 'prescription',
		button: 'Prescription',
		icon: <TextSnippetIcon />,
	},
	{
		id: 6,
		to: 'paymentHistory',
		button: 'Payments',
		icon: <PaymentIcon />,
	},
	{
		id: 7,
		to: 'makeAdmin',
		button: 'Add Admin',
		icon: <AdminPanelSettingsIcon />,
	},
	{
		id: 8,
		to: 'addDoctor',
		button: 'Add Doctor',
		icon: <LocalHospitalIcon />,
	},
];

const doctorLinks = [
	{ id: 2, to: 'adminDashboard', button: 'Dashboard', icon: <DashboardIcon /> },
	{
		id: 3,
		to: 'adminAppointments',
		button: 'Appointments',
		icon: <CalendarMonthIcon />,
	},
	{
		id: 4,
		to: 'adminPatients',
		button: 'Patients',
		icon: <PersonAddAltIcon />,
	},
	{
		id: 5,
		to: 'prescription',
		button: 'Prescription',
		icon: <TextSnippetIcon />,
	},
	{
		id: 6,
		to: 'paymentHistory',
		button: 'Payments',
		icon: <PaymentIcon />,
	},
];

const userLinks = [
	{
		id: 1,
		to: 'userAppointments',
		icon: <CalendarMonthIcon />,
		button: 'Appointments',
	},
	{
		id: 2,
		to: 'userDetails',
		icon: <PersonIcon />,
		button: 'Details',
	},
	{
		id: 3,
		to: 'userPayments',
		icon: <PaymentIcon />,
		button: 'Payment',
	},
	{
		id: 4,
		to: 'review',
		icon: <ReviewsIcon />,
		button: 'Review',
	},
];

function Dashboard(props) {
	const { admin, doctor, logOut } = useAuth();
	console.log(doctor);

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	let { path, url } = useRouteMatch();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<div
				style={{ height: '85vh' }}
				className="d-flex flex-column justify-content-between align-items-center"
			>
				<div className="d-flex flex-column justify-content-start align-items-center">
					<Link
						style={{
							textDecoration: 'none',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							color: 'gray',
							width: '70%',
							marginBottom: '10px',
							marginLeft: '10px',
						}}
						to="/"
					>
						<HomeIcon />
						<Button variant="secondary">Home</Button>
					</Link>

					{/* User Links */}
					{!admin && !doctor && (
						<div className="d-flex flex-column align-items-center gap-2">
							{userLinks.map((link) => (
								<Link
									style={{
										textDecoration: 'none',
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										color: 'gray',
										width: '100%',
										marginTop: 5,
									}}
									to={`${url}/${link.to}`}
									key={link.id}
								>
									{link.icon}
									<Button variant="secondary">{link.button}</Button>
								</Link>
							))}
						</div>
					)}

					{/* doctor link */}
					{doctor && (
						<>
							<div className="d-flex flex-column align-items-center gap-2">
								{doctorLinks.map((link) => (
									<Link
										style={{
											textDecoration: 'none',
											display: 'flex',
											justifyContent: 'flex-start',
											alignItems: 'center',
											color: 'gray',
											width: '100%',
											marginTop: 5,
										}}
										to={`${url}/${link.to}`}
										key={link.id}
									>
										{link.icon}
										<Button variant="secondary">{link.button}</Button>
									</Link>
								))}
							</div>
						</>
					)}

					{/* Admin Links */}
					{admin && (
						<>
							<div className="d-flex flex-column align-items-center gap-2">
								{adminLinks.map((link) => (
									<Link
										style={{
											textDecoration: 'none',
											display: 'flex',
											justifyContent: 'flex-start',
											alignItems: 'center',
											color: 'gray',
											width: '100%',
											marginTop: 5,
										}}
										to={`${url}/${link.to}`}
										key={link.id}
									>
										{link.icon}
										<Button variant="secondary">{link.button}</Button>
									</Link>
								))}
							</div>
						</>
					)}
				</div>
				<div className="d-flex justify-content-between align-items-center text-secondary">
					<LogoutIcon />
					<Button variant="secondary" onClick={logOut}>
						Log Out
					</Button>
				</div>
			</div>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar sx={{ backgroundColor: 'white' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />

				<Switch>
					<Route exact path={path}>
						<Welcome />
					</Route>
					<Route path={`${path}/userAppointments`}>
						<UserAppointments />
					</Route>
					<Route path={`${path}/userDetails`}>
						<UserDetails />
					</Route>
					<Route path={`${path}/userPayments`}>
						<UserPayment />
					</Route>
					<Route path={`${path}/review`}>
						<Review />
					</Route>

					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>
					<AdminRoute path={`${path}/adminDashboard`}>
						<AdminDashboard />
					</AdminRoute>
					<AdminRoute path={`${path}/adminAppointments`}>
						<AdminAppointments />
					</AdminRoute>
					<AdminRoute path={`${path}/adminPatients`}>
						<AdminPatients />
					</AdminRoute>
					<AdminRoute path={`${path}/prescription`}>
						<Prescription />
					</AdminRoute>
					<AdminRoute path={`${path}/addDoctor`}>
						<AddDoctor />
					</AdminRoute>
					<AdminRoute path={`${path}/paymentHistory`}>
						<AdminPayments />
					</AdminRoute>
					<AdminRoute path={`${path}/doctorAppointments`}>
						<DoctorAppointments />
					</AdminRoute>
					<AdminRoute path={`${path}/doctorDashboard`}>
						<DoctorDashboard />
					</AdminRoute>
				</Switch>
			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;
