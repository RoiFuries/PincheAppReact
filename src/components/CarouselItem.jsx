import React from 'react';
import iconFavs from '../assets/static/icons/IconFavs.png';
import iconShare from '../assets/static/icons/IconShare.png';
import imgSalads1 from '../assets/static/img/salads1.jpg';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img src={imgSalads1} alt='' className='carousel-item__img' />
    <div className='carousel-item__details'>
      <div className='carousel-item__details__conatiner'>
        <p className='carousel-item__details--title'>Titulo del platillo</p>
        <div className='carousel-item__details__icons'>
          <img className='carousel-item__details__icons--favs--img' src={iconShare} alt='Icon to share' />
          <img src={iconFavs} className='carousel-item__details__icons__share--img' alt='Icon to add favs' />
        </div>
      </div>
    </div>
  </div>
);

export default CarouselItem;
