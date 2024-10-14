import Style from '../../css/Header.module.css';
import Container from '../../css/Header.module.css';

import logo from '../../assets/img/logo/logo-part1.svg';
import gsap from 'gsap'
import logo2 from '../../assets/img/logo/logo-part2.svg';
import arrow from '../../assets/img/icons/contact-arrow.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion, delay } from "framer-motion"


const Header = ({ animation, onOpenCursor }) => {

	const scroll = useScroll();
	const [position, setPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true);

	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
			const position = window.scrollY;
			setScrollPosition(position);
	};

	useEffect(() => {
			window.addEventListener('scroll', handleScroll, { passive: true });

			return () => {
					window.removeEventListener('scroll', handleScroll);
			};
	}, []);

	const location = useLocation();

	// console.log(location);

	// console.log(scroll.scrollYProgress.current);

	// const headerY = useTransform(
	// 	scroll.scrollYProgress,
	// 	[0, 0.1],
	// 	['0','-100%'],
	//   );

	  const headerOpacity = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['0','1'],
	  );

	  const headerWidth = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['50%','100%'],
	  );

	  const headerpadding = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['0','0'],
	  );

	  const headerDisplay = useTransform(
		scroll.scrollYProgress,
		[0, 0.3],
		['flex','flex'],
	  );

	  const headerPosition = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['static','absolute'],
	  );

	  const headerPointer = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['none','auto'],
	  );

    useEffect(()=> {
			const handleScroll = () => {
			let moving = window.scrollY
		// console.log(position)

			setVisible(position <= 100);
			setPosition(moving)
			};
			window.addEventListener("scroll", handleScroll);
			return(() => {
					window.removeEventListener("scroll", handleScroll);
			});

    })

		useEffect(()=> {
			const tl = gsap.timeline();

			if(animation === true && sessionStorage.getItem("MyCat") !== "Tom") {
				tl.fromTo('#logo1',
					{
						y: -30,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						delay: .2,
						duration: .7,
						ease: 'power4.Out',
						onComplete: () => {
							sessionStorage.setItem("MyCat", "Tom");
						},
					}, 0);


				}
				tl.fromTo('#logo2',
				{
					transform: 'scale(0)',
					opacity: 0,
				},
				{
					transform: 'scale(1)',
					opacity: 1,
					duration: .5,
					ease: 'bounce.out',
					delay: 1,
				}, 0);
		},[])

		const cls = scrollPosition <= 50 && location.pathname === '/' ? "head-visible" : "head-hidden";

		const [headerOpen, setHeaderOpen] = useState(null);

		// console.log(scrollPosition)

	const handleMobile = (e) => {
		console.log(e.currentTarget.parentNode.parentNode);
		const tl = gsap.timeline();
		if(e.currentTarget.textContent == 'Close') {
			tl.to('.mobileNav li', {
				opacity: 0,
				y: 50,
			}, 0)
			// e.currentTarget.parentNode.parentNode.children[1].style.transform = 'translateX(100%)'
			// tl.to('.mobileNav', {
			// 	x: '100%',
			// },1)
		} else {
			// tl.to('.mobileNav', {
			// 	x: 0,
			// 	duration: 1,
			// 	delay: .5,
			// 	ease: 'power3.inOut',
			// }, 0)
			tl.to('.mobileNav li',
			 {
				opacity: 1,
				y: 0,
				duration: .75,
				ease: 'power3.inOut',
				stagger: .05,
			}, 0)
		}
		setHeaderOpen(!headerOpen);
	}

	const backgroundVariants = {
		leave: { scaleX: .5 },
		enter: { scaleX: 1 },
	}

	const handleMouseInContact = (e) => {
		onOpenCursor(true);
	}

	const handleMouseLeaveContact = (e) => {
		onOpenCursor(false);
	}

	return (
		<header className={`${Style.header}`}>
			<nav className={headerOpen === true ? `container ${Style.navigation} ${Style.open}` : `container ${Style.navigation}`}>
					<div className={Style.first}>
						<NavLink className={`${Style.logo} ${cls}`} to='/'>
							<img style={animation && sessionStorage.getItem("MyCat") !== "Tom" ? {opacity: 0} : null} id='logo1' className={location.pathname == '/contact' || location.pathname == '/over-mij' ? `${Style.logoNeg}` : ``} src={logo} alt='logo' />
							<img style={animation && sessionStorage.getItem("MyCat") !== "Tom" ? {opacity: 0} : null} id='logo2' className={location.pathname == '/contact' || location.pathname == '/over-mij' ? `${Style.logoNeg} ${Style.logo2}` : `${Style.logo2}`} src={logo2} alt='logo2' />
						</NavLink>
					</div>
					<ul className={Style.menu}>
						<motion.li
						style={{
							padding: headerpadding,
						}}
						className=""><NavLink to='/'><motion.div className={scrollPosition >= 50 || location.pathname !== '/' ? `${Style.navItemWrapper} ${Style.navItemWrapperDelay}` : `${Style.navItemWrapper}`} style={
							scrollPosition >= 50 || location.pathname !== '/' ? { opacity: '1', pointerEvents: 'none' }: { opacity: '0', pointerEvents: 'all' }

						}><div className={Style.navItem}>Home</div></motion.div></NavLink></motion.li>
						<li className=''><NavLink to='/projecten'><motion.div className={Style.navItem}>Projecten</motion.div></NavLink></li>
						<li className=''><NavLink to='/over-mij'><motion.div className={Style.navItem}>Over mij</motion.div></NavLink></li>
						<motion.li
						style={{
							padding: headerpadding,
						}}
						className={Style.contactList}><NavLink to='/contact'><motion.div className={scrollPosition >= 50 || location.pathname !== '/' ? `${Style.navItemWrapper} ${Style.navItemWrapperDelay}` : `${Style.navItemWrapper}`} style={
							scrollPosition >= 50 || location.pathname !== '/' ? { opacity: '1', pointerEvents: 'none'} : { opacity: '0', pointerEvents: 'all'}
							}><div className={Style.navItem}>Contact</div><img src={arrow} alt='arrow' /></motion.div></NavLink></motion.li>
						<motion.div
							style={
								scrollPosition >= 50 || location.pathname !== '/' ? { width: '100%', } : { width: '50%', }
							}
						 	className={Style.background}></motion.div>
					</ul>
					<div className={Style.second}>
						 <NavLink onMouseEnter={e => handleMouseInContact(e)} onMouseLeave={e => handleMouseLeaveContact(e)} className={`${Style.contact} ${cls}`} to='/contact'>Contact<img src={arrow} alt='arrow' /></NavLink>
					</div>
					{
						headerOpen !== true
						?
						<div onClick={e => handleMobile(e)} className={location.pathname == '/contact' || location.pathname == '/over-mij' ? `${Style.hamburger} ${Style.neg}` : `${Style.hamburger}`}>
								<div>
									<span></span>
									<span></span>
									<span></span>
									<span></span>

								</div>

						</div>
						:
						<div className={Style.hamburgerClose} onClick={e => handleMobile(e)}>Close</div>
					}
			</nav>
			<nav className={headerOpen === true ? `${Style.mobileNav} ${Style.open} mobileNav` : `${Style.mobileNav} mobileNav`}>
				<ul className=''>
					<motion.li
					className=""><NavLink className={({isActive}) => isActive ? `${Style.active}` : ""} onClick={e => handleMobile(e)} to='/'><motion.div>Home</motion.div></NavLink></motion.li>
					<li className=''><NavLink className={({isActive}) => isActive ? `${Style.active}` : ""} onClick={e => handleMobile(e)} to='/projecten'><motion.div>Projecten</motion.div></NavLink></li>
					<li className=''><NavLink className={({isActive}) => isActive ? `${Style.active}` : ""} onClick={e => handleMobile(e)} to='/over-mij'><motion.div>Over mij</motion.div></NavLink></li>
					<motion.li

					className=""><NavLink className={({isActive}) => isActive ? `${Style.active}` : ""} onClick={e => handleMobile(e)} to='/contact'><motion.div>Contact</motion.div></NavLink></motion.li>
				</ul>
			</nav>
		</header>
	 );
}

export default Header;
