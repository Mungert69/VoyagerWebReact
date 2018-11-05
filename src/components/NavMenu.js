import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';


export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>VOYAGER</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/tripcontainer'}>
                            <NavItem>
                            <i className="fas fa-map-marked Voyager_Trip_Nights_Add"></i> TRIPS
                            </NavItem>
                        </LinkContainer>
                     
                 
                        <LinkContainer to={'/mapview'}>
                            <NavItem>
                            <i className="fas fa-grip-horizontal Voyager_Trip_Nights_Add"></i> Testing

                            </NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
