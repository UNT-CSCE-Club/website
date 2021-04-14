import React from 'react';
import { NextSeo } from 'next-seo';

const HomePage = () => {
  return (
    <>
      <NextSeo
        title='UNT Computer Science Club'
        description='The University of North Texas Computer Science Club offical website. Come join the community!'
        canonical='https://unt-csce-club.netlify.app/'
      />
      <header>
        <h1 className='text-primary text-9xl'>Home</h1>
      </header>
    </>
  );
};

export default HomePage;
