import React from 'react';
import '../assets/styles/components/Recomendations.scss';
import imgEnvuelto from '../assets/static/img/envuelto.jpg';

const Recomendations = () => {
  return (
    <section className='recomendation'>
      <div className='recomendation--container'>
        <div className='recomendation--container--image'>
          <figure className='recomendation--container--image--img'>
            <img src={imgEnvuelto} alt='envueltoDePapa' />
          </figure>
        </div>
        <div className='recomendation--container--txts'>
          <p className='recomendation--container--txts--title'>
            Envuelto de Papa
          </p>
          <p className='recomendation--container--txts--type'>
            Omnívoros
          </p>
        </div>

      </div>
      <div className='recomendation--container'>
        <div className='recomendation--container--image'>
          <figure className='recomendation--container--image--img'>
            <img src={imgEnvuelto} alt='envueltoDePapa' />
          </figure>
        </div>
        <div className='recomendation--container--txts'>
          <p className='recomendation--container--txts--title'>
            Envuelto de Papa
          </p>
          <p className='recomendation--container--txts--type'>
            Omnívoros
          </p>
        </div>

      </div>
    </section>
  );
};

export default Recomendations;
