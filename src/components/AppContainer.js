import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import TripContainer from '../containers/TripContainer';
import TestContainer from '../containers/TestContainer';
import { debugMode } from './Constants';

export class AppContainer extends Component {
    displayName = "App Container";
    test = 'test';
    render() {
        return (
            <Grid fluid >
                <Row>


                    <Col >
                        {debugMode ? <TestContainer /> : <TripContainer />}


                    </Col>
                </Row>
            </Grid>
        );
    }
}
//   {this.props.children}