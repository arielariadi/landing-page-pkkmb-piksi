// router
import { Routes, Route } from 'react-router-dom';

// components
import NavbarComponent from './components/NavbarComponent';

// pages
import LandingPage from './pages/LandingPage';
import BeasiswaKipPage from './pages/beasiswa/BeasiswaKipPage';

function App() {
	return (
		<>
			<NavbarComponent />

			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/beasiswa-kip" element={<BeasiswaKipPage />} />
			</Routes>
		</>
	);
}

export default App;
