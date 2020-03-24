import React, {Component} from 'react';
import {Container, Row, Col, Figure, Card,Table, ButtonGroup, Button, FormControl} from 'react-bootstrap';
import '../css/cesta.css'
import StoreHeader from './navigation'


class Cesta extends Component {
    render(props){
        return (
            <Container>
                <StoreHeader></StoreHeader>
                <Row className="products_title">
                    <Col className="path_header">
                        Home > {"Cesta"}
                    </Col>
                </Row>
                <Card></Card>
                <Row className="table_basket justify-content-md-center">
                    <Card className="card_teste shadow p-3 mb-5 bg-white rounded">
                        <Table borderless responsive>
                            <thead>
                                <tr className="border-bottom">
                                    <th>Carrinho ({"1"})</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table_basket_figure">    
                                        <Figure>
                                            <Figure.Image
                                                width={120}
                                                src="https://superprix.vteximg.com.br/arquivos/ids/175195"
                                            />
                                        </Figure></td>
                                    <td className="table_basket_content">
                                        <Row md="6" className="table_basket_title">
                                            <Col>
                                                <p>Mandioca in natura - Grupo Rosas do Vale</p>
                                            </Col>
                                        </Row>
                                        <Row md="6" className="table_basket_description">
                                            <Col md="6" className="border-right">
                                                <Figure.Image
                                                    width={20}
                                                    src="images/bag.svg"
                                                /> + Produtos das vendedoras
                                            </Col>
                                            <Col md="6">
                                                <Figure.Image
                                                        width={20}
                                                        src="images/trash.svg"
                                                    /> Excluir
                                            </Col>
                                        </Row>
                                    </td>
                                    <td className="table_basket_content table_basket_unity">
                                        <FormControl value="1" type="number"></FormControl>
                                    </td>
                                    <td className="table_basket_content">
                                        <p className="table_basket_price">R$ 2,00</p></td>
                                </tr>
                                <tr>
                                    <td className="table_basket_figure">    
                                        <Figure>
                                            <Figure.Image
                                                width={120}
                                                src="https://www.paodeacucar.com/img/uploads/1/275/645275.png"
                                            />
                                        </Figure></td>
                                    <td className="table_basket_content">
                                        <Row md="6" className="table_basket_title">
                                            <Col>
                                                <p>Brocólis Ninja In Natura - Grupo Esperança</p>
                                            </Col>
                                        </Row>
                                        <Row md="6" className="table_basket_description">
                                            <Col md="6" className="border-right">
                                                <Figure.Image
                                                    width={20}
                                                    src="images/bag.svg"
                                                /> + Produtos das vendedoras
                                            </Col>
                                            <Col md="6">
                                                <Figure.Image
                                                        width={20}
                                                        src="images/trash.svg"
                                                    /> Excluir
                                            </Col>
                                        </Row>
                                    </td>
                                    <td className="table_basket_content table_basket_unity">
                                        <FormControl value="1" type="number"></FormControl>
                                    </td>
                                    <td className="table_basket_content">
                                        <p className="table_basket_price">R$ 4,00</p></td>
                                </tr>
                                <tr className="border-top table_basket_bottom">
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>
                                        <p className="table_basket_price"><b>R$ 6,00</b></p></td>
                                </tr>
                                <tr className="border-top">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Button variant="warning">Encerrar compra</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Row>


                
            </Container>
        )
    }
}

export default Cesta