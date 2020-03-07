import React, {Component} from 'react';
import {Container, Row, Col, FormControl, Navbar, Nav, NavLink, Form, NavDropdown, Card, button} from 'react-bootstrap';
import '../css/vitrine.css';


class Vitrine extends Component{
    
    render() {
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
                        <NavLink to="/detalhes">Vitrine</NavLink>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Verduras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Hortaliças</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Geléias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Frutas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink href="/">Entrar</NavLink>
                        <NavLink href="#home">Meu carrinho</NavLink>
                    </Nav>
                </Navbar>   
                    <Row className="productsTitle">
                        <Col md="10">
                            Products Tittle
                        </Col>
                    </Row>
                    <div className="productsList">
                        <Row >
                            <Col id="" md="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="/detalhes">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="" md="3">
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="" md="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="" md="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row >
                            <Col id="" md="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="" md="3">
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="" md="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col id="" md="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2010/08/couves_186907106.jpg" />
                                    <Card.Body>
                                        <Card.Title>Brocolis ninja</Card.Title>
                                        <Card.Text href="#">R$ 5,00/kg</Card.Text>
                                        <Card.Link href="#">Adicionar</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

            </Container>
        )
    }
}

export default Vitrine