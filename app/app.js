import React from "react";
import ReactDOM from "react-dom";

import Greeting from "./comps/greeting";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount(prevProps, prevState) {
    setTimeout(() => this.setState({ ready: true }), 1000);
  }

  render() {
    return (
      <Greeting ready={this.state.ready}/>
    );
  }
};
