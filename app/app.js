import React from "react";
import cx from "classnames";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "flexboxgrid";
import style from "./style.css";
import Greeting from "./comps/greeting";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount(prevProps, prevState) {
    setTimeout(() => this.setState({ ready: true }), 5000);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={cx("row", "middle-xs", "center-xs", style.container)}>
          <div className="col-xs-6">
            <div className="box">
              <Greeting ready={this.state.ready}/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};
