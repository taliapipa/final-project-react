import React, { useState } from 'react';
import '../Search/Search.css'
import { FaSistrix } from "react-icons/fa";

const Search = ({ characters, setFilteredCharacters }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharacters(filteredCharacters);
  };

  return (
    <div className='div-search'>
      <input
        className='input-search'
        type="text"
        placeholder="Search... "
        value={searchTerm}
        onChange={handleSearch}
      />
      <FaSistrix className="search-icon"/>
    </div>
  );
};

export default Search;
