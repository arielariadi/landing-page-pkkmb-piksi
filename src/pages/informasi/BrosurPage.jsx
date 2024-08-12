import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/informasi-style/brosur-page.css';

const BrosurPage = () => {
	return (
		<>
			<div className="brosur" id="brosur">
				<section className="w-100">
					<Container>
						<Row>
							<Col lg="12">
								<div className="brosur-header">
									<h1 className="text-center">Brosur</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
};

export default BrosurPage;
