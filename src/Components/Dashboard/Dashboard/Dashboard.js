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
import Welcome from '../Welcome/Welcome';
import {
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../Auth/Hooks/useAuth';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const drawerWidth = 200;

function Dashboard(props) {
	const { admin } = useAuth();

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	let { path, url } = useRouteMatch();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<div className="d-flex flex-column">
				<Link to="/">
					<Button>Home</Button>
				</Link>
				{admin && (
					<>
						<Link to={`${url}/makeAdmin`}>
							<Button>Make Admin</Button>
						</Link>
						<Link to={`${url}/adminDashboard`}>
							<Button>Dashboard</Button>
						</Link>
					</>
				)}
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
					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>
					<AdminRoute path={`${path}/adminDashboard`}>
						<AdminDashboard />
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
