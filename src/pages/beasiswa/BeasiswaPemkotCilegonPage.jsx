import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/beasiswa-style/beasiswa-pemkot-cilegon-page.css';

const BeasiswaPemkotCilegonPage = () => {
	return (
		<>
			<div className="beasiswa-pemkot-cilegon" id="beasiswaPemkotCilegon">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="beasiswa-pemkot-cilegon-header">
									<h1 className="text-center">Beasiswa Pemkot Cilegon (KCS)</h1>
								</div>

								<div className="beasiswa-pemkot-cilegon-content">
									<p>
										<strong>Beasiswa KCS (Kartu Cilegon Sejahtera) </strong>
										adalah bantuan biaya pendidikan dari pemerintah Pemkot
										Cilegon bagi lulusan Sekolah Menengah Atas (SMA) atau
										sederajat yang memiliki potensi akademik baik tetapi
										memiliki keterbatasan ekonomi. KIP Kuliah diberikan kepada
										mahasiswa yang lulus seleksi masuk perguruan tinggi berupa
										bantuan pendidikan yaitu dukungan biaya pendidikan yang
										diberikan pemerintah kepada mahasiswa untuk mengikuti
										dan/atau menyelesaikan Pendidikan Tinggi.
									</p>
									<div className="header-box">
										<h3>Persyaratan Penerima Beasiswa KCS</h3>
									</div>
									<p>
										Adapun persyaratan penerima beasiswa KCS adalah sebagai
										berikut:
									</p>

									<ol>
										<li>
											Penerima beasiswa KCS adalah siswa SMA atau sederajat yang
											telah lulus maksimal pada 3 (tiga) tahun sebelumnya
										</li>
										<li>
											Memiliki potensi akademik baik tetapi memiliki
											keterbatasan ekonomi yang didukung dengan Surat Keterangan
											Tidak Mampu (SKTM) dari Kecamatan setempat
										</li>
										<li>
											Lulus seleksi penerimaan mahasiswa baru, dan diterima di
											Politeknik Piksi Input Serang pada Prodi yang dipilih oleh
											calon mahasiswa
										</li>
										<li>
											Tidak harus memiliki kartu KCS fisik dari Pemkot Cilegon
										</li>
										<li>Tidak sedang menerima beasiswa lain</li>
									</ol>

									<div className="header-box">
										<h3>Pendaftaran KCS (Kartu Cilegon Sejahtera)</h3>
									</div>

									<p>
										Tata cara pendaftaran Beasiswa KCS untuk seluruh jalur masuk
										dilakukan secara online melalui laman Penerimaan Mahasiswa
										Baru (PMB) yaitu{' '}
										<a
											href="https://piksiinputserang.ac.id/"
											className="text-decoration-none"
											target="_blank">
											{' '}
											https://piksiinputserang.ac.id/
										</a>
									</p>
									<ol>
										<li>
											Melengkapi form yang tersedia pada
											<a
												href="https://piksiinputserang.ac.id/"
												className="text-decoration-none"
												target="_blank">
												{' '}
												https://piksiinputserang.ac.id/
											</a>
										</li>
										<li>
											Calon Penerima Beasiswa melakukan proses sleksi
											administrasi dan Tes Minat Bakat dari Politeknik Piksi
											Input Serang
										</li>
										<li>
											Calon peneriam Beasiswa KCS yang dinyatakan lulus akan
											menerima Letter of Acceptance (LoA)
										</li>
										<li>
											Politeknik Piksi Input Serang mevalidasi dokumen dan
											memproses Beasiswa
										</li>
										<li>
											Penerima yang lulus dan diterima menjadi Penerima Beasiswa
											KCS akan dinyatakan secara SAH melalui Surat Keteragan
											Direktur Politeknik Piksi Input Serang
										</li>
									</ol>

									<div className="header-box">
										<h3>Alur Pendaftaran Mahasiswa Baru dan Beasiswa KCS</h3>
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

export default BeasiswaPemkotCilegonPage;
