import projects from "../jsonData/projects";
import Style from '../../css/Projects.module.css';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import arrow from '../../assets/img/icons/contact-arrow.svg';
import { Link } from 'react-router-dom';
import React, { forwardRef, useEffect, useRef } from "react";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectItemEven = forwardRef((props, ref) => {

	// let tempRef = useRef(null);

	// let boxRef = useRef(null);

	let boxRef = ref;
	// console.log(ref);

	const hoverVariants = {
		// onHover: { scale: 1.05, transition: { duration: .5, ease: [.35,.17,.3,.86] }},
		// offHover: { scale: 1, transition: { duration: .5, ease: [.35,.17,.3,.86] }},
	}

	const ProjectColumns = useScroll({
		target: boxRef,
		offset: ['start end', 'end start'],
	});

	// Parallax
	const sm = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -50]);
	const md = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -100]);
	const mdNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 100]);
	const lg = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -500]);
	// const lgStarter = useTransform(intro.scrollYProgress, [0, 1], [0, -300]);
	const lgNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 250]);

	const q = gsap.utils.selector(boxRef);

	useEffect(() => {
		q('.projectChild').forEach((item) => {
			// console.log(item);
			const Etl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					toggleActions: 'play reverse play reverse',
					start: 'top 50%',
					// markers: true,
				}
			});

			Etl.to(item, {
				borderRadius: '70px',
				duration: .8,
				ease: 'sine.inOut',
			})
		});
	}, [])

	const tl = gsap.timeline();

	const handleMouseEnter = (e) => {

		if (e.currentTarget) {
			q(e.currentTarget).forEach((item) => {
				tl.to(item, {
					scale: 1.01,
					duration: 1,
					ease: 'circ.out',
				}, 0)

				tl.to(item.querySelector('.projectChildOverlay'), {
					opacity: 1,
					bottom: 0,
					duration: 1,
					ease: 'circ.out',
				}, 0)

				e.currentTarget.querySelector('.projectLine').style.transform = 'scaleX(1)'

				// tl.to(item.querySelector('.projectLine'), {
				// 	transform: 'scaleX(1)',
				// 	duration: .5,
				// 	ease: 'circ.out',
				// }, 0)

				tl.to(item.querySelector('.projectName'), {
					opacity: 1,
					transform: 'translateX(0)',
					duration: .8,
					ease: 'circ.out',
				}, 0);

				tl.to(item.querySelector('.projectButton'), {
					opacity: 1,
					transform: 'translate(0, 0)',
					// delay: .3,
					duration: .8,
					ease: 'circ.out',
				}, 0);

			})
		}
	}

	const handleMouseLeave = (e) => {

		if (e.currentTarget) {
			tl.to('.projectChild', {
				scale: 1,
				duration: 1,
				ease: 'circ.out',
			}, 0)

			tl.to('.projectChildOverlay', {
				opacity: 0,
				bottom: 0,
				duration: 1,
				ease: 'circ.out',
			}, 0)

			e.currentTarget.querySelector('.projectLine').style.transform = 'scaleX(0)'

			// tl.to('.projectLine', {
			// 	transform: 'scaleX(0)',
			// 	duration: 1,
			// 	ease: 'circ.out',
			// }, 0)

			tl.to('.projectName', {
				opacity: 0,
				transform: 'translateX(20px)',
				duration: .8,
				ease: 'circ.out',
			}, 0);

			tl.to('.projectButton', {
				opacity: 0,
				transform: 'translate(-10px, 20px)',
				duration: .8,
				ease: 'circ.inOut',
			}, 0);
		}
	}

	return (
		<>
			{projects.map((item, index) => (
							(index % 2 === 0)
								?
								<Link key={index} className={Style.projectChildLink}
								to={{pathname: `/projecten/${item.link}`}}>
									<motion.div
									onMouseEnter={e => handleMouseEnter(e)}
									onMouseLeave={e => handleMouseLeave(e)}
									className={`generalRadius projectChild ${Style.projectChild}`}>
										<div className={`projectChildOverlay ${Style.projectChildOverlay}`}></div>
										<div className={`${Style.projectChildWrapper}`}>
											<div className={`projectLine ${Style.projectLine}`}></div>
											<h3 className={`projectName ${Style.projectName}`}>{item.content.title}</h3>
											<button className={`projectButton ${Style.projectButton}`}><img src={arrow} alt="arrow" /></button>
										</div>
										<img className='' src={item.thumbnail} />
									</motion.div>
								</Link>
								:
								""
				))}
		</>
	 );
});

export default ProjectItemEven;
