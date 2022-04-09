import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import DashboardAppointment from '../DashboardAppointment/DashboardAppointment';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Auth/Hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import { Button } from '@mui/material';

const drawerWidth = 200;

function Dashboard(props) {
	const { admin } = useAuth();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [date, setDate] = React.useState(new Date());

	let { path, url } = useRouteMatch();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			{admin ? (
				<div className="d-flex flex-column">
					<NavLink style={{ textDecoration: 'none' }} to="/adminDashboard">
						<Button>Dashboard</Button>
					</NavLink>
					<NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
						<Button>Make Admin</Button>
					</NavLink>
				</div>
			) : (
				<NavLink to="/myAppointments">
					<Button>My appointments</Button>
				</NavLink>
			)}
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			{/* <AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Dashboard
					</Typography>
				</Toolbar>
			</AppBar> */}
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
				<Grid container spacing={2}>
					<Switch>
						<Route exact path={path}>
							<DashboardHome />
						</Route>
						<AdminRoute exact path={`${path}/makeAdmin`}>
							<MakeAdmin />
						</AdminRoute>
					</Switch>
				</Grid>
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
