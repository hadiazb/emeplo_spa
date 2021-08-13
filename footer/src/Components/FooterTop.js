import React from 'react';
import { Link } from 'react-router-dom';

const FooterTop = () => {
	return (
		<nav className='footer__top'>
			<ul className='footer__top__items'>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Inicio
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Productos y Servicios
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Entorno Educativo
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Terminos y Condiciones
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Información del elempleo.com
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Trabaja con nosotros
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Paute con elempleo.com
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Contactenos, quejas y reclamos
					</Link>
				</li>
				<li className='footer__top__items__item'>
					<Link className='footer__top__items__item__link' to='/'>
						Aviso de privacidad
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default FooterTop;
