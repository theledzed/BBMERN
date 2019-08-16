import React, { Component } from "react";
import { login, register } from "./UserFunctions";
import { throws } from "assert";
import "../App.css";
import "antd/dist/antd.css";
import { Input, Row, Col, Button } from "antd";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    register(user).then(res => {
      if (res) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <Col span={8} />
          <Col span={8}>
          
            <form  className="formRegisterMovies" onSubmit={this.onSubmit}>
              <h1>Registrate</h1>
              <div>
                {" "}
                <label>FirstName</label>
                <Input
                  allowClear
                  value={this.state.first_name}
                  onChange={e => {
                    this.setState({
                      first_name: e.target.value
                    });
                  }}
                />
              </div>
              <div>
                {" "}
                <label>LastName</label>
                <Input
                  allowClear
                  value={this.state.last_name}
                  onChange={e => {
                    this.setState({
                      last_name: e.target.value
                    });
                  }}
                />
              </div>
              <div>
                {" "}
                <label>Email</label>
                <Input
                  allowClear
                  value={this.state.email}
                  onChange={e => {
                    this.setState({
                      email: e.target.value
                    });
                  }}
                />
              </div>
              <div>
                {" "}
                <label>password</label>
                <Input.Password
                  value={this.state.password}
                  onChange={e => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                />
              </div>
              <br/>
              <Button onClick={this.onSubmit} type="primary">
                Register
              </Button>
            </form>
          </Col>
          <Col span={8} />
        </div>
      </div>
    );
  }
}

export default Register;
