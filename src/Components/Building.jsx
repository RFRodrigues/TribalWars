import React, { Component } from "react";
import { Modal, Button } from "antd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import BuildingModal from "./BuildingModal";

class Building extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      nanem: "",
      level: 0,
      imagem: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount() {
    this.setState({ imagem: localStorage.getItem(this.props.name) });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    console.log(this.props);

    return (
      <div className="building">

          <img src={this.state.imagem} onClick={() => this.setState({ open: true })} />

        <Modal
          title={this.props.name}
          visible={open}
          onCancel={this.onCloseModal}
        >
          <BuildingModal />
        </Modal>
      </div>
    );
  }
}

export default Building;
