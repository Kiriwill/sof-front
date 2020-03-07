import React, {Component} from 'react';
import {Container, Row, Col, FormControl, Navbar, Nav, Form, NavDropdown, Tab} from 'react-bootstrap';

import '../css/vitrine.css';

class Detalhe extends Component{
    
    render(props) {
        //this.props.match.params.id
        return(
            <Container>
                <Navbar bg="light" variant="light">
                    <Form inline>
                        <Navbar.Brand href="#home" style={{ marginLeft: '10px'}} >SOF</Navbar.Brand>
                        <FormControl type="text" id="searcher" style={{ width: '30rem', marginLeft:'10rem' }} placeholder="Busque um produto"/>
                    </Form>
                </Navbar>
                <Navbar bg="light" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Vitrine</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Verduras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Hortaliças</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Geléias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Frutas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Entrar</Nav.Link>
                        <Nav.Link href="#home">Meu carrinho</Nav.Link>
                    </Nav>
                </Navbar>   
                <Row className="productsTitle">
                    <Col md="10">
                        Vitrine > Brocolis Ninja
                    </Col>
                </Row>
                <Row>
                    <Col md="2">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Col md={3}>
                                    <Nav variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                        
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col md="6">
                        Ho
                    </Col>
                    <Col md="4">
                        Lets Go
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Detalhe