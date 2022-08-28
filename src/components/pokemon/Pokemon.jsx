import React from 'react'
import s from './Pokemon.module.css'

const Pokemon = ({ id, name, image, type }) => {

  return (
    <div className={s.card}>

      <h3 className={s.title}>{name}</h3>

      <img
        className={s.image}
        src={image}
        alt={name}
      />

      <div className={s.main}>

        <small className={s.id}>{id}</small>

        <div>
          <h3>Type</h3>
          <p>{type}</p>
        </div>

        <div>
          <h3>Avility</h3>
          <p>{type}</p>
        </div>

      </div>
    </div>
  )
}

export default Pokemon

