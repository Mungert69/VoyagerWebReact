import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                            <FontAwesomeIcon className="Voyager_Trip_Nights_Add" icon="map-marked" /> TRIPS
                            </NavItem>
                        </LinkContainer>
                     
                 
                        <LinkContainer to={'/mapview'}>
                            <NavItem>
                                <FontAwesomeIcon className="Voyager_Trip_Nights_Add" icon="grip-horizontal" /> Testing

                            </NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
