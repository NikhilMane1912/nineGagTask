import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://9gag.com/v1/featured-posts")
      .then((response) => {
        const data = response.data.results;
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map((item, index) => (
          <UserList key={index} {...item} />
        ))}
      </div>
    );
  }
}

const UserList = (props) => (
  <p>
    <strong>name : </strong> {props.name.first}
  </p>
);

render(<App />, document.getElementById("root"));
