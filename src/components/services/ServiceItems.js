import Style from '../../css/Index.module.css';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { useState } from 'react';

import image from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-thumbnail.png';


const ServiceItems = ({ item, isActiveSection, id, onActiveIndex }) => {
	const toggleSection = () => {
		const nextIndex = isActiveSection ? null : id;
		onActiveIndex(nextIndex);
		console.log(nextIndex);
	}

	const TopLevelVariant = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};

	const LowLevelVariant = {
		open: { opacity: 1, display: 'flex', height: '100%' },
		closed: { opacity: 0, display: 'none', height: 0},
	};

	const ItemVariant = {
		open: { backgroundColor: 'black' },
		closed: { backgroundColor: 'white', },
	};

	// console.log(item);

	return (
		<motion.div transition={{duration: 2}} onClick={toggleSection} animate={isActiveSection ? "open" : "closed"} variants={ItemVariant} id={id} className={Style.serviceItem}>
			<motion.div
			style={isActiveSection ? { opacity: 0 } : { opacity: 1 }}
			  className={`${Style.serviceItemPart1} ${Style.active}`}>
				<img src='' alt='' />
				<h2>{item.name}</h2>
			</motion.div>
			<motion.div
				style={isActiveSection ? { opacity: 1, transition: '.3s ease-in-out' } : { opacity: 0 }}
			 	className={isActiveSection ? `${Style.serviceItemPart2} ${Style.active}` : `${Style.serviceItemPart2}`}>
				<div
					style={isActiveSection ? { opacity: 1, transition: '.3s ease-in-out' } : { opacity: 0 }}
				 className={Style.serviceItemCopy}>
					<h2>{item.name}</h2>
					<p>
						{item.description}
					</p>
				</div>
				<div
					className={isActiveSection ? `${Style.serviceItemOpacity} ${Style.serviceItemSources}` : `${Style.serviceItemSources}`}
					style={isActiveSection ? { opacity: 1 } : { opacity: 0 }}>

					{
						item.name === 'UX/UI'
						?
						<div>
							<img src={item.imagesSrc[0]} alt='image1'/>
							<img src={item.imagesSrc[1]} alt='image2'/>
							<img src={item.imagesSrc[2]} alt='image3'/>
						</div>
						:
						<img src={item.imagesSrc[0]} alt='image1'/>
					}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ServiceItems;
