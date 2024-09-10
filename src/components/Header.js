import Style from '../css/Header.module.css';
import Container from '../css/Header.module.css';

import logo from '../assets/img/logo/logo-part1.svg';
import logo2 from '../assets/img/logo/logo-part2.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion, delay } from "framer-motion"


const Header = () => {

	const scroll = useScroll();
	const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true);

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
		['0','100%'],
		{delay: 5,}
	  );

	  const headerpadding = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['0','0 2rem'],
	  );

	  const headerDisplay = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['none','flex'],
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
        })
    })

		const cls = scroll.scrollYProgress.current < 0.01 ? "head-visible" : "head-hidden";


	return (
		<header className={`container ${Style.header}`}>
			<nav className=''>
					<div><NavLink className={`${Style.logo} ${cls}`} to='/'>
						<img className={location.pathname == '/contact' ? `${Style.logoNeg}` : ``} src={logo} alt='logo' />
						<img className={location.pathname == '/contact' ? `${Style.logoNeg} ${Style.logo2}` : `${Style.logo2}`} src={logo2} alt='logo2' />
					</NavLink></div>
					<ul className=''>
						<motion.li
						style={{
							opacity: headerOpacity,
							width: headerWidth,
							padding: headerpadding,
						
						  }}  
						className=""><NavLink to='/'><motion.div style={{
							width: headerWidth,
							display: headerDisplay,
						}}>Home</motion.div></NavLink></motion.li>
						<li className=''><NavLink to='/projecten'><motion.div>Projecten</motion.div></NavLink></li>
						<li className=''><NavLink to='/over-mij'><motion.div>Over mij</motion.div></NavLink></li>
						<motion.li 
						style={{
							opacity: headerOpacity,
							width: headerWidth,
							padding: headerpadding,
						  }}  
						className=""><NavLink to='/contact'><motion.div style={{
							width: headerWidth,
							display: headerDisplay,
						}} >Contact</motion.div></NavLink></motion.li>
					</ul>
					<div>
						 <NavLink className={`${Style.contact} ${cls}`} to='/contact'>Contact</NavLink>
					</div>
			</nav>
		</header>
	 );
}

export default Header;
