import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Link } from 'react-router-dom';
import './CharList.css';
const CharacterList = ({setFavouriteCharacter}) => {

  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      axios('https://api.github.com/users').then((res) => setCharacters(res.data));
    }, []);





          return (
            <>
                <div className='List'>
                    {characters.map((char) => {
                      return (
                        <div key={char.id}>
                         <CharacterCard data={char}  setFavouriteCharacter={setFavouriteCharacter}/>

                          <Link to={`/detail/${char.id}`} className='Link'>
                            Ver Persona
                          </Link>
                        </div>
                      );
                    })}
                </div>
              )
            </>
          );
        };


export default CharacterList