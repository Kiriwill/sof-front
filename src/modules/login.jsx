import React, {Component} from 'react';
import {Container, Row, Col, Modal} from 'react-bootstrap';
import '../css/login.css'
import StoreHeader from './navigation'

class Login extends Component{
    render(){
        return(
            <Container>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    size="sm"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                </Modal>
            </Container>
        )
    }
};

export default Login;