import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<SearchForm />
					<h1>Search Page</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
