import Style from '../css/Projects.module.css';
import matheyoThumbnail from '../assets/img/projecten/matheyo/matheyo.png';
import duurzaamwonenThumbnail from '../assets/img/projecten/duurzaamwonen/duurzaamwonen.png';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import projects from '../components/content/projects';
import { Link } from "react-router-dom";

const Projects = () => {
	let column1 = useRef(null);
	let column2 = useRef(null);
	let introRef = useRef(null);

	const [serviceItemState, setServiceItemState] = useState(true);

	const handleServiceItemState = (newState) => {
    setServiceItemState(newState);

		console.log(serviceItemState)
  };

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
	const lgNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 350]);
	return (
		<div className='container'>
			<article className={Style.projectWrapper}>
				<h2 className={Style.projectTitle}> Mijn <strong>Projecten</strong></h2>
				<div className={Style.project}>
					{/* <motion.div
					ref={column1}
					className={Style.projectColumn}
					style={{y: lg}}
					>
						<div className={Style.projectWebsites}>
							<div className={`${Style.projectsTag}`}>Websites</div>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.dirkjandecock.be/`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
										<div>
											<img src='' alt=''/>
											<p>Dirkjan decock</p>
										</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.sauvagezwembaden.be/`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
										<div>
											<img src='' alt=''/>
											<p>Sauvage zwembaden</p>
										</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.vanhoorn-maeckelbergh.be/`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
										<div>
											<img src='' alt=''/>
											<p>Vanhoorn maeckelbergh</p>
										</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.matheyo.be`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
									<div>
										<img src='' alt=''/>
										<p>Matheyo</p>
									</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.modenamotors.be`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
									<div>
										<img src='' alt=''/>
										<p>Modena motors</p>
									</div>
								</motion.div>
							</Link>
						</div>
					</motion.div> */}
					{/* <motion.div
					ref={column2}
					className={Style.projectColumn}
					style={{y: lg}}
					>
						<div className={Style.projectWebsites}>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.atelierrainier.be`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
									<div>
										<img src='' alt=''/>
										<p>Atelier Rainier</p>
									</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.jorndeleeuw.be`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
									<div>
										<img src='' alt=''/>
										<p>Jorn de leeuw</p>
									</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://www.imboorling.be`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
									<div>
										<img src='' alt=''/>
										<p>Imboorling</p>
									</div>
								</motion.div>
							</Link>
							<Link target="_blank" className={Style.projectChildLink} to={`https://staging.tavernier-vandevijver.be/en`}>
								<motion.div
								whileHover={'onHover'}
								variants={hoverVariants}
								className={`${Style.projectChild} ${Style.projectChildWebsite}`}>
									<div>
										<img src='' alt=''/>
										<p>Tavernier - vandevijver</p>
									</div>
								</motion.div>
							</Link>
						</div>
					</motion.div> */}
					<motion.div
					className={Style.projectColumn}
					style={{y: lg}}
					>

					<div className={Style.projectBranding}>
							<div className={`${Style.projectsTag}`}>Brandings</div>
							{projects.map((item, index) => (
								(index % 2 === 0) 
									? 
									<Link key={index} className={Style.projectChildLink} 
									to={{pathname: `/projecten/${item.link}`, state: {test:'test'}}}>
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
					className={Style.projectColumn}
					style={{y: lg}}
					>

					<div className={Style.projectBranding}>
							{projects.map((item, index) => (
								(index % 2 === 1) 
									? 
									<Link key={index} className={Style.projectChildLink} 
									to={{pathname: `/projecten/${item.link}`, state: {test:'test'}}}>
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
				</div>
			</article>
		</div>
	);
}

export default Projects;
