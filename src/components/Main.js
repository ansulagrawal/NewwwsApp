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

  render() {
    return (
      <>
        <Router>
          {/* <NavBar mode = {this.handleDarkMode} /> */}
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={9} category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={9} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={9} category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={9} category="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={9} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={9} category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={9} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={9} category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
