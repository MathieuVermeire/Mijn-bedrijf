import logo from './logo.svg';
import "react-slideshow-image/dist/styles.css";

import logoLeft from './assets/img/logo/logo-left.svg';
import logoRight from './assets/img/logo/logo-right.svg';
import logoCenter from './assets/img/logo/logo-center.svg';

import './App.css';
import { useScroll, useTransform, motion, delay } from "framer-motion"
import Header from './components/permanent/Header';
import gsap from 'gsap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index'
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectsDetail from './pages/ProjectsDetail';
import ScrollToTop from './components/global/ScrollToTop';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/permanent/Footer';
import { useLocationChange } from './hooks/useLocationChange';
import Gsap from './components/global/Gsap';
import HandleScroll from './components/global/HandleScroll';

function App() {
	let mouseRef = useRef(null);
	const boxRef = useRef();

	const [loading, setLoading] = useState(true);
	const [headerLogo, setHeaderLogo] = useState(false);
	const [inSlideshow, setInSlideshow] = useState(null);
	const [slideshowTrack, setSlideshowTrack] = useState(null);

	const [mouseState, setMouseState] = useState({
		xMain: 0,
		yMain: 0,
		xTrailing: 0,
		yTrailing: 0,
	});

	const handleMouseMove = e => {
		const {clientX, clientY} = e;


		setTimeout(() => {
			setMouseState({
				xMain: clientX - 40,
				yMain: clientY - 40,
			})
		  }, 100);

	}

	useEffect(() => {
		const tl = gsap.timeline();


		// q.forEach(element => {
		// });


		if(sessionStorage.getItem("MyCat") !== 'Tom') {
			tl.to('.loadingWrapper', {
				top: '50%',
				duration: .9,
				ease: "sine.inOut",
			},0);

			tl.to('.left', {
				top: '5rem',
				duration: 1.2,
				delay: .1,
				ease: "power2.inOut",
			}, 0)

			tl.to('.right', {
				top: '5rem',
				duration: 1.2,
				delay: .3,
				ease: "power2.inOut",
			}, 0)

			tl.to('.loadingWrapper', {
				top: '25%',
				opacity: 0,
				duration: 1.5,
				ease: "expo.in",
				delay: .6,
				onComplete: () => {
					setLoading(false);
					setHeaderLogo(true);
				},
			}, 1)
		}

		if(loading === false || sessionStorage.getItem("MyCat") === 'Tom' ) {
			gsap.to('.app',{
				opacity: 1,
				duration: 1,
			})
		}

	},[loading])

	const handleAppScroll = (e) => {
		// console.log(e);
	}

		return (
			<div>
				{ loading === false || sessionStorage.getItem("MyCat") === 'Tom'
				?
				(
					<motion.div ref={boxRef} style={{ opacity: 0 }} className='app' onScroll={e => handleAppScroll(e)} onMouseMove={handleMouseMove}>
						<div className={inSlideshow ? `cursor-large cursor` : `cursor`} style={{left: mouseState.xMain, top: mouseState.yMain}} ref={mouseRef}>
							<div style={inSlideshow ? {opacity: `1`} :  {opacity: 0}} className='cursor-in'>{inSlideshow ? slideshowTrack : ''}</div>
						</div>
						<BrowserRouter>
							<Gsap loading={loading} boxRef={boxRef}/>
							{/* <HandleScroll /> */}
							<ScrollToTop />
							<Header animation={headerLogo}/>
							<Routes>
								<Route path='/' element={<Index/>}></Route>
								<Route path='/over-mij' element={<About/>}></Route>
								<Route path='/projecten' element={<Projects/>}></Route>
								<Route path='/projecten/:projectId' element={<ProjectsDetail slideshowTrack={slideshowTrack} onSlideshowTrack={setSlideshowTrack} onInSlideshow={setInSlideshow}/>}></Route>
								<Route path='/contact' element={<Contact/>}></Route>
							</Routes>
							<Footer />
						</BrowserRouter>
					</motion.div>
				)
					:
					null
				}
					{
				 	loading === true && sessionStorage.getItem("MyCat") !== 'Tom'
				 	?
				 	(
				 		<div className='loading'>
				 		<div className='loadingWrapper'>
				 			<div className='logoWrapper'>
				 				<div className='left'>
				 					<img className='' src={logoLeft} alt='' />
				 				</div>
				 				<div className='center'>
				 					<img className='' src={logoCenter} alt='' />
				 				</div>
				 				<div className='right'>
				 					<img className='' src={logoRight} alt='' />
				 				</div>
				 			</div>
				 		</div>
				 		</div>
				 	)
				 :
				 null
				 }
			</div>
		);

}

export default App;
