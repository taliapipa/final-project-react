import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCharacter } from '../../../redux/characters/characters.reducer';
import '../../../styles/CharacterList.css';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import Search from '../../Shared/Search/Search';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.data);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  return (
    <div>
      <Search characters={characters} setFilteredCharacters={setFilteredCharacters} />

      <ul>
        {filteredCharacters && filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <li key={character.id}>
              <img src={character.avatar} alt={character.name} className='img-list' />
              <p>{character.name}</p>
              <p>{character.breed}</p>
              <Link to={`/characterdetail/${character.id}`}> <Button text="More"></Button></Link>
             
            </li>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </ul>
    </div>
  );
};

export default CharacterList;

