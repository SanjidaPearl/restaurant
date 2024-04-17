import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm" style={{ height: "100px" }}> 
                    <div className="container d-flex justify-content-center align-items-center"> 
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/" style={{ marginRight: "140px", fontSize: "24px", color: "#FFF" }}>SpiceStory Restaurant</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar> 
                                <NavItem style={{ marginRight: "100px" }}> 
                                    <Link to="/" className="nav-link active" style={{ fontSize: "20px", color: "#FFF" }}>Home</Link> 
                                </NavItem>
                                <NavItem style={{ marginRight: "100px" }}> 
                                    <Link to="/menu" className="nav-link" style={{ fontSize: "20px", color: "#FFF" }}>Menu</Link> 
                                </NavItem>
                                <NavItem style={{ marginRight: "100px" }}> 
                                    <Link to="/about" className="nav-link" style={{ fontSize: "20px", color: "#FFF" }}>About</Link> 
                                </NavItem>
                                <NavItem style={{ marginRight: "100px" }}> 
                                    <Link to="/contact" className="nav-link" style={{ fontSize: "20px", color: "#FFF" }}>Contact</Link> 
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
