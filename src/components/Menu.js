import React, { Component } from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import './Menu.css';

export default class Menu extends Component {
    render() {
        return (
            <>
                <Navbar className="Navy" bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
