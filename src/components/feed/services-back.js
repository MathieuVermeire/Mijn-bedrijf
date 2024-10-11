import Style from '../css/Index.module.css';
import { motion, useTransform, useMotionValue, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import ServiceItemsList from './jsonData/ServiceItemsList'
import ServiceItems from './ServiceItems';
import gsap from 'gsap';


const Services = ({  }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.gsap-service-wrapper',
				toggleActions: 'play none none none',
				start: 'top center',
				// markers: true,
			}
		})

		tl.fromTo('.gsap-service-line', {
			width: 0,
		},
		{
			width: '100%',
			duration: .84,
			ease: 'sine.in',
			stagger: .1,
		}, 0)

		tl.fromTo('.gsap-service-wrapper h2', {
			y: 10,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			delay: .5,
			duration: .34,
			ease: 'sine.inOut',
			stagger: .1,
		}, 0)
	}, [])

	return (
		<>
            {ServiceItemsList.map((item, index) => (
                <div key={index} className={`gsap-service-wrapper ${Style.serviceItemWrapper}`}>
                    <ServiceItems
                        item={item}
                        isActiveSection={index === activeIndex}
                        id={index}
                        onActiveIndex={setActiveIndex}
                    />
					<div className={`gsap-service-line ${Style.serviceItemLine}`}></div>
					{
						ServiceItemsList.length === index + 1
						?
						<div className={`gsap-service-line ${Style.serviceItemLine} ${Style.serviceItemLineBottom}`}></div>
						:
						''
					}
                </div>
            ))}
        </>
	);
}

export default Services;
