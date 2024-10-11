import Style from '../../css/Footer.module.css';
import logo from '../../assets/img/logo/logo-part1.svg';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useLocationChange } from '../../hooks/useLocationChange';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.footer',
				start: '-30% center',
				toggleActions: 'play none none reset',
				//markers: true,
			}
		});

		tl.fromTo('.footerBackground', {
			transform: 'translateY(20%)',
			borderRadius: '0px 100px 0px 0px',
			opacity: 0,
		}, {
			transform: 'translateY(0%)',
			borderRadius: '0px 200px 0px 0px',
			opacity: 1,
			ease: 'power3.out',
			duration: .5,
		}, 0);

		// tl.to('.footerBackground', {
		// 	borderRadius: '0px 200px 0px 0px',

		// 	ease: 'power3.out',
		// 	duration: 1,
		// 	delay: .3,
		// }, 1);

		tl.to('.gsap-footer-logo', {
			opacity: 1,
			transform: 'translateX(0)',
			ease: 'power3.inOut',
			duration: 1,
			delay: .3,
		}, 0);

		tl.to('.gsap-footer-title', {
			opacity: 1,
			transform: 'translateY(0)',
			ease: 'power3.inOut',
			duration: 1,
			delay: .3,
		}, 0);

		tl.to('.gsap-line', {
			transform: 'scaleX(1)',
			ease: 'power3.inOut',
			duration: 1,
			delay: .3,
		}, 0);

		tl.to('.gsap-footer-items', {
			opacity: 1,
			transform: 'translateY(0)',
			ease: 'power3.inOut',
			duration: 1,
			delay: .3,
		}, 0);

		tl.to('.gsap-footer-secondary-items', {
			opacity: 1,
			ease: 'power3.inOut',
		}, 1);


	},[])

	return (
		<footer className={`footer ${Style.footer}`}>
			<section className='container'>
				<article className={Style.footerBrand}>
				<div className={`gsap-line ${Style.brandLine}`}></div>
					<div className={Style.logoWrapper}>
						<img className={`gsap-footer-logo ${Style.logo}`} src={logo} alt=""/>
					</div>
					<div className={Style.brandWrapper}>
						<p className={`gsap-footer-title ${Style.brand}`}>Pace</p>
					</div>
				</article>
				<article className={Style.footerContact}>
					<div className={`${Style.primaryNavigation}`}>
						<ul className={`gsap-footer-items ${Style.contact}`}>
							<li>Mathieu Vermeire</li>
							<li>0485 67 84 55</li>
							<li><a href='mailto:mathieuvermeire2@gmail.com'>mathieuvermeire2@gmail.com</a></li>
						</ul>
						<ul className={`gsap-footer-items ${Style.navList}`}>
							<li><NavLink to='/'>Home</NavLink></li>
							<li><NavLink to='/projecten'>Projecten</NavLink></li>
							<li><NavLink to='/over-mij'>Over mij</NavLink></li>
							<li><NavLink to='/contact'>Contact</NavLink></li>
						</ul>
					</div>
					<div className={`gsap-footer-secondary-items ${Style.secondaryNavigation}`}>
						<p>Copyright 2024 Pace</p>
						<p>Privacy policy</p>
						<p>Cookies</p>
					</div>
				</article>
			</section>
			<div className={`footerBackground ${Style.footerBackground}`}></div>
		</footer>
	 );
}

export default Footer;
