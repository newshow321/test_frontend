import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Button } from 'reactstrap';
// import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Row, Input, Container, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

function App() {
	return (
		// <Button color="danger">Danger!</Button>
		<div>
			<Navbar color="light" expand="md" light>
				<NavbarBrand href="/">
					Foods&Goods
				</NavbarBrand>
				<NavbarBrand href="/">
					Icon
				</NavbarBrand>
			</Navbar>
			<Container>
				<Row>
					<Col className="" xs="6">
						Gambar 1
					</Col>
					<Col className="" xs="6">
						Gambar 2
					</Col>
				</Row>
			</Container>
			<div>
				<Container>
					<Input placeholder="Cari Merchant atau barang ..." />
				</Container>
			</div>
		</div>
	);
}

export default App;
