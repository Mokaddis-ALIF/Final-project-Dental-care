import React from 'react';
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Shared = () => {
	return (
		<>
			<HomeBanner />
			<DoctorBanner />
			<Offer />
			<Services />
			<Footer />
		</>
	);
};

export default Shared;
