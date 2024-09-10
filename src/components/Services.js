import Style from '../css/Index.module.css';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { useState } from 'react';
import ServiceItemsList from '../components/arrays/ServiceItemsList'
import ServiceItems from './ServiceItems';


const Services = ({  }) => {
	
    // const [prevServiceItemState, setPrevServiceItemState] = useState(null);
	const [activeIndex, setActiveIndex] = useState(null);

	// const handleServiceItemState = (i) => {
	// 	setPrevServiceItemState(serviceItemState);
    // 	setServiceItemState(i);
	// };
    // console.log(activeIndex);
	return (
		<>
            {ServiceItemsList.map((item, index) => (
                <div key={index} className={Style.serviceItemWrapper}>
                    <ServiceItems 
                        item={item} 
                        isActiveSection={index === activeIndex} 
                        id={index} 
                        onActiveIndex={setActiveIndex}
                    />
                </div>
            ))}
        </>
	);
}

export default Services;
