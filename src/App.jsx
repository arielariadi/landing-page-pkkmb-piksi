// router
import { Routes, Route, useLocation } from 'react-router-dom';

// components
import NavbarComponent from './components/NavbarComponent';
import NavbarComponentSecond from './components/NavbarComponentSecond';
import FooterComponent from './components/FooterComponent';

import LandingPage from './pages/LandingPage';

// beasiswa pages
import BeasiswaKipPage from './pages/beasiswa/BeasiswaKipPage';
import BeasiswaPemkotCilegonPage from './pages/beasiswa/BeasiswaPemkotCilegonPage';
import BeasiswaPeduliBantenPage from './pages/beasiswa/BeasiswaPeduliBantenPage';

// informasi pages
import BiayaKuliahPage from './pages/informasi/BiayaKuliahPage';
import PemberkasanPage from './pages/informasi/PemberkasanPage';
import FasilitasPage from './pages/informasi/FasilitasPage';

function App() {
	const location = useLocation();

	const isRootPath = location.pathname === '/';

	return (
		<>
			{isRootPath ? <NavbarComponent /> : <NavbarComponentSecond />}

			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/beasiswa-kip" element={<BeasiswaKipPage />} />
				<Route
					path="/beasiswa-pemkot-cilegon"
					element={<BeasiswaPemkotCilegonPage />}
				/>
				<Route
					path="/beasiswa-peduli-banten"
					element={<BeasiswaPeduliBantenPage />}
				/>

				<Route path="/biaya-kuliah" element={<BiayaKuliahPage />} />
				<Route path="/pemberkasan" element={<PemberkasanPage />} />
				<Route path="/fasilitas" element={<FasilitasPage />} />
			</Routes>

			<FooterComponent />
		</>
	);
}

export default App;
