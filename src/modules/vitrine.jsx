import React, {Component} from 'react';
import {Container, Row, Col, FormControl, Navbar, Nav, NavLink, Form, NavDropdown, Card, ListGroup} from 'react-bootstrap';
import '../css/vitrine.css';
import StoreHeader from './navigation'

class Vitrine extends Component{
    
    render() {
        return(
            <Container>
                <StoreHeader></StoreHeader>
                <Row className="path_header">
                    <Col md="10">
                        Vitrine
                    </Col>
                </Row>
                <Row>
                    <ListGroup horizontal="md" className="listgroup_lista">
                        <Col md="4">    
                            <ListGroup.Item className="vitrine_item">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                        <Card.Body>
                                            <Card.Title>Brocolis ninja</Card.Title>
                                            <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                            <Card.Link href="/detalhes">Adicionar</Card.Link>
                                        </Card.Body>
                                    </Card>
                            </ListGroup.Item>
                        </Col>
                        <Col md="4">
                            <ListGroup.Item className="vitrine_item">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                        <Card.Body>
                                            <Card.Title>Brocolis ninja</Card.Title>
                                            <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                            <Card.Link href="/detalhes">Adicionar</Card.Link>
                                        </Card.Body>
                                    </Card>
                            </ListGroup.Item>
                        </Col>
                        <Col md="4">
                            <ListGroup.Item className="vitrine_item">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                        <Card.Body>
                                            <Card.Title>Brocolis ninja</Card.Title>
                                            <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                            <Card.Link href="/detalhes">Adicionar</Card.Link>
                                        </Card.Body>
                                    </Card>
                            </ListGroup.Item>
                        </Col>
                        <Col md="4">
                            <ListGroup.Item className="vitrine_item">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                        <Card.Body>
                                            <Card.Title>Brocolis ninja</Card.Title>
                                            <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                            <Card.Link href="/detalhes">Adicionar</Card.Link>
                                        </Card.Body>
                                    </Card>
                            </ListGroup.Item>
                        </Col>
                        
                    </ListGroup>
                </Row>

            </Container>
        )
    }
}

export default Vitrine