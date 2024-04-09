import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

import Home from "./pages/Home";
import AppMobile from "./pages/AppMobile/AppMobile";
import Video from "./pages/Video/Video";
import Anak from "./pages/Category/Anak";
import Bedah from "./pages/Category/Bedah";
import Saraf from "./pages/Category/Saraf";
import Gigi from "./pages/Category/Gigi";
import Jantung from "./pages/Category/Jantung";
import Kandungan from "./pages/Category/Kandungan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/kandungan" component={Kandungan} />
          <Route path="/jantung" component={Jantung} />
          <Route path="/gigi" component={Gigi} />
          <Route path="/saraf" component={Saraf} />
          <Route path="/bedah" component={Bedah} />
          <Route path="/anak" component={Anak} />
          <Route path="/home" component={Home} />
          <Route path="/appMobile" component={AppMobile} />
          <Route path="/video" component={Video} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
