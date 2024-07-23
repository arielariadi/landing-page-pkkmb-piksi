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

	return (
		<>
			<div className="landing-page" id="landingPage">
				<section className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
					<Container>
						<Row className="jumbotron">
							<Col lg="6">
								<h1 className="text-white">Penerimaan Mahasiswa Baru</h1>

								<div className="jumbotron-content-wrapper">
									<p className="text-white">Politeknik Piksi Input Serang</p>
									<span>"Lorem ipsum, dolor sit amet"</span>
								</div>

								<div className="gelombang-box">
									<div className="gelombang-wrapper">
										<div className="gelombang-content-wrapper">
											<p className="gelombang-text">Gelombang ...</p>
											<p className="gelombang-date">
												01 Juli 2024 s/d 30 Agustus 2025
											</p>
										</div>
									</div>
								</div>

								<div className="jumbotron-button-wrapper">
									<Button className="button-daftar me-2" href="/">
										Daftar Sekarang
									</Button>
									<a href="/" className="panduan-pmb">
										<p>
											Panduan PMB <i className="bi bi-arrow-right"></i>
										</p>
									</a>
								</div>
							</Col>

							<Col lg="6" className="hero-img">
								<div className="hero-img-wrapper">
									<img
										src="src/assets/img/hero-img.jpeg"
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
						<div className="jenjang-pendidikan-header">
							<h4>JENJANG PENDIDIKAN</h4>
						</div>

						<div className="jenjang-pendidikan-header-detail">
							<h2>Membangun Masa Depan dengan Pendidikan Berkualitas</h2>
						</div>

						<div className="carousel-wrapper-jenjang-pendidikan">
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination, Autoplay]}
								ref={swiperRef}
								className="mySwiper">
								<SwiperSlide>
									<Container>
										<Row>
											<Col>
												<h3>D4 - Sarjana Terapan</h3>
												{/* <h5>Program Sarjana (S1)</h5> */}
												<ul className="custom-list">
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														D4-Akuntansi Perpajakan{' '}
														<span>
															(Digital Architecture, Cinema Architecture,
															Entrepreneur in Architecture)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S1-Perencanaan Wilayah & Kota{' '}
														<span>
															(Digital Urban Planning, Smart City & Creative
															City)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S21-Geografi{' '}
														<span>
															(Digital Geography, GIS & Documentary Film)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S21-Geografi{' '}
														<span>
															(Digital Geography, GIS & Documentary Film)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S21-Geografi{' '}
														<span>
															(Digital Geography, GIS & Documentary Film)
														</span>
													</li>
												</ul>
											</Col>
											<Col className="carousel-img-jenjang-pendidikan">
												<img
													className="d-block w-100"
													src="src/assets/img/hero-img.jpeg"
													alt="First slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>
								<SwiperSlide>
									<Container>
										<Row>
											<Col>
												<h3>D3 - Diploma</h3>
												{/* <h5>Program Sarjana (S1)</h5> */}
												<ul className="custom-list">
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S1-Teknik Informatika{' '}
														<span>
															(Software Engineering, Data Science, AI)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S1-Teknik Sipil{' '}
														<span>
															(Structural Engineering, Transportation
															Engineering)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S1-Teknik Elektro{' '}
														<span>
															(Power Systems, Telecommunications, Robotics)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S21-Geografi{' '}
														<span>
															(Digital Geography, GIS & Documentary Film)
														</span>
													</li>
													<li>
														<FontAwesomeIcon
															icon={faCircleDot}
															style={{ color: 'green', marginRight: '8px' }}
														/>
														S21-Geografi{' '}
														<span>
															(Digital Geography, GIS & Documentary Film)
														</span>
													</li>
												</ul>
											</Col>
											<Col className="carousel-img-jenjang-pendidikan">
												<img
													className="d-block w-100"
													src="src/assets/img/hero-img.jpeg"
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
						<div className="info-pmb-header">
							<h4>INFO PMB</h4>
						</div>

						<div className="info-pmb-header-detail">
							<h2>Panduan Lengkap Untuk Calon Mahasiswa Baru</h2>
						</div>

						<div className="info-pmb-wrapper d-flex justify-content-center gap-3">
							<Card>
								<Card.Body>
									<Card.Img
										variant="top"
										src="src/assets/img/registration-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">Konten 1</Card.Title>

									<Card.Text className="text-center mt-3">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Velit in consequuntur, vel enim cumque error id, eaque
										explicabo optio dolorum nihil doloribus! Consequuntur,
									</Card.Text>
								</Card.Body>
							</Card>

							<Card>
								<Card.Body>
									<Card.Img
										variant="top"
										src="src/assets/img/registration-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">Konten 2</Card.Title>

									<Card.Text className="text-center mt-3">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Aperiam, expedita? Assumenda a dolorem totam repellendus
										laudantium nihil cupiditate accusantium temporibus, omnis
										vitae
									</Card.Text>
								</Card.Body>
							</Card>

							<Card>
								<Card.Body>
									<Card.Img
										variant="top"
										src="src/assets/img/registration-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">Konten 3</Card.Title>

									<Card.Text className="text-center mt-3">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
										similique suscipit, rerum iusto qui veniam doloremque iure
										expedita a, pariatur maxime culpa ver
									</Card.Text>
								</Card.Body>
							</Card>

							<Card>
								<Card.Body>
									<Card.Img
										variant="top"
										src="src/assets/img/registration-icon.png"
										className="d-flex mx-auto"
									/>

									<Card.Title className="text-center mt-4">Konten 4</Card.Title>

									<Card.Text className="text-center mt-3">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
										sequi ad molestias dolore, nemo voluptatibus itaque corrupti
										totam, commodi quae omnis. Neque
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</Container>
				</section>
			</div>

			<div className="beasiswa" id="beasiswa">
				<section className="w-100 min-vh-100 d-flex">
					<Container>
						<div className="beasiswa-header">
							<h4>BEASISWA</h4>
						</div>

						<div className="beasiswa-header-detail">
							<h2>Peluang Emas untuk Meraih Beasiswa</h2>
						</div>
						<div className="carousel-wrapper-beasiswa">
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								pagination={{ clickable: true }}
								modules={[Navigation, Pagination, Autoplay]}
								ref={swiperRef}
								className="mySwiper">
								<SwiperSlide>
									<Container>
										<Row>
											<Col>
												<h3>
													Kuliah 100% Gratis Dengan Kartu Indonesia Pintar
												</h3>
												{/* <h5>Program Sarjana (S1)</h5> */}
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Saepe delectus sint minima minus voluptate
													suscipit a fugiat quam dolorem, deleniti, recusandae
													repellat, dolore illum. Veritatis necessitatibus sunt
													deleniti rem nulla! Lorem ipsum dolor sit amet,
													consectetur adipisicing elit. Laborum quidem at,
												</p>
											</Col>
											<Col className="carousel-img-beasiswa">
												<img
													className="d-block w-100"
													src="src/assets/img/person.png"
													alt="First slide"
												/>
											</Col>
										</Row>
									</Container>
								</SwiperSlide>
								<SwiperSlide>
									<Container>
										<Row>
											<Col>
												<h3>
													Kuliah 100% Gratis Dengan Kartu Indonesia Pintar
												</h3>

												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Saepe delectus sint minima minus voluptate
													suscipit a fugiat quam dolorem, deleniti, recusandae
													repellat, dolore illum. Veritatis necessitatibus sunt
													deleniti rem nulla! Lorem ipsum dolor sit amet,
													consectetur adipisicing elit. Laborum quidem at
												</p>
											</Col>
											<Col className="carousel-img-beasiswa">
												<img
													className="d-block w-100"
													src="src/assets/img/person.png"
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
		</>
	);
};

export default LandingPage;
