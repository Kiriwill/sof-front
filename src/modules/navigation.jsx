import React, {Component} from 'react';
import {Container, Row, Col, FormControl, Navbar, Nav, Form, NavDropdown, Figure, Card, ButtonGroup, Button} from 'react-bootstrap';
import '../css/store_header.css';
import Login from './login';

class StoreHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalShow: false
        };
    }

    setModalShow(){
        console.log("Funcionou");
    }

    render(props) {
        return (
            <Navbar className="navbar_store">
                <Login></Login>
                <Navbar.Brand href="#home" style={{ marginLeft: '10px'}} >SOF</Navbar.Brand>
                <Nav >
                    <Nav.Link href="/" id="nav_content">Vitrine</Nav.Link>
                    <NavDropdown title="Categorias">
                        <NavDropdown.Item href="#action/3.1">Verduras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Hortaliças</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Geléias</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Frutas</NavDropdown.Item>
                    </NavDropdown>
                    <FormControl type="text" id="searcher" placeholder="Busque um produto"/>
                    <Figure style={{alignContent:"center", margin:"4px 0px 0px 80px"}}>
                        <Figure.Image
                            width={30}
                            height={10}
                            src="images/entrar.svg"
                            onClick={this.setModalShow()}
                        />
                    </Figure>
                    
                    <Figure style={{alignContent:"center", margin:"7px 0px 0px 20px"}}>
                        <Figure.Image
                            width={30}
                            height={10}
                            src="https://cdn.onlinewebfonts.com/svg/img_155927.png"
                        />
                    </Figure>
                </Nav>
            </Navbar>
        )
    }
}

export default StoreHeader