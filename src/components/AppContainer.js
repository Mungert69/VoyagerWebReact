import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import TripContainer from '../containers/TripContainer';


export class AppContainer extends Component {
    displayName = "App Container";
var test;
    render() {
        return (
            <Grid fluid>
                <Row>
             
                    <Col >
                     
                        <TripContainer/>>

                    </Col>
                </Row>
            </Grid>
        );
    }
}
//   {this.props.children}