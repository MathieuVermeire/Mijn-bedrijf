import Style from '../css/Projects.module.css';
import matheyoThumbnail from '../assets/img/projecten/matheyo/matheyo.png';
import duurzaamwonenThumbnail from '../assets/img/projecten/duurzaamwonen/duurzaamwonen.png';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import Project from '../components/projects/ProjectWrapper';
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
				<h2 className={`titleAnimation ${Style.projectTitle}`}>Mijn Projecten</h2>
				<Project />
			</article>
		</div>
	);
}

export default Projects;
