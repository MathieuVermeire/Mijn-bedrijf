import Style from '../css/Header.module.css';
import Container from '../css/Header.module.css';

import logo from '../assets/img/logo.svg';
import logo2 from '../assets/img/logo2.svg';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

		const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true)
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.scrollY
						// console.log(window.scrollY);
						// console.log(position)

							setVisible(position <= 100);
							setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

		const cls = visible ? "head-visible" : "head-hidden";

	return (
		<header className={`container ${Style.header}`}>
			<nav className=''>
					<div><NavLink className={`${Style.logo} ${cls}`} to='/'><img src={logo2} alt='logo' /></NavLink></div>
					<ul className=''>
						<li className={`${visible ? Style.liDeactivate : Style.liActive}`}><NavLink to='/'>Home</NavLink></li>
						<li className=''><NavLink to='/projecten'>Projecten</NavLink></li>
						<li className=''><NavLink to='/over-mij'>Over mij</NavLink></li>
						<li className={`${visible ? Style.liDeactivate : Style.liActive}`}><NavLink to='/contact'>Contact--</NavLink></li>
					</ul>
					<div>
						<button className={`${Style.contact} ${cls}`}><NavLink to='/contact'>Contact</NavLink></button>
					</div>
			</nav>
		</header>
	 );
}

export default Header;
