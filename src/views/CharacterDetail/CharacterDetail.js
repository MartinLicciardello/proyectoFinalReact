import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';


const CharacterDetail = () => {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let id = useParams();

    let userID = id.id;

    

    useEffect(() => {
      axios(`https://api.github.com/users${userID}`).then((res) =>
        setCharacter(res.data)
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, [userID]);
  
    return (
      <div className='CharacterList-Container'>
        {isLoading ? (
          <h1>Cargando detalle del usuario</h1>
        ) : (
          <div className='CharacterList-detail'>
            {character.map((char) => {
              return (
                <div key={char.id}>
                  <CharacterCard data={char} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };


export default CharacterDetail