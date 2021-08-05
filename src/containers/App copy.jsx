import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import SartenBanner from '../components/SartenBanner';
import WelcomeSarten from '../components/WelcomeSarten';
import Search from '../components/Search';
import Menu from '../components/Menu';

const App = () => (
  <div className='app'>
    <Header />
    <SartenBanner />
    <WelcomeSarten />
    <Search />
    <Menu />

  </div>
);

export default App;