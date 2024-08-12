import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { useEffect } from 'react';

import '../styles/component-styles/navbar-component-second.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const NavbarComponentSecond = () => {
	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector('.navbar');
			if (window.scrollY > 50) {
				navbar.classList.add('navbar-scrolled');
			} else {
				navbar.classList.remove('navbar-scrolled');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Navbar expand="lg" className="navbar-second" fixed="top">
			<Container>
				<div className="navbar-left d-flex align-items-center">
					<Navbar.Brand href="/">
						<img src="/img/logo-piksi.png" alt="Logo" className="logo" />
					</Navbar.Brand>
					<h2 className="d-flex align-items-center m-0 text-white">
						PMB 2024/2025
					</h2>
				</div>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link href="/">Beranda</Nav.Link>
						<NavDropdown title="Beasiswa" id="basic-nav-dropdown">
							<NavDropdown.Item href="/beasiswa-kip">
								Kartu Indonesia Pintar (KIP)
							</NavDropdown.Item>
							<NavDropdown.Item href="/beasiswa-pemkot-cilegon">
								Pemkot Cilegon (KCS)
							</NavDropdown.Item>
							<NavDropdown.Item href="/beasiswa-peduli-banten">
								Peduli Banten (Yayasan)
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Informasi" id="basic-nav-dropdown">
							<NavDropdown.Item href="/biaya-kuliah">
								Biaya Kuliah
							</NavDropdown.Item>
							<NavDropdown.Item href="/pemberkasan">
								Pemberkasan
							</NavDropdown.Item>
							<NavDropdown.Item href="/fasilitas">
								Fasilitas PMB
							</NavDropdown.Item>

							<NavDropdown.Item href="/brosur">Brosur</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Kegiatan" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">PPM</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Dormitory" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Homestay Serang
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Info Kos Serang
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Mamikos</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<div className="navbar-right">
						<Button
							className="button-daftar me-2"
							href="https://piksiinputserang.ac.id/pmb-v2/register">
							<FontAwesomeIcon icon={faUserGraduate} /> Daftar
						</Button>
						<Button
							className="button-masuk"
							href="https://piksiinputserang.ac.id/pmb-v2/login">
							<i className="bi bi-box-arrow-in-right bold-icon"></i>Masuk
						</Button>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponentSecond;
