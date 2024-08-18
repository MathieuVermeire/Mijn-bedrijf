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

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
	const lgNegative = useTransform(ProjectColumns.scrollYProgress, [0, 1], [0, 250]);

	return (
		<div className={`container`}>
			<h1 className='text-center'><strong>Base Studio</strong>, jouw persoonlijke branding, stap voor stap</h1>
			<img className={Style.down} src={down} alt='' />
			<motion.article className={Style.article}>
				<div className={Style.intro}>
				<div className={Style.introChild}>
						<img className='' src={duurzaamwonenThumbnail} />
					</div>
				</div>
				<button className={`button ${Style.button}`}>Meer projecten</button>
			</motion.article>
			<article className={Style.services}>
				<div className={Style.servicesHeading}>
					<h2>Ontdek mijn <strong>services</strong></h2>
					<p>Kies uit 1 van 5 voorgebouwde websites met elk hun eigen feeling om jouw bedrijf te representeren. ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				</div>
				<section className={Style.servicesWrapper}>
					{ServiceItemsList.map((item, id) => (
						<ServiceItems key={id} id={id} item={item} onStateChange={handleServiceItemState}/>
					))}
				</section>
			</article>
			<article className={Style.projectWrapper}>
				<h2 className={Style.projectTitle}> Mijn <strong>Projecten</strong></h2>
				<div className={Style.project}>
				<motion.div
				ref={column1}
				className={Style.projectColumn}
				style={{y: lg}}
				>
					<div className={Style.projectWebsites}>
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
					</div>
					<div className={Style.projectBranding}>
						<motion.div
						whileHover={'onHover'}
						variants={hoverVariants}
						className={Style.projectChild}>
							<img className='' src={matheyoThumbnail} />
						</motion.div>
					</div>
				</motion.div>
				<motion.div
				ref={column2}
				className={Style.projectColumn}
				style={{y: lg}}
				>
					<div className={Style.projectWebsites}>
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
					</div>
					<div className={Style.projectBranding}>
						<motion.div
						whileHover={'onHover'}
						variants={hoverVariants}
						className={Style.projectChild}>
							<img className='' src={duurzaamwonenThumbnail} />
						</motion.div>
						<motion.div
							whileHover={'onHover'}
							variants={hoverVariants}
							className={Style.projectChild}>
							<img className='' src={duurzaamwonenThumbnail} />
						</motion.div>
						<button className={`button ${Style.projectsMore}`}><Link to='projects'>Meer Brandings</Link></button>
					</div>
				</motion.div>
				</div>
			</article>
			<article></article>
		</div>
	 );
}

export default Home;
