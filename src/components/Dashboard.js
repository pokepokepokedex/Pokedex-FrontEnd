import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import axios from 'axios';
import './Dashboard.css';
import { NavLink, Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.style = {};
    this.state = {
      pokemonSearched: []
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      axios
        .get(
          `https://pokepokepokedex.herokuapp.com/api/pokemon/${
            this.props.match.params.id
          }`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: window.localStorage.token
            }
          }
        )
        .then(res => this.setState({ pokemonSearched: res.data }))
        .catch(err => console.log(err));
    } else {
      this.props.history.push('/');
    }
  };

  displayPokemon = () => {
    let pokemon = [];
    if (this.state.pokemonSearched.id == this.props.match.params.id) {
      pokemon = this.state.pokemonSearched;
    } else {
      pokemon = this.props.pokemon.find(
        pokemon => `${pokemon.id}` === this.props.match.params.id
      );
    }
    return pokemon;
  };

  render() {
    console.log(this.props);

    const determineColor = type => {
      let colorResult;
      switch (type) {
        case 'fire':
          {
            colorResult = 'red';
          }
          break;
        case 'water':
          {
            colorResult = '#09E1FF';
          }
          break;
        case 'normal':
          {
            colorResult = '#1DFDA8';
          }
          break;
        case 'poison':
          {
            colorResult = '#B918FF';
          }
          break;
        case 'electric':
          {
            colorResult = 'yellow';
          }
          break;
        case 'ground':
          {
            colorResult = '#FF9C15';
          }
          break;
        case 'fairy':
          {
            colorResult = '#FF69B4';
          }
          break;
        case 'grass':
          {
            colorResult = '#34FF5C';
          }
          break;
        case 'bug':
          {
            colorResult = '#90EE38';
          }
          break;
        case 'psychic':
          {
            colorResult = '#B71ECF';
          }
          break;
        case 'rock':
          {
            colorResult = '#DCB883';
          }
          break;
        case 'fighting':
          {
            colorResult = '#FF3A17';
          }
          break;
        case 'ghost':
          {
            colorResult = '#6817FF';
          }
          break;
        case 'ice':
          {
            colorResult = '#52FFFA';
          }
          break;
        case 'dragon':
          {
            colorResult = '#A533FF';
          }
          break;
        case 'dark':
          {
            colorResult = '#3D009C';
          }
          break;
        case 'flying':
          {
            colorResult = '#4DA1FF';
          }
          break;
        case 'steel': {
          colorResult = '#BFBFBF';
        }
      }
      return colorResult;
    };

    const table = type => {
      let tableResult;
      switch (type) {
        case 'fire':
          {
            tableResult = 'https://i.ibb.co/fMkqPdG/Turtable-fire.png';
          }
          break;
        case 'water':
          {
            tableResult = 'https://i.ibb.co/Y24KNd5/Turtable-beach.png';
          }
          break;
        case 'normal':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'poison':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'electric':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'ground':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'fairy':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'grass':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'bug':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'psychic':
          {
            tableResult = 'https://i.ibb.co/nzMhTnr/Turtable-dark.png';
          }
          break;
        case 'rock':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'fighting':
          {
            tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
          }
          break;
        case 'ghost':
          {
            tableResult = 'https://i.ibb.co/nzMhTnr/Turtable-dark.png';
          }
          break;
        case 'ice':
          {
            tableResult = 'https://i.ibb.co/4Vv7hkZ/Turtable-snow.png';
          }
          break;
        case 'dragon':
          {
            tableResult = 'https://i.ibb.co/fMkqPdG/Turtable-fire.png';
          }
          break;
        case 'dark':
          {
            tableResult = 'https://i.ibb.co/nzMhTnr/Turtable-dark.png';
          }
          break;
        case 'flying':
          {
            tableResult = 'https://i.ibb.co/CHWTLvq/Turtable-sky.png';
          }
          break;
        case 'steel': {
          tableResult = 'https://i.ibb.co/FsYbFB7/Turtable.png';
        }
      }
      return tableResult;
    };

    let pokemon = this.displayPokemon();

    return !pokemon ? (
      <h1>Pokemon MIA</h1>
    ) : (
      <div className='dashboard-container'>
        <img
          src={require(`../assets/chevrons-right.svg`)}
          alt='arrow down'
          className='scroll-down'
        />
        <div className='pokemon-model'>
          <img
            src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
              pokemon.name
            }.gif`}
            alt='pokemon'
            className='pokemon-dash'
            onError={this.props.addDefaultSrc}
          />

          <img
            src={table(pokemon.type1)}
            alt='turntable'
            className='turntable'
          />

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='552'
            height='552'
            viewBox='0 0 552 552'
            className='pokeball-logo'
          >
            <g
              id='Neon_Pokeball_Logo'
              data-name='Neon Pokeball Logo'
              transform='translate(-684 -223)'
            >
              <path
                id='Path_14'
                data-name='Path 14'
                d='M43.167,378.167,491.5-39.167'
                transform='translate(679.5 364.5)'
                fill='none'
                stroke={determineColor(pokemon.type1)}
                stroke-linecap='round'
                stroke-width='6'
              />
              <g
                id='Ellipse_2'
                data-name='Ellipse 2'
                transform='translate(723 262)'
                fill='none'
                stroke={determineColor(pokemon.type1)}
                stroke-width='6'
              >
                <circle cx='237' cy='237' r='237' stroke='none' />
                <circle cx='237' cy='237' r='234' fill='none' />
              </g>
              <g
                id='Ellipse_3'
                data-name='Ellipse 3'
                transform='translate(684 223)'
                fill='none'
                stroke={determineColor(pokemon.type1)}
                stroke-width='6'
                opacity='0.18'
              >
                <circle cx='276' cy='276' r='276' stroke='none' />
                <circle cx='276' cy='276' r='273' fill='none' />
              </g>
              <g
                id='Ellipse_5'
                data-name='Ellipse 5'
                transform='translate(889 428)'
                fill='none'
                stroke={determineColor(pokemon.type1)}
                stroke-width='6'
              >
                <circle cx='71' cy='71' r='71' stroke='none' />
                <circle cx='71' cy='71' r='68' fill='none' />
              </g>
              <path
                id='Path_26'
                data-name='Path 26'
                d='M43.167,378.167,491.5-39.167'
                transform='translate(705.5 289.5)'
                fill='none'
                stroke={determineColor(pokemon.type1)}
                stroke-linecap='round'
                stroke-width='6'
              />
            </g>
          </svg>
        </div>
        <div className='pokemon-title-tag'>
          <h2
            style={{
              borderColor: determineColor(pokemon.type1)
            }}
          >
            {pokemon.name}
          </h2>
          <div className='poke-info'>
            <p>Type:{pokemon.type1}</p>
            <p>Generation: {pokemon.generation}</p>
          </div>
        </div>
        <div className='stats'>
          <div className='stat-container'>
            <p>HP : {pokemon.hp}</p>
            <Progress
              percent={pokemon.hp}
              status='active'
              theme={{
                active: {
                  color: determineColor(pokemon.type1),
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>ATTACK : {pokemon.attack}</p>
            <Progress
              percent={pokemon.attack}
              status='active'
              theme={{
                active: {
                  color: determineColor(pokemon.type1),
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>DEFENSE : {pokemon.defense}</p>
            <Progress
              percent={pokemon.defense}
              status='active'
              theme={{
                active: {
                  color: determineColor(pokemon.type1),
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>SPEED : {pokemon.defense}</p>
            <Progress
              percent={pokemon.defense}
              status='active'
              theme={{
                active: {
                  color: determineColor(pokemon.type1),
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>SPECIAL DEFENSE : {pokemon.sp_defense}</p>
            <Progress
              percent={pokemon.sp_defense}
              status='active'
              theme={{
                active: {
                  color: determineColor(pokemon.type1),
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>SPECIAL ATTACK : {pokemon.sp_attack}</p>
            <Progress
              percent={pokemon.sp_attack}
              status='active'
              theme={{
                active: {
                  color: determineColor(pokemon.type1),
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
        </div>
        <div
          className='pokemon-details'
          style={{
            borderColor: determineColor(pokemon.type1)
          }}
        >
          <div className='detail-container'>
            <p>Base Happiness: {pokemon.base_happiness}</p>
            <p>Capture Rate: {pokemon.capture_rate}</p>
            <p>Abilities: {pokemon.abilities}</p>
          </div>

          <Link
            onClick={() => this.props.addToBackpack(this.props.match.params.id)}
            to='/backpack'
          >
            <button
              className='add-pokemon'
              style={{
                borderColor: determineColor(pokemon.type1)
              }}
            >
              + Catch Pokemon
            </button>
          </Link>
        </div>
        <div
          className='Stat-Page'
          style={{
            borderColor: determineColor(pokemon.type1)
          }}
        >
          <p> {pokemon.name} STATS</p>
          <iframe
            src='https://jav-iframes.herokuapp.com/'
            width='1200px'
            height='1300px'
            frameborder='0'
            sandbox
            name='pokemon stats'
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
