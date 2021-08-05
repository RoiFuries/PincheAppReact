import React from 'react';
import IconSarten from '../assets/static/icons/IconSarten.png';
import IconMariana from '../assets/static/icons/IconMariana.png';
import IconBasket from '../assets/static/icons/IconBasket.png';
import IconProfile from '../assets/static/icons/IconProfile.png';
import IconChallenge from '../assets/static/icons/IconChallenge.png';
import '../assets/styles/components/Menu.scss';

const Menu = () => {
  return (
    <footer className='menu'>
      <div className='menu__iconsConatiner'>
        <div className='menu__iconsConatiner__left'>
          <a href='#' className='menu__iconsConatiner__left__btn'>
            <img src={IconMariana} alt='icon to go recetario of mariana' className='menu__iconsConatiner__left__btn__img' />
          </a>
          <a href='#' className='menu__iconsConatiner__left__btn'>
            <img src={IconBasket} alt='icon to go bastket feature' className='menu__iconsConatiner__left__btn__img' />
          </a>
        </div>
        <div className='menu__iconsConatiner__center'>
          <div className="menu__iconsConatiner_a_center">
            <div className="menu__iconsConatiner_b_center">
              <div className="menu__iconsConatiner_c_center">
                <a href='#' className='menu__iconsConatiner__center__btn'>
                  <img src={IconSarten} alt='Icon to go Sarten feature' className='menu__iconsConatiner__center__btn__img' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='menu__iconsConatiner__rigth'>
          <a href='#' className='menu__iconsConatiner__rigth__btn'>
            <img src={IconProfile} alt='Icon to go profile page' className='menu__iconsConatiner__rigth__btn__img' />
          </a>
          <a href='#' className='menu__iconsConatiner__rigth__btn'>
            <img src={IconChallenge} alt='Icon to go challenge feature' className='menu__iconsConatiner__rigth__btn__img' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Menu;
