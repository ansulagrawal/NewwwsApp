import React, { Component } from "react";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "#141618";
      this.setState({ mode: "dark" });
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({ mode: "light" });
    }
  };

  pageSize = 21;

  render() {
    return (
      <>
        <Router>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={this.pageSize}
                category="general"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                category="business"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                category="entertainment"
                mode={this.state.mode}
              />
            </Route>
            {/* <Route exact path="/general">
              <News
                key="general"
                pageSize={this.pageSize}
                category="general"
                mode={this.state.mode}
              />
            </Route> */}
            <Route exact path="/health">
              <News
                key="health"
                pageSize={this.pageSize}
                category="health"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.pageSize}
                category="science"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                category="sports"
                mode={this.state.mode}
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                category="technology"
                mode={this.state.mode}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
