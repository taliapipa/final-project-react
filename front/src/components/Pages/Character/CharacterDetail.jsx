import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../../../redux/characters/characters.reducer';
import '../../../styles/CharacterDetail.css'

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.data);
  const character = characters.find((character) => character.id === id);

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);

  if (!character) {
    return <p>Character not found.</p>;
  }

  return (
    <div className='div-detail'>
      <h2>{character.name}</h2>
      <img src={character.avatar} alt={character.name} />
      <p className='p-type'>{character.breed}</p>
      <p>{character.description}</p>

    </div>
  );
};

export default CharacterDetail;
