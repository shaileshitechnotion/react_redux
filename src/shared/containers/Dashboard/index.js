import React from 'react';
import { Container, Row, Col,Label,Form,FormGroup } from 'reactstrap';
import DropDown from 'shared/components/DropDown/index'




export default () =>
  (<Container fluid={true}>
      <Row className="breadcrumbs">
        <Col xs="3" ><FormGroup><DropDown /></FormGroup></Col>
        <Col xs="3" ><FormGroup><DropDown /></FormGroup></Col>
        <Col xs="3" ><FormGroup><DropDown /></FormGroup></Col>
        <Col xs="3" ></Col>
      </Row>
      <Row>
        <Col>This is dashboard</Col>
      </Row>
    </Container>);
