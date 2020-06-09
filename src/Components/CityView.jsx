import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Grid,
  Table,
  Dropdown,
  MenuItem,
  Panel,
  FormGroup,
  Form,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import { Modal, Button, Select, Spin, Row, Col } from "antd";
import Building from "./Building";
import { Label } from "reactstrap";
let woodImage = require("./resources/images/Wood.png");
let clayImage = require("./resources/images/Clay.png");
let ironImage = require("./resources/images/Iron.png");

const { Option } = Select;

class CityView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      wood: 0,
      clay: 0,
      iron: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeOption = (e) => {
    if (e === "loggout") {
      this.setState({ loading: true }, () => {
        window.location = "/";
        localStorage.clear();
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/usersinfo/", { mode: "cors" })
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        for (var user in users) {
          if (users.hasOwnProperty(user)) {
            if (users[user].userinfo.username === localStorage.getItem("loggedUsername")) {
              this.setState({
                wood: users[user].resources.wood,
                iron: users[user].resources.iron,
                clay: users[user].resources.clay
              });
            }
          }
        }
      });
  }

  componentWillMount() {
    localStorage.setItem(
      "EdificioPrincipal",
      require("./resources/images/Main1.png")
    );
    localStorage.setItem(
      "Quartel",
      require("./resources/images/Barracks1.png")
    );
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <div id="cityView">
          <div id="header">
            <Select
              defaultValue={localStorage.getItem("loggedUsername")}
              style={{ width: 150, float: "right" }}
              onChange={this.handleChangeOption}
            >
              <Option value="loggout">Loggout</Option>
            </Select>
            <div className="resource">
              <img src={ironImage} />
              Ferro: {this.state.iron}
            </div>
            <div className="resource">
              <img src={clayImage} />
              Argila: {this.state.clay}
            </div>
            <div className="resource">
              <img src={woodImage} />
              Madeira: {this.state.wood}
            </div>
          </div>
          <div id="city">
            <div
              className="btnBuilding"
              style={{ top: "103px", left: "343px" }}
            >
              <Building level={10} name={"EdificioPrincipal"} />
            </div>
            <div className="btnBuilding" style={{ top: "95px", left: "390px" }}>
              <Building level={2} name={"Quartel"} />
            </div>
          </div>
        </div>
      </Spin>
    );
  }
}

export default CityView;
