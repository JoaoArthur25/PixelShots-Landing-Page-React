import React from 'react';
import {
  HomeWrapper,
  HomeText,
  HomeTitle,
  HomeDescription,
  HomeLink,
  HomeImage,
} from './styles';

const logoImage = require('../../images/home.jpg');

const Home = () => {
  return (
    <HomeWrapper id="home">
      <HomeText>
        <HomeTitle>WELCOME TO PIXELSHOTS</HomeTitle>
        <HomeDescription>
          We are PixelShots and here we will be talking a little bit about us
        </HomeDescription>
        <HomeLink href="#history">Our History</HomeLink>
      </HomeText>
      <HomeImage>
        <img src={logoImage} alt="Home" />
      </HomeImage>
    </HomeWrapper>
  );
};

export default Home;
