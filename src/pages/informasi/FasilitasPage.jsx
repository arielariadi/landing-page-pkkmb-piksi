import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/informasi-style/fasilitas-page.css';

const FasilitasPage = () => {
	return (
		<>
			<div className="fasilitas" id="fasilitas">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="fasilitas-header">
									<h1 className="text-center">Fasilitas PMB</h1>
								</div>

								<img
									src="./img/fasilitas-pmb.jpeg"
									alt="Fasilitas PMB"
									className="mt-4"
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
};

export default FasilitasPage;
