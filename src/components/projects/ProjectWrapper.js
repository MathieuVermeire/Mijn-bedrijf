import projects from "../jsonData/projects";
import Style from '../../css/Projects.module.css';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectItemOdd from "./ProjectItemOdd";
import ProjectItemEven from "./ProjectItemEven";

const ProjectWrapper = () => {
	let column1 = useRef(null);
	let column2 = useRef(null);

	let boxRef = useRef(null);

	const hoverVariants = {
		// onHover: { scale: 1.05, transition: { duration: .5, ease: [.35,.17,.3,.86] }},
		// offHover: { scale: 1, transition: { duration: .5, ease: [.35,.17,.3,.86] }},
	}

	const ProjectColumns = useScroll({
		target: column1,
		offset: ['start end', 'end start'],
	});

		// Parallax
		const sm = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -50]);
		const md = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -100]);
		const mdNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 100]);
		const lg = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, -500]);
		// const lgStarter = useTransform(intro.scrollYProgress, [0, 1], [0, -300]);
		const lgNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 250]);


		useEffect(() => {
			const tlprojects = gsap.timeline({
				scrollTrigger: {
					trigger: '.project',
					toggleActions: 'play none none none',
					start: 'top 70%',
					// markers: true,
				}
			});

			tlprojects.to('.gsap-project-column1', {
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: 'sine.inOut',
			}, 0)

			tlprojects.to('.gsap-project-column2', {
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: 'sine.inOut',
			}, 0)


		}, [])

	return (
		<div className={`project ${Style.project}`}>
				<motion.div
				ref={column1}
				className={`gsap-project-column1 ${Style.projectColumn}`}
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
						<ProjectItemEven ref={column1} />
					</div>
				</motion.div>
				<motion.div
				ref={column2}
				className={`gsap-project-column2 ${Style.projectColumn}`}
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
						<ProjectItemOdd ref={column2} />
					</div>
				</motion.div>
				</div>
	 );
}

export default ProjectWrapper;
