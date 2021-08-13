import React from 'react';

import FooterTop from '../Components/FooterTop';
import FooterMiddle from '../Components/FooterMiddle';
import FooterButtom from '../Components/FooterButtom';

const Footer = () => {
	return (
		<footer className='footer'>
			<FooterTop />
			<FooterMiddle />
			<FooterButtom />
		</footer>
	);
};

export default Footer;
