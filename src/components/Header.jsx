import React from 'react';
import logo from '../assets/static/brand/logo.svg';
import iconBurger from '../assets/static/icons/burger.svg';
import iconProfile from '../assets/static/icons/profile.svg';
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