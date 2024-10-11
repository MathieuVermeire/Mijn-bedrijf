import Style from '../css/About.module.css';
import bossen from '../assets/img/about/bossen.png'
import mugshot from '../assets/img/about/mugshot.jpg'
import tennis from '../assets/img/about/tennis.png'
import { useScroll, useTransform, motion, delay } from "framer-motion"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const scrollRef = useRef(null);
	const textRef = useRef(null);

	// const scroll = useScroll({
	// 	target: scrollRef,
	// 	offset: ["start end"],
	// })

	// console.log(scroll);

	// const position = useTransform(scrollY, [0,1], ["absolute", "fixed"])

	useEffect(() => {

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#scrollref',
				start: 'center center',
				toggleActions: 'play none reverse reverse',
				// markers: true,
			}
		});
		console.log('useEffect');

		tl.to('#textRef', {
			opacity: 0,
			duration: .3,
		})

	}, [])

	return (
		<article className='container'>
			<div className={Style.aboutContainer}>
				<style>
					{`body{background-color: #111111;}`}
				</style>
					<div id='textRef' ref={textRef}
					 	className={`${Style.aboutText} container`}>
					<div>
						<h2 className='titleAnimation'>Over mij</h2>
						<p className={`textAnimation ${Style.aboutParagraph}`}>
							Als Deviner ben ik geinteresseerd in alles Development. Hierin heb ik ook mijn expertise als Full-stack developer.
							Ik maak websites die hedendaags zijn. Ik heb graag een gevoel van orde in mijn sites. Zowel op de achtergrond als de voorgrond. Als alles mooi geschreven is vertaald dit sowieso ook naar hoe de website presteert voor de klant.
						</p>
						<p className={`textAnimation ${Style.aboutParagraph}`}>Ik gebruik de volgende talen om mijn sites te maken: HTML, CSS, JS, PHP, React, Next.js. Ik ben ook onderbouwd in verschillende CMS': Craft CMS, Strapi.</p>
						<p className={`textAnimation ${Style.aboutParagraph}`}>In mijn persoonlijk leven ben ik heel graag bezig met sporten. Tenissen doe ik toch al enkele jaren en ik ga over het algemeen ook graag gaan lopen, fietsen & fitnessen.</p>
					</div>
					</div>
					<div id='scrollRef' className={Style.aboutImages}>
						<img src={mugshot} />
						<img src={bossen} />
						<img src={tennis} />
					</div>
			</div>
		</article>
	 );
}

export default About;
