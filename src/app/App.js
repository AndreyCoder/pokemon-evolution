import { useEffect, useState } from 'react';
import Pokemos from '../components/pokemons/pokemons.jsx'
import s from './App.module.css'

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=6')


  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)


    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      });
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className={s.app}>

      <div className='s.main'>
        <Pokemos
          allPokemons={allPokemons}
          getAllPokemons={getAllPokemons}
        />
      </div>

    </div>
  );
}

export default App;
