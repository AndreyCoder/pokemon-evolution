import React from 'react'
import Pokemon from '../pokemon/Pokemon.jsx'
import s from './pokemons.module.css'
import Ellipsis from '../../media/Ellipsis.gif'

const pokemons = ({ allPokemons, getAllPokemons }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Pokemon Evolution</h1>
      <button
        className={s.loadMore}
        onClick={() => getAllPokemons()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Load more
      </button>

      <div className={s.cards}>
        {
          allPokemons ?
            allPokemons.map((pokemon, index) =>
              <Pokemon
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            ) :
            <div> <img src={Ellipsis} alt='loading' /> </div>
        }
      </div>

      <button
        className={s.loadMore}
        onClick={() => getAllPokemons()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Load more
      </button>

    </div>
  )
}

export default pokemons

