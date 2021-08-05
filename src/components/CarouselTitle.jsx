import React from 'react';
import '../assets/styles/components/CarouselTitle.scss';

const CarouselTitle = ({ children }) => (
  <div className='Carou'>
    <h3 className='carousel__title'> Ensaladas </h3>
    {children}
  </div>
);

export default CarouselTitle;
