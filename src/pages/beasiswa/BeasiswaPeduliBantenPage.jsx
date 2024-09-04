import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/beasiswa-style/beasiswa-peduli-banten-page.css';

const BeasiswaPeduliBantenPage = () => {
	return (
		<>
			<div className="beasiswa-peduli-banten" id="beasiswaPeduliBanten">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="beasiswa-peduli-banten-header">
									<h1 className="text-center">
										Beasiswa Peduli Banten (Yayasan)
									</h1>
								</div>

								<div className="beasiswa-peduli-banten-content">
									<p>
										<strong>Beasiswa Peduli Banten (BPB)</strong> adalah bantuan
										biaya pendidikan dari Yayasan Piksi Input Serang - Banten
										bagi lulusan Sekolah Menengah Atas (SMA) atau sederajat yang
										memiliki potensi akademik baik tetapi memiliki keterbatasan
										ekonomi. KIP Kuliah diberikan kepada mahasiswa yang lulus
										seleksi masuk perguruan tinggi berupa bantuan pendidikan
										yaitu dukungan biaya pendidikan yang diberikan pemerintah
										kepada mahasiswa untuk mengikuti dan/atau menyelesaikan
										Pendidikan Tinggi.
									</p>

									<div className="header-box">
										<h3>Persyaratan Penerima Beasiswa BPB</h3>
									</div>

									<p>
										Untuk mendaftar KIP Kuliah Jalur Mandiri PTS, pastikan kamu
										memenuhi persyaratan berikut:
										<ol>
											<li>
												Penerima BPB adalah siswa SMA atau sederajat yang telah
												lulus (diutamakan yatim/memiliki prestasi)
											</li>
											<li>
												Memiliki potensi akademik baik tetapi memiliki
												keterbatasan ekonomi yang didukung dengan Surat
												Keterangan Tidak Mampu (SKTM) dari Kecamatan setempat
											</li>
											<li>
												Lulus seleksi penerimaan mahasiswa baru, dan diterima di
												Politeknik Piksi Input Serang pada Prodi yang dipilih
												oleh calon mahasiswa
											</li>
											<li>Tidak sedang menerima beasiswa lain</li>
										</ol>
									</p>

									<div className="header-box">
										<h3>Pendaftaran Beasiswa Peduli Banten (BPB)</h3>
									</div>

									<p>
										Tata cara pendaftaran Beasiswa BPB untuk seluruh jalur masuk
										dilakukan secara online melalui laman Penerimaan Mahasiswa
										Baru (PMB) yaitu{' '}
										<a
											href="https://piksiinputserang.ac.id/pmb-v2/login"
											className="text-decoration-none"
											target="_blank">
											{' '}
											https://piksiinputserang.ac.id/pmb-v2/login
										</a>
									</p>

									<ol>
										<li>
											Melengkapi form yang tersedia pada
											<a
												href="https://piksiinputserang.ac.id/pmb-v2/register"
												className="text-decoration-none"
												target="_blank">
												{' '}
												https://piksiinputserang.ac.id/pmb-v2/register
											</a>
										</li>
										<li>
											Calon Penerima Beasiswa melakukan proses seleksi
											administrasi dan Tes Minat Bakat dari Politeknik Piksi
											Input Serang
										</li>
										<li>
											Calon peneriam Beasiswa BPB yang dinyatakan lulus akan
											menerima Letter of Acceptance (LoA)
										</li>
										<li>
											Politeknik Piksi Input Serang mevalidasi dokumen dan
											memproses Beasiswa
										</li>
										<li>
											Penerima yang lulus dan diterima menjadi Penerima Beasiswa
											BPB akan dinyatakan secara SAH melalui Surat Keteragan
											Direktur Politeknik Piksi Input Serang
										</li>
									</ol>

									<div className="header-box">
										<h3>Alur Pendaftaran Mahasiswa Baru dan Beasiswa BPB</h3>
									</div>

									<img
										src="/img/diagram-alur-pendaftaran.png"
										alt="Diagram Alur Pendaftaran"
									/>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
};

export default BeasiswaPeduliBantenPage;
