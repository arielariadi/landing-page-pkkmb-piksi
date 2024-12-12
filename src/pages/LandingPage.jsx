/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/landing-page.css';

const LandingPage = () => {
	const swiperRef = useRef(null);

	useEffect(() => {
		if (swiperRef.current) {
			const slides = swiperRef.current.querySelectorAll('.swiper-slide');
			let maxHeight = 0;

			slides.forEach(slide => {
				const height = slide.getBoundingClientRect().height;
				if (height > maxHeight) {
					maxHeight = height;
				}
			});

			slides.forEach(slide => {
				slide.style.height = `${maxHeight}px`;
			});
		}
	}, []);

	useEffect(() => {
		AOS.init({
			disable: function () {
				var maxWidth = 768;
				return window.innerWidth < maxWidth;
			},
			duration: 1200,
			easing: 'ease-in-out',
			once: false,
			mirror: true,
			anchorPlacement: 'top-bottom',
		});
		AOS.refresh();
	}, []);

	const currentDate = new Date();
	const currentYear = new Date().getFullYear();
	const previousYear = new Date().getFullYear() - 1;
	const nextYear = new Date().getFullYear() + 1;

	const gelombangData = [
		{
			gelombang: `Gelombang 1`,
			tanggalMulai: new Date(previousYear, 10, 1), // 1 November tahun sebelumnya
			tanggalSelesai: new Date(currentYear, 0, 30), // 30 Januari tahun sekarang
		},
		{
			gelombang: `Gelombang 1`,
			tanggalMulai: new Date(currentYear, 10, 1), // 1 November tahun sekarang
			tanggalSelesai: new Date(nextYear, 0, 30), // 30 Januari tahun depan
		},
		{
			gelombang: 'Gelombang 2',
			tanggalMulai: new Date(currentYear, 0, 31), // 31 Januari tahun ini
			tanggalSelesai: new Date(currentYear, 3, 30), // 30 April tahun ini
		},
		{
			gelombang: 'Gelombang 3',
			tanggalMulai: new Date(currentYear, 4, 1), // 1 Mei tahun ini
			tanggalSelesai: new Date(currentYear, 5, 30), // 30 Juni tahun ini
		},
		{
			gelombang: 'Gelombang 4',
			tanggalMulai: new Date(currentYear, 6, 1), // 1 Juli tahun ini
			tanggalSelesai: new Date(currentYear, 7, 30), // 30 Agustus tahun ini
		},
		{
			gelombang: 'Gelombang 5',
			tanggalMulai: new Date(currentYear, 8, 1), // 1 September tahun ini
			tanggalSelesai: new Date(currentYear, 8, 30), // 30 September tahun ini
		},
		{
			gelombang: 'Gelombang 6',
			tanggalMulai: new Date(currentYear, 9, 1), // 1 Oktober tahun ini
			tanggalSelesai: new Date(currentYear, 9, 11), // 11 Oktober tahun ini
		},
	];

	const isDateInRange = (date, startDate, endDate) => {
		const checkDate = new Date(date);
		const start = new Date(startDate);
		const end = new Date(endDate);

		checkDate.setHours(0, 0, 0, 0);
		start.setHours(0, 0, 0, 0);
		end.setHours(0, 0, 0, 0);

		// Jika rentang tanggal melintasi tahun baru
		if (start > end) {
			// Periksa apakah tanggal berada di antara start sampai akhir tahun atau awal tahun sampai end
			return checkDate >= start || checkDate <= end;
		}

		return checkDate >= start && checkDate <= end;
	};

	const activeGelombang = gelombangData.filter(item =>
		isDateInRange(currentDate, item.tanggalMulai, item.tanggalSelesai)
	);

	console.log('Tanggal sekarang:', currentDate);
	console.log('Gelombang Aktif:', activeGelombang);

	return (
		<>
			<div className="landing-page" id="landingPage">
				<section className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
					<Container>
						<Row className="jumbotron">
							<Col lg="6" data-aos="fade-right">
								<h1 className="text-white">Penerimaan Mahasiswa Baru</h1>

								<div className="jumbotron-content-wrapper">
									<p className="text-white">Politeknik Piksi Input Serang</p>
									<span>"Kampus Vokasi Berbasis Teknologi Informasi"</span>
								</div>

								{activeGelombang.length > 0 ? (
									activeGelombang.map((item, index) => (
										<div key={index} className="gelombang-box">
											<div className="gelombang-wrapper">
												<div className="gelombang-content-wrapper">
													<p className="gelombang-text">{item.gelombang}</p>
													<p className="gelombang-date">
														{item.tanggalMulai.toLocaleDateString('id-ID', {
															day: '2-digit',
															month: 'long',
															year: 'numeric',
														})}{' '}
														s/d{' '}
														{item.tanggalSelesai.toLocaleDateString('id-ID', {
															day: '2-digit',
															month: 'long',
															year: 'numeric',
														})}
													</p>
												</div>
											</div>
										</div>
									))
								) : (
									<div className="gelombang-box">
										<div className="gelombang-wrapper">
											<div className="gelombang-content-wrapper">
												<p className="text-white">
													Tidak ada gelombang pendaftaran aktif saat ini.
												</p>
											</div>
										</div>
									</div>
								)}

								<div className="jumbotron-button-wrapper">
									<a href="https://piksiinputserang.ac.id/pmb-v2/register">
										<Button className="button-daftar me-2">
											Daftar Sekarang
										</Button>
									</a>
									<a href="#infoPmb" className="panduan-pmb">
										<p>
											Panduan PMB <i className="bi bi-arrow-right"></i>
										</p>
									</a>
								</div>
							</Col>

							<Col lg="6" className="hero-img" data-aos="fade-left">
								<div className="hero-img-wrapper">
									<img
										src="/img/hero-img.jpeg"
										alt="Landing Page"
										className="img-fluid"
									/>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>

			<div className="jenjang-pendidikan" id="jenjangPendidikan">
				<section className="w-100 min-vh-100 d-flex">
					<Container>
						<div className="jenjang-pendidikan-header" data-aos="fade-up">
							<h4>PILIHAN PROGRAM STUDI</h4>
						</div>

						<div
							className="jenjang-pendidikan-header-detail"
							data-aos="fade-up">
							<h2>Membangun Masa Depan dengan Pendidikan Berkualitas</h2>
						</div>

						<div className="carousel-wrapper-jenjang-pendidikan">
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								pagination={{ clickable: true }}
								autoplay={{ delay: 3000, disableOnInteraction: false }}
								modules={[Navigation, Pagination, Autoplay]}
								ref={swiperRef}
								className="mySwiper">
								<SwiperSlide>
									<Container>
										<Row>
											<Col data-aos="fade-right">
												<h3>D4 - Sarjana Terapan</h3>
												<ul className="custom-list">
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D4-Rekayasa Keamanan Siber
														<span>
															(Penetration Tester, Network Security
															Administrator, Secure Software Developer)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D4-Bisnis Digital
														<span>
															(Business Service Analyst, Business Analyst,
															Digital Enterpreneur)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D4-Akuntansi Perpajakan{' '}
														<span>
															(Staff Akuntansi/Perpajakan, Auditor, Konsultan
															Akuntasi & Perpajakan, Akuntan Publik)
														</span>
													</li>
												</ul>
											</Col>
											<Col
												className="carousel-img-jenjang-pendidikan"
												data-aos="fade-left">
												<img
													className="d-block w-100"
													src="/img/sarjana-terapan.jpeg"
													alt="First slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>
								<SwiperSlide>
									<Container>
										<Row>
											<Col data-aos="fade-right">
												<h3>D3 - Diploma 3</h3>
												<ul className="custom-list">
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D3-Manajemen Informatika
														<span>
															(Keahlian Pemrogramam Berbasis Objek, Pemrograman
															Berbasis Web, Database Administration, Teknis
															Jaringan)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D3-Akuntansi
														<span>
															(Accounting Officer, Junior Auditor, Tax Officer,
															Accounting Information System, Finance Officer)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D3-Sekretari
														<span>
															(General Affair, Sekretaris Eksekutif, Public
															Relations, Entrepreneur)
														</span>
													</li>
												</ul>
											</Col>

											<Col
												className="carousel-img-jenjang-pendidikan"
												data-aos="fade-left">
												<img
													className="d-block w-100"
													src="/img/diploma-tiga.jpeg"
													alt="Second slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>
							</Swiper>
						</div>
					</Container>
				</section>
			</div>

			<div className="info-pmb" id="infoPmb">
				<section className="w-100 d-flex">
					<Container>
						<div className="info-pmb-header" data-aos="fade-up">
							<h4>INFO PMB</h4>
						</div>

						<div className="info-pmb-header-detail" data-aos="fade-up">
							<h2>Panduan Lengkap Untuk Calon Mahasiswa Baru</h2>
						</div>

						<div
							className="info-pmb-wrapper d-flex justify-content-center gap-3"
							data-aos="fade-up">
							<Card>
								<Card.Body className="d-flex flex-column justify-content-between">
									<Card.Img
										variant="top"
										src="/img/alur-pendaftaran-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">
										Alur Pendaftaran
									</Card.Title>

									<Card.Text className="text-center mt-3">
										Proses pendaftaran mahasiswa baru di kampus kami terdiri
										dari beberapa langkah penting yang harus diikuti oleh calon
										mahasiswa
									</Card.Text>

									<a href="#beasiswa">
										{' '}
										<Button>Info Lebih Lanjut</Button>
									</a>
								</Card.Body>
							</Card>

							<Card>
								<Card.Body className="d-flex flex-column justify-content-between">
									<Card.Img
										variant="top"
										src="/img/biaya-kuliah-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">
										Biaya Kuliah
									</Card.Title>

									<Card.Text className="text-center mt-3">
										Biaya kuliah mencakup berbagai kebutuhan pendidikan,
										termasuk biaya perkuliahan, fasilitas, dan layanan mahasiswa
									</Card.Text>
									<a href="/biaya-kuliah">
										<Button>Info Lebih Lanjut</Button>
									</a>
								</Card.Body>
							</Card>

							<Card>
								<Card.Body className="d-flex flex-column justify-content-between">
									<Card.Img
										variant="top"
										src="/img/beasiswa-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">Beasiswa</Card.Title>

									<Card.Text className="text-center mt-3">
										Politeknik Piksi Input Serang menyediakan berbagai beasiswa
										seperti beasiswa KIP Kuliah, Pemkot Cilegon, Peduli Banten
										(Yayasan)
									</Card.Text>

									<a href="#beasiswa">
										<Button>Info Lebih Lanjut</Button>
									</a>
								</Card.Body>
							</Card>

							<Card>
								<Card.Body className="d-flex flex-column justify-content-between">
									<Card.Img
										variant="top"
										src="/img/hasil-kelulusan-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">
										Hasil Kelulusan
									</Card.Title>

									<Card.Text className="text-center mt-3">
										Informasi bagi para pendaftar yang telah diterima menjadi
										mahasiswa baru Politeknik Piksi Input Serang dapat dilihat
										pada halaman berikut
									</Card.Text>

									<a href="#">
										<Button>Info Lebih Lanjut</Button>
									</a>
								</Card.Body>
							</Card>
						</div>
					</Container>
				</section>
			</div>

			<div className="beasiswa" id="beasiswa">
				<section className="w-100 min-vh-75 d-flex">
					<Container>
						<div className="beasiswa-header" data-aos="fade-up">
							<h4>BEASISWA</h4>
						</div>

						<div className="beasiswa-header-detail" data-aos="fade-up">
							<h2>Peluang Emas untuk Meraih Beasiswa</h2>
						</div>
						<div className="carousel-wrapper-beasiswa">
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								pagination={{ clickable: true }}
								autoplay={{ delay: 3000, disableOnInteraction: false }}
								modules={[Navigation, Pagination, Autoplay]}
								ref={swiperRef}
								className="mySwiper">
								<SwiperSlide>
									<Container>
										<Row>
											<Col data-aos="fade-right">
												<h3>Beasiswa Kartu Indonesia Pintar (KIP Kuliah)</h3>

												<p>
													Kartu Indonesia Pintar Kuliah (KIP Kuliah) adalah
													program bantuan pendidikan dari pemerintah untuk
													mahasiswa dari keluarga kurang mampu yang ingin
													melanjutkan kuliah ke perguruan tinggi negeri (PTN)
													atau perguruan tinggi swasta (PTS). Bantuan ini
													diberikan dalam bentuk uang tunai, perluasan akses,
													dan kesempatan belajar
												</p>

												<a href="/beasiswa-kip">
													<Button>Info Lebih Lanjut</Button>
												</a>
											</Col>
											<Col
												className="carousel-img-beasiswa"
												data-aos="fade-left">
												<img
													className="d-block w-100"
													src="/img/beasiswa-kip.png"
													alt="First slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>
								<SwiperSlide>
									<Container>
										<Row>
											<Col data-aos="fade-right">
												<h3>Beasiswa Pemkot Cilegon (KCS)</h3>

												<p>
													Kebijakan beasiswa full sarjana yang diimplementasikan
													melalui program Kartu Cilegon Sejahtera (KCS) ini
													menargetkan pemberian 1.000 beasiswa full sarjana per
													tahun. Mahasiswa yang mendapat beasiswa ini akan
													menerima bantuan Rp3.000.000 per semester. Tiap
													mahasiswa akan mendapat bantuan selama 8 semester yang
													berlaku di Perguruan Tinggi di seluruh Indonesia
												</p>

												<a href="/beasiswa-pemkot-cilegon">
													<Button>Info Lebih Lanjut</Button>
												</a>
											</Col>
											<Col
												className="carousel-img-beasiswa"
												data-aos="fade-left">
												<img
													className="d-block w-100"
													src="/img/beasiswa-kcs.png"
													alt="Second slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>

								<SwiperSlide>
									<Container>
										<Row>
											<Col data-aos="fade-right">
												<h3>Beasiswa Peduli Banten (Yayasan)</h3>

												<p>
													Beasiswa Peduli Banten adalah Beasiswa yang diberikan
													oleh Yayasan Piksi Input Serang Banten untuk lulusan
													SMA/SMK/MA/Sederajat dari Banten yang berasal dari
													keluarga kurang mampu ke jenjang Diploma Tiga (D3)
												</p>

												<a href="/beasiswa-peduli-banten">
													<Button>Info Lebih Lanjut</Button>
												</a>
											</Col>
											<Col
												className="carousel-img-beasiswa"
												data-aos="fade-left">
												<img
													className="d-block w-100"
													src="/img/beasiswa-peduli-banten.png"
													alt="Second slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>
							</Swiper>
						</div>
					</Container>
				</section>
			</div>

			<div className="fasilitas-kampus" id="fasilitasKampus">
				<section className="w-100 min-vh-100 d-flex">
					<Container>
						<div className="fasilitas-kampus-header" data-aos="fade-up">
							<h4>FASILITAS KAMPUS</h4>
						</div>

						<div className="fasilitas-kampus-header-detail" data-aos="fade-up">
							<h2>Fasilitas Terbaik untuk Kenyamanan Belajar Anda</h2>
						</div>

						<div
							className="carousel-wrapper-fasilitas-kampus d-flex justify-content-center"
							data-aos="fade-up">
							<Swiper
								spaceBetween={50}
								slidesPerView={3}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination, Autoplay]}
								ref={swiperRef}
								loop={true}
								className="mySwiper"
								breakpoints={{
									320: {
										slidesPerView: 1,
									},

									768: {
										slidesPerView: 3,
									},
								}}>
								<SwiperSlide>
									<Card>
										<Card.Img variant="top" src="/img/lab-pemrograman.jpeg" />
										<Card.ImgOverlay className="d-flex justify-content-center">
											<div className="card-content-wrapper">
												<div className="box-card-header">
													<Card.Title>Lab Pemrograman</Card.Title>
												</div>
											</div>
										</Card.ImgOverlay>
									</Card>
								</SwiperSlide>

								<SwiperSlide>
									<Card>
										<Card.Img variant="top" src="/img/gedung-kampus.jpg" />
										<Card.ImgOverlay className="d-flex justify-content-center">
											<div className="card-content-wrapper">
												<div className="box-card-header">
													<Card.Title>Gedung Kampus</Card.Title>
												</div>
											</div>
										</Card.ImgOverlay>
									</Card>
								</SwiperSlide>

								<SwiperSlide>
									<Card>
										<Card.Img variant="top" src="/img/aula.jpg" />
										<Card.ImgOverlay className="d-flex justify-content-center">
											<div className="card-content-wrapper">
												<div className="box-card-header">
													<Card.Title>Aula</Card.Title>
												</div>
											</div>
										</Card.ImgOverlay>
									</Card>
								</SwiperSlide>

								<SwiperSlide>
									<Card>
										<Card.Img variant="top" src="/img/perpustakaan.jpg" />
										<Card.ImgOverlay className="d-flex justify-content-center">
											<div className="card-content-wrapper">
												<div className="box-card-header">
													<Card.Title>Perpustakaan</Card.Title>
												</div>
											</div>
										</Card.ImgOverlay>
									</Card>
								</SwiperSlide>

								<SwiperSlide>
									<Card>
										<Card.Img variant="top" src="/img/ruang-kelas.jpg" />
										<Card.ImgOverlay className="d-flex justify-content-center">
											<div className="card-content-wrapper">
												<div className="box-card-header">
													<Card.Title>Ruang Kelas</Card.Title>
												</div>
											</div>
										</Card.ImgOverlay>
									</Card>
								</SwiperSlide>

								<SwiperSlide>
									<Card>
										<Card.Img variant="top" src="/img/mushola.jpg" />
										<Card.ImgOverlay className="d-flex justify-content-center">
											<div className="card-content-wrapper">
												<div className="box-card-header">
													<Card.Title>Mushola</Card.Title>
												</div>
											</div>
										</Card.ImgOverlay>
									</Card>
								</SwiperSlide>
							</Swiper>
						</div>
					</Container>
				</section>
			</div>

			<div className="box-pertanyaan">
				<section className="w-100 overflow-hidden">
					<Container className="box-pertanyaan-wrapper">
						<Row>
							<Col lg={8}>
								<div className="box-pertanyaan-content">
									<h2>Punya Pertanyaan Seputar PMB?</h2>
									<p>
										Klik tombol "Panduan PMB" untuk melihat informasi lebih
										lanjut mengenai Penerimaan Mahasiswa Baru Politeknik Piksi
										Input Serang atau tanya kami melalui fitur chat
									</p>
								</div>
							</Col>
							<Col lg={4}>
								<div className="box-pertanyaan-button">
									<a href="#infoPmb">
										<Button className="button-panduan-pmb">Panduan PMB</Button>
									</a>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>

			{/* <div className="faq" id="faq">
				<section className="w-100 d-flex overflow-hidden">
					<Container>
						<div className="faq-header">
							<h4>FAQ</h4>
						</div>

						<div className="faq-header-detail">
							<h2>Pertanyaan Umum dan Jawabannya</h2>
						</div>

						<Accordion data-aos="fade-up">
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									Lorem ipsum dolor sit amet consectetur adipisicing elit?
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Laborum necessitatibus aliquam deserunt quia, alias explicabo
									non aspernatur impedit eveniet expedita totam exercitationem?
									Dolore non repellat odio? Modi dolor rerum necessitatibus.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="1">
								<Accordion.Header>
									Lorem ipsum dolor sit amet consectetur adipisicing elit?
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Laborum necessitatibus aliquam deserunt quia, alias explicabo
									non aspernatur impedit eveniet expedita totam exercitationem?
									Dolore non repellat odio? Modi dolor rerum necessitatibus.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="2">
								<Accordion.Header>
									Lorem ipsum dolor sit amet consectetur adipisicing elit?
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Laborum necessitatibus aliquam deserunt quia, alias explicabo
									non aspernatur impedit eveniet expedita totam exercitationem?
									Dolore non repellat odio? Modi dolor rerum necessitatibus.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="3">
								<Accordion.Header>
									Lorem ipsum dolor sit amet consectetur adipisicing elit?
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Laborum necessitatibus aliquam deserunt quia, alias explicabo
									non aspernatur impedit eveniet expedita totam exercitationem?
									Dolore non repellat odio? Modi dolor rerum necessitatibus.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Container>
				</section>
			</div> */}

			<a
				href="https://wa.me/+6281219333386?text=Halo%20saya%20mau%20bertanya%20seputar%20Penerimaan%20Mahasiswa%20Baru%20(PMB)"
				target="_blank">
				<div className="tanya-kami">
					<Container>
						<div className="tanya-kami-wrapper">
							<div className="tanya-kami-icon">
								<i className="bi bi-whatsapp"></i>
							</div>
							<div className="tanya-kami-content">
								<p>Tanya Kami</p>
							</div>
						</div>
					</Container>
				</div>
			</a>
		</>
	);
};

export default LandingPage;
