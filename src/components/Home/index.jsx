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
          We are PixelShots and here we will be talking a little bit about us!
          ...this is a fiction enterprise, and I made this site to practice my
          skills with React, Styled Components and Web Design. I hope you enjoy
          the content and the design of this site
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
