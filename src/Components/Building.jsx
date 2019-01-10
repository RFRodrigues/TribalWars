import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BuildingModal from './BuildingModal';
import { ButtonToolbar, Button, toggleModal } from 'react-bootstrap';

class Building extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            nome: "",
            nivel: 0,
            imagem: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        const { open } = this.state;
        return (
            <div className="building">
                <Button onClick={() => this.setState({ open: true })}
                    bsSize="large"
                    className="btnRegistar"
                    block>
                    <img src={require('./resources/images/register.png')}
                        className="loginImages" /> 
                </Button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <BuildingModal />
                </Modal>
            </div>
        );
    }
}

export default Building;