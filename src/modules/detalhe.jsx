import React, {Component} from 'react';
import {Container, Row, Col, Figure, Card, ButtonGroup, Button} from 'react-bootstrap';
import '../css/detalhe.css'
import StoreHeader from './navigation'

class Detalhe extends Component{
    
    render(props) {
        //this.props.match.params.id
        return(
            <Container>
                    <StoreHeader></StoreHeader>
                    <Row className="products_title">
                        <Col md="10" className="path_header">
                            Vitrine > Brocolis Ninja
                        </Col>
                    </Row>
                    <Row className="detalhes_page">
                        <Col md="2">
                            <Row>
                                <Col md="8">
                                    <Figure className="nav_button">
                                        <Figure.Image
                                            src="images/brocoli.jpg"
                                        />
                                    </Figure>
                                    <Figure className="nav_button">
                                        <Figure.Image
                                            src="images/brocoli.jpg"
                                        />
                                    </Figure>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="4" className="product_picture">
                            <Figure>
                                <Figure.Image
                                    width={400}
                                    height={200}
                                    alt="171x180"
                                    src="images/brocoli.jpg"
                                />
                            </Figure>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Informações do produto</Card.Title>
                                    <Card.Text>Brocólis orgânico in natura.</Card.Text>
                                    <Card.Text>NÃO CONTÉM GLUTÉN.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6" className="product_description">
                            <Card.Title className="product_title">Brocólis Ninja In Natura - Grupo Esperança</Card.Title>
                            <Card.Text>
                                Tipo de produto: in natura <br/>
                                Unidade: Kg</Card.Text> 
                            <Card.Text className="product_price">R$ 4,00</Card.Text>
                            <ButtonGroup>
                                <Button variant="warning">Comprar</Button>
                                <Button variant="outline-warning">Adicionar ao carrinho</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default Detalhe