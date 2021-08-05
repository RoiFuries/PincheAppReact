import React from 'react';
import logo from '../assets/static/brand/logo.png';
import iconBurger from '../assets/static/icons/burger.png';
import iconProfile from '../assets/static/icons/profile.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header>
    <section className='header--btn-container'>
      <figure className='header--btn-container--btnburger'>
        <img src={iconBurger} alt='' />
      </figure>
      <figure className='header--btn-container--btnProfile'>
        <img src={iconProfile} alt='' />
      </figure>
    </section>
    <section className='header--Logo'>
      <figure className='header--Logo--img'>
        <a href='./index.html'>
          <img src={logo} alt='' />
        </a>
      </figure>
    </section>
  </header>
);

export default Header;