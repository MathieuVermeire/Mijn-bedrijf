import Style from '../css/Index.module.css';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { useState } from 'react';


const ServiceItems = ({ item, id, onStateChange }) => {
	const [isOpen, setIsOpen] = useState(false);


	const handleServiceItem = e => {
		setIsOpen(!isOpen);
		console.log(id);
		onStateChange(id);
	};

	const TopLevelVariant = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};

	const LowLevelVariant = {
		open: { opacity: 1, display: 'flex', },
		closed: { opacity: 0, display: 'none', },
	};

	const ItemVariant = {
		open: { backgroundColor: 'black' },
		closed: { backgroundColor: 'white', },
	};

	return (
		<motion.div animate={isOpen ? "open" : "closed"} variants={ItemVariant} id={id} onClick={e => handleServiceItem(e)} className={Style.serviceItem}>
			<motion.div animate={!isOpen ? "open" : "closed"} variants={TopLevelVariant} className={`${Style.serviceItemPart1} ${Style.active}`}>
				<img src='' alt='' />
				<h2>{item.name}</h2>
			</motion.div>
			<motion.div animate={isOpen ? "open" : "closed"} variants={LowLevelVariant} className={Style.serviceItemPart2}>
				<h2>{item.name}</h2>
				<p>
					{item.description}
				</p>
			</motion.div>
		</motion.div>
	);
}

export default ServiceItems;
