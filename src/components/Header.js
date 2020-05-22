import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    Container,
    NavItem
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleisOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <Navbar color="info" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to='/'>
                    <i class="fa fa-broadcast-tower"></i>
                    <span className="project-name">Student App</span>
                </NavLink>

                <NavbarToggler onClick={this.toggleIsOpen} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/"
                                active className="active">
                                News
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/"
                                active className="active">
                                Students
                        </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Container>

        </Navbar>
    }
}

export default Header;