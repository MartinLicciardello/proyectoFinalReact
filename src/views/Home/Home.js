import React from 'react'
import CharacterList from '../../components/CharacterList/CharacterList'

const Home = ({setFavouriteCharacter}) => {
  return (
    
    <div><CharacterList setFavouriteCharacter={setFavouriteCharacter}/></div>
  )
}

export default Home