import React from 'react';
import { NextSeo } from 'next-seo';
import {
  About,
  Contact,
  Events,
  Hero,
  Officers,
  Workshops,
} from 'components/home';

const HomePage = () => {
  return (
    <>
      <NextSeo
        title='UNT Computer Science Club'
        description='The University of North Texas Computer Science Club offical website. Come join the community!'
        canonical='https://untcsce.club/'
      />
      <Hero />
      <About />
      <Events />
      <Workshops />
      <Officers />
      <Contact />
    </>
  );
};

export default HomePage;
