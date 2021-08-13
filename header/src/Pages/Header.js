import React from 'react';

import TopHeader from '../Components/TopHeader';
import MiddleHeader from '../Components/MiddleHeader';

const Header = () => {
	return (
		<header className='header'>
			<TopHeader />
			<MiddleHeader />
		</header>
	);
};

export default Header;
