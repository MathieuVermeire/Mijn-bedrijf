import Style from '../css/Index.module.css';
import matheyoThumbnail from '../assets/img/projecten/matheyo/matheyo.png';
import video from '../assets/img/showcase.mp4';
import introImage from '../assets/img/intro.png';
import down from '../assets/img/icons/icon-down.svg';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ServiceItemsList from '../components/jsonData/ServiceItemsList'
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceItems from '../components/services/ServiceItems';
import { Link } from 'react-router-dom';
import projects from '../components/jsonData/projects';
import Services from '../components/services/Services';
import Project from '../components/projects/ProjectWrapper';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

	let introRef = useRef(null);
	let videoRef = useRef();

	useEffect(() => {
		// const $card = document.querySelector('#card');
		// let bounds;

		// // document.addEventListener('mousemove', rotateToMouse);

		// function rotateToMouse(e) {
		// const mouseX = e.clientX;
		// const mouseY = e.clientY;
		// const leftX = mouseX - bounds.x;
		// const topY = mouseY - bounds.y;
		// const center = {
		// 	x: leftX - bounds.width / 2,
		// 	y: topY - bounds.height / 2
		// }
		// const distance = Math.sqrt(center.x**2 + center.y**2);

		// $card.style.transform = `
		// 	scale3d(1.07, 1.07, 1.07)
		// 	rotate3d(
		// 	${center.y / 100},
		// 	${-center.x / 100},
		// 	0,
		// 	${Math.log(distance)* 2}deg
		// 	)
		// `;

		// $card.querySelector('.glow').style.backgroundImage = `
		// 	radial-gradient(
		// 	circle at
		// 	${center.x * 2 + bounds.width/2}px
		// 	${center.y * 2 + bounds.height/2}px,
		// 	#ffffff55,
		// 	#0000000f
		// 	)
		// `;
		// }
	}, [])


	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.gsap-intro',
				toggleActions: 'play none none none',
				start: 'top center',
				// markers: true,
			}

		});
		console.log(videoRef.current);
		// videoRef.current.play();
		const styles = window.getComputedStyle(document.querySelector('.gsap-intro'));

		console.log(styles.height * 1.5);

		tl.to('.gsap-intro video', {
			borderRadius: '70px',
			duration: .89,
			ease: 'circ.inOut',
		},0);

		tl.to('.gsap-intro',
		{
			scale: 1,
			duration: 1,
			delay: .3,
			ease: 'circ.Out',
			onComplete:() => {
				ScrollTrigger.refresh();
			}
		},0);


	}, [])


	const intro = useScroll({
		target: introRef,
		offset: ['start end', 'end start'],
	});

	return (
		<div className={`container ${Style.wrapper}`}>
			<h1 className={`text-center titleAnimation ${Style.header}`}><strong>Mathieu Vermeire's</strong> <br/> portfolio website</h1>
			<img className={Style.down} src={down} alt='' />
			<motion.article className={Style.article}>
				<div className={Style.intro}>
				 	<div id='card' className={`gsap-intro ${Style.introChild}`}>
					<video autoPlay muted loop ref={videoRef}>
					<source src={video} type="video/mp4"/>
					</video>
						{/* <img className='' src={introImage} /> */}
						{/* <iframe src="https://player.vimeo.com/video/1019122669?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="showcase"></iframe><script src="https://player.vimeo.com/api/player.js"></script> */}
					</div>
				</div>
				<button className={`button ${Style.button}`}>Meer projecten</button>
			</motion.article>
			<article className={`${Style.services} ${Style.articleM}`}>
				<div className={Style.servicesHeading}>
					<h2 className='titleAnimation'>Ontdek mijn <strong>Expertise</strong></h2>
					<p className='textAnimation'>Development, UX/UI en animatie zijn de 3 peilers die mijn expertise omvatten. Deze zijn belangrijk in het creeren van een digitale ervaringen, elk met hun eigen unieke focus en expertise, maar samen essentieel voor het ontwikkelen van succesvolle applicaties, websites en interactieve platforms.</p>
				</div>
				<section className={Style.servicesWrapper}>
					<Services />
				</section>
			</article>
			<article className={`${Style.projectWrapper} ${Style.articleM}`}>
				<div className={Style.projectHeading}>
					<h2 className={`titleAnimation ${Style.projectTitle}`}> Mijn Projecten</h2>
					<button className={`button ${Style.projectsMore}`}><Link to='projecten'>Meer Projecten</Link></button>
				</div>
				<Project />
			</article>
			{/* <article className={Style.articleM}></article> */}
		</div>
	 );
}

export default Home;
