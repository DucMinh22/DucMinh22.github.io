import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import News from "../Component/Topmenu/News";
import NewsDeatil from "../Component/Topmenu/NewsDeatil";
import Contact from "../Component/Topmenu/Contact";

export default class DieuhuongURL extends Component {
    render() {
        return (
            
            <div>
              <Switch>
                <Route path="/tin" >
                  <News />
                </Route>
                <Route path="/NewsDetails">
                  <NewsDeatil />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          
        );
    }
}
