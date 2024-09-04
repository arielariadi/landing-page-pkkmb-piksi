import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/beasiswa-style/beasiswa-kip-page.css';

const BeasiswaKipPage = () => {
	return (
		<>
			<div className="beasiswa-kip" id="beasiswaKip">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="beasiswa-kip-header">
									<h1 className="text-center">
										Beasiswa Kartu Indonesia Pintar (KIP)
									</h1>
								</div>

								<div className="beasiswa-kip-content">
									<p>
										<strong>Beasiswa KIP-Kuliah</strong> adalah bantuan biaya
										pendidikan dari pemerintah bagi lulusan Sekolah Menengah
										Atas (SMA) atau sederajat yang memiliki potensi akademik
										baik tetapi memiliki keterbatasan ekonomi. KIP Kuliah
										diberikan kepada mahasiswa yang lulus seleksi masuk
										perguruan tinggi. KIP Kuliah sesuai dengan penjelasan Pasal
										76 UU No. 12 Tahun 2012 Ayat 2 huruf b tentang bantuan
										pendidikan yaitu dukungan biaya pendidikan yang diberikan
										pemerintah kepada mahasiswa untuk mengikuti dan/atau
										menyelesaikan Pendidikan Tinggi.
									</p>

									<div className="header-box">
										<h3>Persyaratan Penerima KIP Kuliah</h3>
									</div>

									<p>
										Adapun persyaratan penerima KIP Kuliah adalah sebagai
										berikut:
										<ol>
											<li>
												Penerima KIP Kuliah adalah siswa SMA atau sederajat yang
												telah lulus maksimal pada 3 (tiga) tahun sebelumnya
											</li>
											<li>
												Memiliki potensi akademik baik tetapi memiliki
												keterbatasan ekonomi yang didukung bukti dokumen yang
												sah
											</li>
											<li>
												Lulus seleksi penerimaan mahasiswa baru, dan diterima di
												PTS pada Prodi yang dipilih oleh calon mahasiswa
											</li>
											<li>
												Keterbatasan ekonomi dibuktikan dengan kepemilikan
												program bantuan pendidikan nasional dalam bentuk Kartu
												Indonesia Pintar (KIP) atau berasal dari keluarga
												peserta Program Keluarga Harapan (PKH), keluarga
												pemegang Kartu Keluarga Sejahtera (KKS) serta mahasiswa
												dari panti sosial/panti asuhan
											</li>
											<li>
												Dalam hal mahasiswa belum memiliki KIP atau orang
												tua/wali belum memiliki KKS, maka dapat tetap mendaftar
												untuk mendapatkan KIP Kuliah asalkan memenuhi
												persyaratan tidak mampu secara ekonomi sesuai dengan
												ketentuan, yang dibuktikan dengan pendapatan kotor
												gabungan orang tua/wali sebesar Rp 4.000.000,00 (empat
												juta rupiah) atau pendapatan kotor gabungan orang
												tua/wali dibagi jumlah anggota keluarga maksimal
												Rp750.000,00 (tujuh ratus lima puluh ribu rupiah)
											</li>
											<li>Tidak sedang menerima beasiswa lain</li>
										</ol>
									</p>

									<div className="header-box">
										<h3>Pendaftaran KIP Kuliah</h3>
									</div>
									<p>
										Tata cara pendaftaran KIP Kuliah untuk seluruh jalur masuk
										dilakukan secara online melalui laman KIP Kuliah yaitu{' '}
										<a
											href="https://kip-kuliah.kemdikbud.go.id/"
											target="_blank"
											className="text-decoration-none">
											kip-kuliah.kemdikbud.go.id
										</a>
									</p>
									<ol>
										<li>
											Siswa dapat langsung melakukan pendaftaran secara mandiri
											di sistem online KIP Kuliah melalui laman{' '}
											<a
												href="https://kip-kuliah.kemdikbud.go.id/"
												target="_blank"
												className="text-decoration-none">
												kip-kuliah.kemdikbud.go.id
											</a>{' '}
											atau melalui KIP Kuliah mobile apps yang dapat diunduh di
											Play Store
										</li>
										<li>
											Pada saat pendaftaran, siswa memasukkan NIK, NISN, NPSN
											dan alamat email yang aktif
										</li>
										<li>
											Sistem KIP Kuliah selanjutnya akan melakukan validasi NIK,
											NISN dan NPSN serta kelayakan mendapatkan KIP Kuliah
										</li>
										<li>
											Jika proses validasi berhasil, Sistem KIP Kuliah
											selanjutnya akan mengirimkan Nomor Pendaftaran dan Kode
											Akses ke alamat email yang didaftarkan
										</li>
										<li>
											Siswa menyelesaikan proses pendaftaran KIP Kuliah dan
											memilih proses seleksi Mandiri dan memilih Politeknik
											Piksi Input Serang serta Program Studi yang dipilih
										</li>
										<li>
											Siswa menyelesaikan proses pendaftaran di portal atau
											sistem informasi seleksi nasional masuk perguruan tinggi
											sesuai jalur yang dipilih lalu mengklik simpan
										</li>
									</ol>

									<div className="header-box">
										<h3>Alur Pendaftaran Mahasiswa Baru dan KIP Kuliah</h3>
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

export default BeasiswaKipPage;
