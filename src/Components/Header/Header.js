import React from 'react'
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand={false} >
				<Container fluid >
					<Navbar.Brand >ReactJs Practice Exercise</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">Exercises</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="/TwitterCounter">TwitterCounter</Nav.Link>
								<Nav.Link href="/PasswordChecker">PasswordChecker</Nav.Link>
								<Nav.Link href="/AlphanumericPassword">AlphanumericPassword</Nav.Link>
								<Nav.Link href="/DisableSubmit">DisableSubmit</Nav.Link>
								<Nav.Link href="/ShowHide">ShowHide</Nav.Link>
								<Nav.Link href="/DesignerTool">DesignerTool</Nav.Link>
								<Nav.Link href="/AddToCart">AddToCart</Nav.Link>

							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
