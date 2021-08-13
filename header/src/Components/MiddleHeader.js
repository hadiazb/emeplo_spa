import React, { Fragment } from 'react';

const MiddleHeader = () => {
	return (
		<Fragment>
			<nav className='header__middle'>
				<img
					className='header__middle__image'
					src='https://uatazure.elempleo.com/images/logo-marca-2.png'
					alt='logo'
				/>
				<button className='header__middle__buttom'>Iniciar sesión</button>
			</nav>
		</Fragment>
	);
};

export default MiddleHeader;
