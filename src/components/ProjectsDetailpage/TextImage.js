import gsap from 'gsap';
import Style from '../../css/ProjectsDetail.module.css';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextImage = ({ title, copy, webLink, image, mirror }) => {
	const boxRef = useRef();

	const q = gsap.utils.selector(boxRef);
	useEffect(() => {

		q(".image-detail").forEach(image => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: image,
					start: 'start 70%',
					// markers: true,
					toggleActions: 'play none none reset',
				}
			});

			tl.to(image,
			{
				height: `${image.height * 1.15}`,
				ease: 'sine.inOut',
				duration: .8,
				onComplete: () => {
					ScrollTrigger.refresh();
				}
			}, 0)

		})

	}, [])

	return (
        <div ref={boxRef} className='container'>
            <div className={mirror === true ? `${Style.textImageMirror} ${Style.textImage} ` : `${Style.textImage}`}>
                <div className={`${Style.textImageCopy}`}>
                    <h2 className='titleAnimation'>{ title }</h2>
                    <p className={`textAnimation ${Style.textImageP}`}>{ copy }</p>
										<a className={`${Style.webLink}`} target='_blank' href='https://www.matheyo.be'>{webLink}</a>
                </div>
                <img className={`image-detail ${Style.textImageImage}`} src={ image } />
            </div>
        </div>
	 );
}

export default TextImage;
