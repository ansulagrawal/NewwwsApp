import React, { useState } from "react";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const Main = () => {

  const [mode, setmode] = useState('light');
  const [progress, setProgress] = useState(0);

  let pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS__API;

  let toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#141618";
      setmode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setmode("light");
    }
  };

  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />

        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" mode={mode} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" mode={mode} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" mode={mode} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" mode={mode} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" mode={mode} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" mode={mode} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" mode={mode} /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main;