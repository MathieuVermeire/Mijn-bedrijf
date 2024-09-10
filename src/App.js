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

function App() {
  return (
		<div className='app'>
			<BrowserRouter>
				<ScrollToTop />
				<Header/>
				<Routes>
					<Route path='/' element={<Index/>}></Route>
					<Route path='/over-mij' element={<About/>}></Route>
					<Route path='/projecten' element={<Projects/>}></Route>
					<Route path='/projecten/:projectId' element={<ProjectsDetail/>}></Route>
					<Route path='/contact' element={<Contact/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
