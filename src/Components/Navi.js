import React from 'react'
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';

function Navi() {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/"><h3>Teamaimed</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="https://teamaimed.com/index.html">Home</Nav.Link>
                    <Nav.Link href="https://teamaimed.com/about.html">About</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="https://teamaimed.com/contact.html">Contact</Nav.Link>
                    <NavDropdown title="Features" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#signin">Sign-In</Nav.Link>
                    <Nav.Link eventKey={2} href="#early-bird">
                        Early Bird
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navi
