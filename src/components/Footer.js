import Style from '../css/Footer.module.css';
import logo from '../assets/img/logo/logo-part1.svg';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={Style.footer}>
			<section className='container'>
				<article className={Style.footerBrand}>
					<div className={Style.logoWrapper}>
						<img className={Style.logo} src={logo} alt=""/>
					</div>
					<div className={Style.brandWrapper}>
						<p className={Style.brand}>Pace</p>
					</div>
				</article>
				<article className={Style.footerContact}>
					<div className={Style.primaryNavigation}>
						<ul className={Style.navList}>
							<li><NavLink to='/'>Home</NavLink></li>
							<li><NavLink to='/projecten'>Projecten</NavLink></li>
							<li><NavLink to='/over-mij'>Over mij</NavLink></li>
							<li><NavLink to='/contact'>Contact</NavLink></li>
						</ul>
						<ul className={Style.contact}>
							<li>Mathieu Vermeire</li>
							<li>0485 67 84 55</li>
							<li><a href='mailto:mathieuvermeire2@gmail.com'>mathieuvermeire2@gmail.com</a></li>
						</ul>
					</div>
					<div className={Style.secondaryNavigation}>
						<p>Copyright 2024 Pace</p>
						<p>Privacy policy</p>
						<p>Cookies</p>
					</div>
				</article>
			</section>
		</footer>
	 );
}

export default Footer;
