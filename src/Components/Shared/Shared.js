import React, { useState } from 'react';
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Shared = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevState) => !prevState);
	};

	return (
		<>
			<Header openSidebar={toggleSidebar} />

			<HomeBanner />
			<DoctorBanner />
			<Offer />
			<Services />
			<Footer />
		</>
	);
};

export default Shared;
