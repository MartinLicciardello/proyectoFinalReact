import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './CharacterDetail.css';

const CharacterDetail = ({setFavouriteCharacter}) => {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let id = useParams();

    let userID = id.id;

    

    useEffect(() => {
      axios(`https://api.github.com/users/${userID}`).then((res) =>
        setCharacter(res.data)
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, [userID]);
  
    return (

      <div className="productDetail">
  
        {isLoading
  
          ?
  
          <p>Aguarde unos segundos</p>
  
          :
  
          <CharacterCard data={character} setFavouriteCharacter ={setFavouriteCharacter} />
        }
  
      </div>
  
    );
  };


export default CharacterDetail