import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/informasi-style/pemberkasan-page.css';

const PemberkasanPage = () => {
	return (
		<>
			<div className="pemberkasan" id="pemberkasan">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="pemberkasan-header">
									<h1 className="text-center">Pemberkasan</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
};

export default PemberkasanPage;
