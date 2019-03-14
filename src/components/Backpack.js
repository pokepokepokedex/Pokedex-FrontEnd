import React, { Component } from "react";
import "./Backpack.css";
import { NavLink } from "react-router-dom";
import Pokemon from "./Pokemon";
import axios from "axios";

class Backpack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://pokepokepokedex.herokuapp.com/api/user${
          window.localStorage.id
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: window.localStorage.token
          }
        }
      )
      .then(res => this.setState({ pokemon: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    let pokemon = this.state.pokemon;
    return (
      <div className="backpack-container">
        {pokemon &&
          pokemon.map(poke => (
            <div key={poke.id}>
              <NavLink to={`/dashboard/${poke.id}`}>
                <Pokemon poke={poke} />
              </NavLink>
            </div>
          ))}
      </div>
    );
  }
}

export default Backpack;
