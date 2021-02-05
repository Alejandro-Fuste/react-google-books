import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap';
import './style.css';

const Navigation = () => {
	return (
		<Container style={{ padding: 0 }} fluid>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand className="navlogo" style={{ fontSize: 30 }} to="/">
					Google Books
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Link className="navLinks" to="/search">
						Search
					</Link>
					<Link className="navLinks" to="/saved">
						Saved
					</Link>
				</Nav>
			</Navbar>
		</Container>
	);
};

export default Navigation;
