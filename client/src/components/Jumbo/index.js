import React from 'react';
import './style.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Jumbo = () => {
	return (
		<Jumbotron className="jumboBg" fluid>
			<Container />
		</Jumbotron>
	);
};

export default Jumbo;
