import Style from '../../css/ProjectsDetail.module.css';
import { createContext, useState, useRef, useEffect } from 'react';
import SlideshowItem from './SlideshowItem';
import { Slide, Fade } from "react-slideshow-image";
const SlideshowContext = createContext();

// **** CREATE SLIDESHOW ****

// Necesities

// array of images
// a image is removed and then added at the beginning of the array on each slide attempt. This way the image will always become visible again.
// buttons for sliding through the slideshow
// 

const Slideshow = ({ copy, images, slideshowTrack, onSlideshowTrack, onInSlideshow }) => {
	const [context, setContext] = useState(images);
	const timer = useRef(null);

	useEffect(() => {
		// if (timer.current) clearTimeout(timer.current);
		// timer.current = setTimeout(() => {
		// 	// Move deactivated slide out when edge is false
		// 	// Move activated slide in when edge is true
		// 	let tmp = context.items;
		// 	let item;
		// 	if (context.items.length > 1) {
		// 		// item = tmp.shift();
		// 		// tmp.push(item);
		// 	}


			

		// 	// setContext({ ...context });
		// }, 2500);

		// return () => clearTimeout(timer.current);

	});

	const handleIndex = e => {
		// let tmp = [...context];
		// let removed = tmp.shift();
		// tmp.push(removed);
		// setContext(tmp);
		let children = e.currentTarget.children;

		let part1 = e.currentTarget.children[0];
		let part2 = e.currentTarget.children[1];

		// console.log(part1, part2);

		for (let i = 0; i < children.length; i++) {
			const element = children[i];
			element.style.opacity = 1;
			if(slideshowTrack === 'Prev') {
				if(parseInt(element.style.zIndex) <= 0) {
					element.style.opacity = 0;
					setTimeout(() => {
						element.style.zIndex = children.length - 1;
					}, 300);

				} else {
					element.style.opacity = 1;
					setTimeout(() => {
						element.style.zIndex = parseInt(element.style.zIndex) - 1;
					}, 300);
				}
			} else if(slideshowTrack === 'Next') {
				if(parseInt(element.style.zIndex) >= children.length - 1) {
					element.style.opacity = 0;
					setTimeout(() => {
						element.style.zIndex = 0;
		
					}, 300);
				} else {
					element.style.opacity = 1;
					setTimeout(() => {
						element.style.zIndex = parseInt(element.style.zIndex) + 1;
					}, 300);
				}
			}
			// console.log(element.style.zIndex);
		}
		// e.currentTarget.children[0].style.zIndex = 0;
	}

	const handleSlideshowMouseEnter = e => {
		onInSlideshow(true);
	}

	const handleSlideshowMouseLeave = e => {
		onInSlideshow(false);
	}

	const handleSlideshowMouseMove = e => {
		const rect = e.currentTarget.getBoundingClientRect();
		const y = e.clientY - rect.top + 20;
		const x = e.clientX - rect.left;

		if(x <= rect.width / 2) {
			onSlideshowTrack('Prev');
			// console.log(slideshowTrack);
		} else {
			onSlideshowTrack('Next')
			// console.log(slideshowTrack);
		}

		// console.log(rect.width)
	}

	return (
			<div className={`container ${Style.slideshowWrapper}`}>
				<p className={Style.slideshowCopy}>{copy}</p>
				<div className={Style.slideshowGrabber} onMouseMove={e => handleSlideshowMouseMove(e)} onMouseEnter={e => handleSlideshowMouseEnter(e)} onMouseLeave={e => handleSlideshowMouseLeave(e)} onClick={e => handleIndex(e)}
				>
					<Fade className='part1'>
						{context.map((image, index) => (
							<div style={{zIndex: context.length-index -1}} className={Style.slideshowItem} key={index}>
								{/* <img src={image} /> */}
								<SlideshowItem image={image} slideshowContext={SlideshowContext} ></SlideshowItem>
							</div>
						))}
					</Fade>
				</div>
				
			</div>
		// <SlideshowContext.Provider value={[context, setContext]}>
		// </SlideshowContext.Provider>
	 );
}

export default Slideshow;
