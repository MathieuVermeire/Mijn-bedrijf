import gsap from "gsap";
import { useEffect } from "react";
import { useLocationChange } from "../../hooks/useLocationChange";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Gsap = ({ loading, boxRef }) => {
	const location = useLocation();

	useLocationChange((location) => {
		console.log('handle route change here', location)
	})

	const q = gsap.utils.selector(boxRef);
		useEffect(() => {
			ScrollTrigger.refresh();


			// gsap.fromTo('.textAnimation', {
			// 	opacity: 0,
			// }
			// ,
			// {
			// 	opacity: 1,
			// 	ease: 'sine.inOut',
			// 	duration: 1,
			// 	scrollTrigger: {
			// 		trigger: '.textAnimation',
			// 		start: 'start 70%',
			// 		markers: true,
			// 		toggleActions: 'play none none none',
			// 	}
			// }, 0)

			// gsap.fromTo('.titleAnimation', {
			// 	opacity: 0,
			// 	y: 30,
			// }
			// ,
			// {
			// 	opacity: 1,
			// 	y: 0,
			// 	ease: 'sine.inOut',
			// 	duration: 1,
			// 	scrollTrigger: {
			// 		trigger: 'titleAnimation',
			// 		start: 'start 70%',
			// 		markers: true,
			// 		toggleActions: 'play none none none',
			// 	}
			// }, 0)

			if(localStorage.getItem("MyCat") === "Tom") {
				q(".textAnimation").forEach((text) => {
					const tlScroll = gsap.timeline({
						scrollTrigger: {
							trigger: text,
							start: 'start 70%',
							// markers: true,
							toggleActions: 'play none none none',
						}
					});

					tlScroll.fromTo(text, {
						opacity: 0,
					}
					,
					{
						opacity: 1,
						ease: 'sine.inOut',
						duration: 1,
					}, 0)
				})

				q(".imageAnimation").forEach((image) => {
					const tlScroll = gsap.timeline({
						scrollTrigger: {
							trigger: image,
							start: 'start 70%',
							// markers: true,
							toggleActions: 'play none none none',
						}
					});

					tlScroll.fromTo(image, {
						opacity: 0,
					}
					,
					{
						opacity: 1,
						ease: 'sine.inOut',
						duration: 1,
					}, 0)
				})

				q(".titleAnimation").forEach((title) => {
					const tlScroll = gsap.timeline({
						scrollTrigger: {
							trigger: title,
							start: 'start 70%',
							// markers: true,
							toggleActions: 'play none none none',
						}
					});

					tlScroll.fromTo(title, {
						opacity: 0,
						y: 30,
					}
					,
					{
						opacity: 1,
						y: 0,
						ease: 'sine.inOut',
						duration: 1,
					}, 0)
				})
		}
	}, [loading, location])
	return null
}

export default Gsap;
