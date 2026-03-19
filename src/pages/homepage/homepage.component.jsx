import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <div className='home-copy'>
      <span className='eyebrow'>Funky Clothes</span>
      <h1>Streetwear essentials with a sharper point of view.</h1>
      <p>
        Explore standout categories, bold silhouettes, and elevated everyday
        pieces in a storefront that feels more like a brand drop than a demo.
      </p>
    </div>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
