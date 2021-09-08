import React, { Component } from "react";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      mode: "light",
      progress: 0,
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

  setProgress = (prog) => {
    this.setState({ progress: prog });
  }

  pageSize = 6;

  render() {
    return (
      <>
        <Router>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />

          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => this.setState({ progress: 0 })}
          />

          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" mode={this.state.mode} /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" mode={this.state.mode} /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" mode={this.state.mode} /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" mode={this.state.mode} /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" mode={this.state.mode} /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" mode={this.state.mode} /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" mode={this.state.mode} /></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
