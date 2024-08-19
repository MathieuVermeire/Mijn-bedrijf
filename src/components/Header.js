import Style from '../css/Header.module.css';
import Container from '../css/Header.module.css';

import logo from '../assets/img/logo.svg';
import logo2 from '../assets/img/logo2.svg';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion, delay } from "framer-motion"


const Header = () => {

	const scroll = useScroll();
	const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true);

	console.log(scroll.scrollYProgress.current);

	const headerY = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['0','-100%'],
	  );

	  const headerOpacity = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['0','1'],
	  );

	  const headerWidth = useTransform(
		scroll.scrollYProgress,
		[0, 0.1],
		['0','100%'],
		{delay: .5,}
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
					<div><NavLink className={`${Style.logo} ${cls}`} to='/'><img src={logo2} alt='logo' /></NavLink></div>
					<ul className=''>
						<motion.li
						style={{
							opacity: headerOpacity,
							width: headerWidth,
							padding: headerpadding,
						  }}  
						className=""><NavLink to='/'><motion.div style={{width: headerWidth}}>Home</motion.div></NavLink></motion.li>
						<li className=''><NavLink to='/projecten'><motion.div>Projecten</motion.div></NavLink></li>
						<li className=''><NavLink to='/over-mij'><motion.div>Over mij</motion.div></NavLink></li>
						<motion.li 
						style={{
							opacity: headerOpacity,
							width: headerWidth,
							padding: headerpadding,
							display: headerDisplay,
						  }}  
						className=""><NavLink to='/contact'><motion.div style={{width: headerWidth}}>Contact</motion.div></NavLink></motion.li>
					</ul>
					<div>
						<button className={`${Style.contact} ${cls}`}><NavLink to='/contact'>Contact</NavLink></button>
					</div>
			</nav>
		</header>
	 );
}

export default Header;
