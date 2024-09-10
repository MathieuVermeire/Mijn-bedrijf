import Style from '../css/Index.module.css';
import matheyoThumbnail from '../assets/img/projecten/matheyo/matheyo.png';
import duurzaamwonenThumbnail from '../assets/img/projecten/duurzaamwonen/duurzaamwonen.png';
import down from '../assets/img/icons/icon-down.svg';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ServiceItemsList from '../components/arrays/ServiceItemsList'
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceItems from '../components/ServiceItems';
import { Link } from 'react-router-dom';
import projects from '../components/content/projects';
import Services from '../components/Services';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	let column1 = useRef(null);
	let column2 = useRef(null);
	let introRef = useRef(null);

	useEffect(() => {
		const $card = document.querySelector('#card');
		let bounds;

		// document.addEventListener('mousemove', rotateToMouse);

		function rotateToMouse(e) {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		}
		const distance = Math.sqrt(center.x**2 + center.y**2);
		
		$card.style.transform = `
			scale3d(1.07, 1.07, 1.07)
			rotate3d(
			${center.y / 100},
			${-center.x / 100},
			0,
			${Math.log(distance)* 2}deg
			)
		`;
		
		$card.querySelector('.glow').style.backgroundImage = `
			radial-gradient(
			circle at
			${center.x * 2 + bounds.width/2}px
			${center.y * 2 + bounds.height/2}px,
			#ffffff55,
			#0000000f
			)
		`;
		}
	}, [])

	const hoverVariants = {
		onHover: { scale: 1.05, transition: { duration: .3 }},
		offHover: { scale: 1, transition: { duration: .3 }},
	}

	const ProjectColumns = useScroll({
		target: column1,
		offset: ['start end', 'end start'],
	});

	const intro = useScroll({
		target: introRef,
		offset: ['start end', 'end start'],
	});

	// Parallax
  	const sm = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -50]);
	const md = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -100]);
	const mdNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 100]);
	const lg = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -500]);
	const lgStarter = useTransform(intro.scrollYProgress, [0, 1], [0, -300]);
	const lgNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 250]);

	return (
		<div className={`container ${Style.wrapper}`}>
			<h1 className='text-center'><strong>Steppers Studio</strong>, jouw persoonlijke branding, stap voor stap</h1>
			<img className={Style.down} src={down} alt='' />
			<motion.article className={Style.article}>
				<div className={Style.intro}>
				 	<div id='card' className={Style.introChild}>
						<img className='' src={duurzaamwonenThumbnail} />
					</div>
				</div>
				<button className={`button ${Style.button}`}>Meer projecten</button>
			</motion.article>
			<article className={`${Style.services} ${Style.articleM}`}>
				<div className={Style.servicesHeading}>
					<h2>Ontdek mijn <strong>services</strong></h2>
					<p>Kies uit 1 van 5 voorgebouwde websites met elk hun eigen feeling om jouw bedrijf te representeren. ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				</div>
				<section className={Style.servicesWrapper}>
					<Services />
				</section>
			</article>
			<article className={`${Style.projectWrapper} ${Style.articleM}`}>
				<h2 className={Style.projectTitle}> Mijn <strong>Projecten</strong></h2>
				<div className={Style.project}>
				<motion.div
				ref={column1}
				className={Style.projectColumn}
				style={{y: lg}}
				>
					{/* <div className={Style.projectWebsites}>
						<motion.div
						whileHover={'onHover'}
						variants={hoverVariants}
						className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
							<div>
								<img src='' alt=''/>
								<p>Dirkjan decock</p>
							</div>
						</motion.div>
						<motion.div
						whileHover={'onHover'}
						variants={hoverVariants}
						className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
							<div>
								<img src='' alt=''/>
								<p>Matheyo</p>
							</div>
						</motion.div>
					</div> */}
					<div className={Style.projectBranding}>
						{projects.map((item, index) => (
							(index % 2 === 0) 
								? 
								<Link key={index} className={Style.projectChildLink} 
								to={{pathname: `/projecten/${item.link}`}}>
									<motion.div
									whileHover={'onHover'}
									variants={hoverVariants}
									className={Style.projectChild}>
										<img className='' src={item.thumbnail} />
									</motion.div>
								</Link>
								:
								""
							))}
					</div>
				</motion.div>
				<motion.div
				ref={column2}
				className={Style.projectColumn}
				style={{y: lg}}
				>
					{/* <div className={Style.projectWebsites}>
						<motion.div
						whileHover={'onHover'}
						variants={hoverVariants}
						className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
							<div>
								<img src='' alt=''/>
								<p>Atelier Rainier</p>
							</div>
						</motion.div>
						<motion.div
						whileHover={'onHover'}
						variants={hoverVariants}
						className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
							<div>
								<img src='' alt=''/>
								<p>Vanhoorn - maeckelbergh</p>
							</div>
						</motion.div>
						<button className={`button ${Style.projectsMore}`}><Link to='projects'>Meer Programmatie</Link></button>
					</div> */}
					<div className={Style.projectBranding}>
						{projects.map((item, index) => (
								(index % 2 === 1) 
									? 
									<Link key={index} className={Style.projectChildLink} 
									to={{pathname: `/projecten/${item.link}`}}>
										<motion.div
										whileHover={'onHover'}
										variants={hoverVariants}
										className={Style.projectChild}>
											<img className='' src={item.thumbnail} />
										</motion.div>
									</Link>
									:
									""
							))}
						<button className={`button ${Style.projectsMore}`}><Link to='projecten'>Meer Projecten</Link></button>
					</div>
				</motion.div>
				</div>
			</article>
			<article className={Style.articleM}></article>
		</div>
	 );
}

export default Home;
