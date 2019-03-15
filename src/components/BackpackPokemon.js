import React from 'react';
import './Backpack.css';

const BackpackPokemon = ({ poke, addDefaultSrc }) => {
  return (
    <>
      <div className='pokemon'>
        <div className='pokeball-backpack'>
          <h4 className='pokedex-name'> {poke.name} </h4>

          <img
            src={require(`../assets/pokedex_top.png`)}
            className='pokedex-top'
            alt='pokedex'
          />
          <img
            src={require(`../assets/pokedex_bottom.png`)}
            className='pokedex-bottom'
            alt='pokedex'
          />
          <span className='hologram-bg' />
        </div>

        <img
          src={`http://res.cloudinary.com/kingmuze/image/upload/fl_lossy/v1/Pokemon_Gifs/${
            poke.name
          }.gif`}
          alt='pokemon'
          className='backpack-pokemon'
          onError={addDefaultSrc}
        />
      </div>
      {/* <img
        src={require(`../assets/delete.png`)}
        alt='delete'
        className='delete-btn'
      /> */}
    </>
  );
};

export default BackpackPokemon;
