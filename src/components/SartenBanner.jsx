import React from 'react';
import SartenIlustration from '../assets/static/img/ilustracion.png';
import '../assets/styles/components/SartenBanner.scss';

const SartenBanner = () => {
  return (
    <figure className='banner'>
      <img src={SartenIlustration} alt='Ilustration abou a woman coking happy' className='banner__img' />
    </figure>
  );
};

export default SartenBanner;
