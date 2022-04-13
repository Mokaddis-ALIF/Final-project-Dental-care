import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Auth/Hooks/useAuth';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTooth } from 'react-icons/fa';

const Header = ({ openSidebar }) => {
	const { user, logOut } = useAuth();
	console.log(user.email);
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink
						style={{ color: '#696969' }}
						exact
						to="/"
						className="nav-logo"
					>
						<FaTooth />
						<h4>Dental Care</h4>
					</NavLink>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<NavLink
								style={{ color: '#696969' }}
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								style={{ color: '#696969' }}
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								style={{ color: '#696969' }}
								exact
								to="/services"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Services
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								style={{ color: '#696969' }}
								exact
								to="/financing"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Financing
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								style={{ color: '#696969' }}
								exact
								to="/contact"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Contact
							</NavLink>
						</li>
						{user.email && (
							<li className="nav-item">
								<NavLink
									style={{ color: '#696969' }}
									exact
									to="/dashboard"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Dashboard
								</NavLink>
							</li>
						)}
						<li className="nav-item">
							{user.email ? (
								<>
									{/* <NavLink
										style={{ color: '#696969' }}
										exact
										to="/"
										activeClassName="active"
										className="nav-links"
										onClick={logOut}
									>
										Logout
									</NavLink> */}
									<div style={{ cursor: 'pointer' }} onClick={logOut}>
										Logout
									</div>
								</>
							) : (
								<NavLink
									style={{ color: '#696969' }}
									exact
									to="/login"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Login
								</NavLink>
							)}
						</li>

						<li className="nav-item">
							<NavLink
								style={{
									backgroundColor: '#696969',
									color: 'white',
									padding: '1rem 2.5rem',
									borderRadius: '8px',
								}}
								exact
								to="/pickDoctor"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Appointment
							</NavLink>
						</li>
					</ul>

					<div className="nav-icon" onClick={handleClick}>
						{click ? <ImCross /> : <GiHamburgerMenu />}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
