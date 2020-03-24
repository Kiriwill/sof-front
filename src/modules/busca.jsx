import React, {Component} from 'react';
import {Container, Row, Col, ListGroup, Card, Figure, Button, Image} from 'react-bootstrap';
import '../css/busca.css'
import StoreHeader from './navigation'

class Busca extends Component {
    render(props) {
        return (
            <Container>
                <StoreHeader></StoreHeader>
                <Row className="products_title">
                    <Col md="10" className="path_header">
                        Home > {"Busca"}
                    </Col>
                </Row>
                <Row>
                    <Col md="2" className="search_categories">
                        <p><b>Categorias:</b></p>
                        <ul>
                            <a><li>in natura (4)</li></a>
                            <li><a>hortifruti (12)</a></li>
                        </ul>
                        <p><b>Produtoras:</b></p>
                        <ul>
                            <a><li>margaridas (10)</li></a>
                            <li><a>rosas do vale (5)</a></li>
                            <li><a>quilombo do cedro (20)</a></li>
                            <li><a>mulheres do concha (3)</a></li>

                        </ul>

                    </Col>
                    <Col md="10" className="search_results">
                        <Row>
                            Sua pesquisa por "item pesquisado" encontrou 40 resultados.
                        </Row>
                        <Row>
                            Mostrando 12 de 40 produtos
                        </Row>
                        <ListGroup>
                            <ListGroup.Item  className="search_item">
                                        <Row>
                                            <Col md="2" className="search_image">
                                                <Figure>
                                                    <Figure.Image
                                                        src="https://superprix.vteximg.com.br/arquivos/ids/175180-600-600/Melancia--1-fatia-aprox.-17kg-.png"
                                                    />
                                                </Figure>
                                            </Col>
                                            <Col md="9" className="search_details">
                                                <Card>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col md="3" >
                                                                <Card.Text>Melancia</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Card.Text>R$ 5,00/kg</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Card.Text>
                                                                    Grupo Esperança                             
                                                                </Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Button variant="outline-warning">Adicionar
                                                                </Button>
                                                            </Col>                                                        
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                            </ListGroup.Item>
                            <ListGroup.Item  className="search_item">
                                        <Row>
                                            <Col md="2" >
                                                <Figure>
                                                    <Figure.Image
                                                        src="https://www.paodeacucar.com/img/uploads/1/275/645275.png" 
                                                    />
                                                </Figure>
                                            </Col>
                                            <Col md="9" className="search_details">
                                                <Card>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col md="3">
                                                                <Card.Text>Brocolis ninja</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Card.Text href="#">R$ 4,00/kg</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Card.Text href="#">Grupo As Margaridas</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Button variant="outline-warning">Adicionar</Button>
                                                            </Col>                                                        
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                            </ListGroup.Item>
                            <ListGroup.Item  className="search_item">
                                        <Row>
                                            <Col md="2" >
                                                <Figure>
                                                    <Figure.Image
                                                        src="https://superprix.vteximg.com.br/arquivos/ids/175195" 
                                                    />
                                                </Figure>
                                            </Col>
                                            <Col md="9" className="search_details">
                                                <Card>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col md="3">
                                                                <Card.Text>Mandioca</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Card.Text href="#">R$ 2,00/kg</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Card.Text href="#">Grupo Rosas do Vale</Card.Text>
                                                            </Col>
                                                            <Col md="3">
                                                                <Button variant="outline-warning">Adicionar</Button>
                                                            </Col>                                                        
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                            </ListGroup.Item>   
                        </ListGroup>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default Busca;