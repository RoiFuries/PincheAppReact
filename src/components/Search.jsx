import React from 'react';
import '../assets/styles/components/Seacrh.scss';
import iconSearch from '../assets/static/icons/search.svg';

const Search = () => (
  <div className='search'>
    <input className='search__input' type='text' placeholder='Busquele mi niño' />
    <div className='search__btn'>
      <img src={iconSearch} alt='Icon Search' className='search__btn__img' />
    </div>
  </div>
);

export default Search;
