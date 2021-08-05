import React from 'react';
import '../assets/styles/components/Loader.scss';
import TalaveraUpLeft from '../assets/static/icons/talavera_UpLeft.svg';
import TalaveraUpRight from '../assets/static/icons/talavera_UpRight.svg';
import TalaveraCenterLeft from '../assets/static/icons/talavera_CenterLeft.svg';
import TalaveraCenterRight from '../assets/static/icons/talavera_CenterRight.svg';
import LogoS from '../assets/static/brand/Logo_s.svg';
import TalaveraDownLeft from '../assets/static/icons/talavera_DownLeft.svg';
import TalaveraDownRight from '../assets/static/icons/talavera_DownRight.svg';

const Loader = () => (
  <section className='container'>
    <section className='up'>
      <img src={TalaveraUpLeft} alt='IconTalavera' className='up__img' />
      <img src={TalaveraUpRight} alt='IconTalavera' className='up__img' />
    </section>
    <section className='center'>
      <figure className='center__left'>
        <img src={TalaveraCenterLeft} alt='icon Talavera' className='center__left__img'/>
      </figure>
      <figure className='center__center'>
        <a href='./index.html'> <img src={LogoS} alt='Logo Cuadrado' className='center__center__img' /> </a>
      </figure>
      <figure className='center__righ'>
        <img src={TalaveraCenterRight} alt='icon Talavera' className='center__right__right' />
      </figure>
    </section>
    <section className='down'>
      <img src={TalaveraDownLeft} alt='IconTalavera' className='down__img' />
      <img src={TalaveraDownRight} alt='IconTalavera' className='down__img' />
    </section>
  </section>
);

export default Loader;
