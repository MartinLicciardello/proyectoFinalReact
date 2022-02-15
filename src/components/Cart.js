import React from 'react'

const Cart = ({favouriteCharacter}) => {
  return (
    <div>

    <h1>Carrito</h1>
        {favouriteCharacter.map(character => (
            <p>{character.login}</p>
        ))}

    </div>
  )
}

export default Cart