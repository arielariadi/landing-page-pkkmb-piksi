import '../styles/component-styles/footer-component.css';

const FooterComponent = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-wrapper">
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-3 item">
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
									<a href="#beasiswa">Info PMB</a>
								</li>
								<li>
									<a href="#fasilitasKampus">Fasilitas Kampus</a>
								</li>
								<li>
									<a href="#faq">FAQ</a>
								</li>
							</ul>
						</div>
						<div className="kontak col-sm-6 col-md-3 item">
							<h3>Kontak</h3>
							<ul>
								<li className="bi bi-telephone-fill">
									<p>0812-1933-3386</p>
								</li>
								<li className="bi bi-whatsapp">
									<p>0812-1933-3386</p>
								</li>
							</ul>
						</div>
						<div className="col-md-6 item text">
							<h3>Politeknik Piksi Input Serang</h3>
							<p>
								Jalan Serang-Cilegon No. KM. 8, Serang, Kecamatan Kramatwatu,
								Kabupaten Serang, Banten 42161
							</p>
						</div>
						<div className="col item social">
							<a href="#">
								<i className="bi bi-facebook"></i>
							</a>
							<a href="#">
								<i className="bi bi-twitter"></i>
							</a>

							<a href="#" target="_blank">
								<i className="bi bi-instagram"></i>
							</a>
						</div>
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
