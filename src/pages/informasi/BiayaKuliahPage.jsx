import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/informasi-style/biaya-kuliah-page.css';

const BiayaKuliahPage = () => {
	return (
		<>
			<div className="biaya-kuliah" id="biayaKuliah">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="biaya-kuliah-header">
									<h1 className="text-center">Biaya Kuliah</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
};

export default BiayaKuliahPage;
