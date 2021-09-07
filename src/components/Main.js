import React, { Component } from "react";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Main extends Component {
  // constructor(){
  //     super();
  //     this.state ={
  //         darkMode: "light",
  //     }
  // }

  // handleDarkMode =() => {
  //     if(this.state.darkMode === "light"){
  //         this.setState({darkMode: "dark"})
  //         console.log(this.state.darkMode)
  //         return this.state.darkMode
  //     } else {
  //         this.setState({darkMode:"light"})
  //         console.log(this.state.darkMode)
  //         return this.state.darkMode
  //     }
  // }

  pageSize = 21;

  render() {
    return (
      <>
        <Router>
          {/* <NavBar mode = {this.handleDarkMode} /> */}
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} category="general" />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={this.pageSize} category="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pageSize} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.pageSize} category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.pageSize} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
