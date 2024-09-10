import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index'
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectsDetail from './pages/ProjectsDetail';
import ScrollToTop from './components/ScrollToTop';
import { useRef, useState } from 'react';

function App() {
	let mouseRef = useRef(null);
	const [mouseState, setMouseState] = useState({
		xMain: 0,
		yMain: 0,
		xTrailing: 0,
		yTrailing: 0,
	})

	const [inSlideshow, setInSlideshow] = useState(null);
	const [slideshowTrack, setSlideshowTrack] = useState(null);

	const handleMouseMove = e => {
		const {clientX, clientY} = e;


		setTimeout(() => {
			setMouseState({
				xMain: clientX,
				yMain: clientY,
			})
		  }, 100);

		// console.log(clientX, clientY);
	}
	// console.log(inSlideshow);
	

	return (
			<div className='app' onMouseMove={handleMouseMove}>
				<div className={inSlideshow ? `cursor cursor-large` : `cursor`} style={{left: mouseState.xMain, top: mouseState.yMain}} ref={mouseRef}>
					<div className='cursor-in'>{inSlideshow ? slideshowTrack : ''}</div>
				</div>
				<BrowserRouter>
					<ScrollToTop />
					<Header/>
					<Routes>
						<Route path='/' element={<Index/>}></Route>
						<Route path='/over-mij' element={<About/>}></Route>
						<Route path='/projecten' element={<Projects/>}></Route>
						<Route path='/projecten/:projectId' element={<ProjectsDetail slideshowTrack={slideshowTrack} onSlideshowTrack={setSlideshowTrack} onInSlideshow={setInSlideshow}/>}></Route>
						<Route path='/contact' element={<Contact/>}></Route>
					</Routes>
				</BrowserRouter>
			</div>
	);
}

export default App;
