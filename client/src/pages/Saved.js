import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const styles = {
	button: {
		marginRight: 5,
		backgroundColor: '#969797',
		color: 'white',
		float: 'right',
		borderColor: '#969797'
	}
};

const Saved = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col className="resultsCol">
					<div>
						<h3>Saved Books</h3>
					</div>

					<div className="singleResult">
						<div>
							<Button style={styles.button}>View</Button>
							<Button style={styles.button}>Delete</Button>
							<h5>Title:</h5>
							<h6>Author:</h6>
							<img className="pic" src={''} alt="Result picture" />
							<p>
								Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet
								augue non leo luctus suscipit. Nulla iaculis ultrices condimentum. Cras porta vestibulum
								dolor a imperdiet. Sed quis mauris diam. Donec dapibus, diam sed faucibus consequat,
								felis quam elementum urna, non commodo diam lorem sollicitudin elit. Aliquam consequat,
								risus eget suscipit sagittis, diam quam aliquam odio, a tincidunt nibh enim quis turpis.
								Donec vulputate suscipit metus, ut ultrices dolor pellentesque quis. Cras id fermentum
								odio.{' '}
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Saved;
