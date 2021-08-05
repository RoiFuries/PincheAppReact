import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Welcome from '../components/Welcome';
import Search from '../components/Search';
import Recomendations from '../components/Recomendations';
import CarouselTitle from '../components/CarouselTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Menu from '../components/Menu';

const App = () => (
  <div className='app'>
    <Header />
    <Welcome />
    <Search />
    <Recomendations />
    <CarouselTitle>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </CarouselTitle>
    <CarouselTitle>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </CarouselTitle>
    <CarouselTitle>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </CarouselTitle>
    <Menu />

  </div>
);

export default App;