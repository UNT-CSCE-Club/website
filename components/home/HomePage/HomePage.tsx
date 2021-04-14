import React from 'react';
import { NextSeo } from 'next-seo';
import {
  About,
  Contact,
  Events,
  Hero,
  Officers,
  Opportunities,
} from 'components/home';

const HomePage = () => {
  return (
    <>
      <NextSeo
        title='UNT Computer Science Club'
        description='The University of North Texas Computer Science Club offical website. Come join the community!'
        canonical='https://unt-csce-club.netlify.app/'
      />
      <Hero />
      <About />
      <Events />
      <Opportunities />
      <Officers />
      <Contact />
    </>
  );
};

export default HomePage;
