import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import './Main.scss';
import Card from "../Card/Card";

export default function Main(props) {
    return (
        <Container fluid className="main">
            {/* <Row>
                <Col>1 of 1</Col>
            </Row> */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    )
}