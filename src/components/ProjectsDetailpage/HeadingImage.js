import { useEffect } from 'react';
import Style from '../../css/ProjectsDetail.module.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeadingImage = ({ image }) => {

	useEffect(() => {
		gsap.to('.gsap-headingProjects-image', {
			borderRadius: '200px 0 50px 0',
			height: 700,
			duration: 1,
			ease: 'power3.Out',
			onComplete: () => {
				ScrollTrigger.refresh();
			},
			scrollTrigger: {
				trigger: '.gsap-headingProjects-image',
				toggleActions: 'play none none none',
				start:'35% 70%',
				// markers: true,
			}
		})
	},[])

	return (
		<div className={Style.headingimageWrapper}>
            <img className={`gsap-headingProjects-image ${Style.headingimage}`} src={image} />
		</div>
	 );
}

export default HeadingImage;
