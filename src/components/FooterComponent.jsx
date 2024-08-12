import { Button } from 'react-bootstrap';
import '../styles/component-styles/footer-component.css';

const FooterComponent = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-wrapper">
			<footer>
				<div className="container">
					<div className="row">
						<div className="kontak col-sm-6 col-md-4 item">
							<img src="/img/logo-piksi.png" alt="" />
							<p>
								Jalan Serang-Cilegon No. KM. 8, Serang, Kecamatan Kramatwatu,
								Kabupaten Serang, Banten 42161
							</p>
							<ul>
								<li className="bi bi-telephone-fill">
									<p>0812-1933-3386</p>
								</li>
								<li className="bi bi-whatsapp">
									<p>0812-1933-3386</p>
								</li>
								<li className="bi bi-mailbox2">
									<p>Kode Pos: 42161</p>
								</li>
								<li className="bi bi-envelope-at-fill">
									<p>admin@piksiinputserang.ac.id</p>
								</li>
							</ul>
						</div>
						<div className="col-6 col-sm-6 col-md-2 item">
							<h3>Menu</h3>
							<ul>
								<li>
									<a href="#landingPage">Beranda</a>
								</li>
								<li>
									<a href="#jenjangPendidikan">Pilihan Program Studi</a>
								</li>
								<li>
									<a href="#infoPmb">Info PMB</a>
								</li>
								<li>
									<a href="#fasilitasKampus">Fasilitas Kampus</a>
								</li>
							</ul>
						</div>
						<div className="col-6 col-sm-6 col-md-2 item">
							<h3>Beasiswa</h3>
							<ul>
								<li>
									<a href="/beasiswa-kip">Kartu Indonesia Pintar (KIP)</a>
								</li>
								<li>
									<a href="/beasiswa-pemkot-cilegon">Pemkot Cilegon (KCS)</a>
								</li>
								<li>
									<a href="/beasiswa-peduli-banten">Peduli Banten (BPB)</a>
								</li>
							</ul>
						</div>
						<div className="col-6 col-sm-6 col-md-2 item">
							<h3>Dormitory</h3>
							<ul>
								<li>
									<a href="#homeStaySerang">Homestay Serang</a>
								</li>
								<li>
									<a href="#infoKosSerang">Info Kos Serang</a>
								</li>
								<li>
									<a href="#mamikos">Mamikos</a>
								</li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-2 item">
							<h3>Bantuan</h3>
							<ul>
								<li>
									<a href="#faq">FAQ</a>
								</li>
								<li>
									<a
										href="https://wa.me/+6281219333386?text=Halo%20saya%20mau%20bertanya%20seputar%20Penerimaan%20Mahasiswa%20Baru%20(PMB)"
										target="_blank">
										<Button>Customer Support</Button>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="item social">
						<a href="#">
							<i className="bi bi-facebook"></i>
						</a>
						<a href="#">
							<i className="bi bi-twitter"></i>
						</a>

						<a
							href="https://www.instagram.com/official.poltek.piksi/"
							target="_blank">
							<i className="bi bi-instagram"></i>
						</a>
					</div>
					<p className="mt-3 text-center">
						Politeknik Piksi Input Serang &copy; {currentYear}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default FooterComponent;
