// router
import { Routes, Route, useLocation } from 'react-router-dom';

// components
import NavbarComponent from './components/NavbarComponent';
import NavbarComponentSecond from './components/NavbarComponentSecond';
import FooterComponent from './components/FooterComponent';

// pages
import LandingPage from './pages/LandingPage';
import BeasiswaKipPage from './pages/beasiswa/BeasiswaKipPage';

function App() {
	const location = useLocation();

	const isRootPath = location.pathname === '/';

	return (
		<>
			{isRootPath ? <NavbarComponent /> : <NavbarComponentSecond />}

			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/beasiswa-kip" element={<BeasiswaKipPage />} />
			</Routes>

			<FooterComponent />
		</>
	);
}

export default App;
