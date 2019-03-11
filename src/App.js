import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import { Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Home from "./components/Home";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    if (localStorage.get("token")) {
      axios
        .get("https://pokepokepokedex.herokuapp.com/data")
        .then(res => this.setState({ pokemon: res.data.data }))
        .catch(err => console.log(err));
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <>
        <Route component={Nav} />
        <Route
          exact
          path="/home"
          render={props => <Home {...props} pokemon={this.state.pokemon} />}
        />
        <Route
          path="/dashboard/:id"
          render={props => (
            <Dashboard {...props} pokemon={this.state.pokemon} />
          )}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <div className="bg-elements">
          <span className="sidebar-left" />
          <span className="sidebar-right" />
          <span className="bar-bottom" />
          <span className="dotted-grid" />
          <span className="bg-image" />
          <span className="blur" />
        </div>
      </>
    );
  }
}

export default App;
