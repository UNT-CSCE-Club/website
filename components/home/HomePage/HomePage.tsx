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

const HomePage = ({ page }) => {
  console.log(page);

  if (!page) {
    return <p>Oops</p>;
  }

  return (
    <>
      <NextSeo
        title='UNT Computer Science Club'
        description='University of North Texas Computer Science Club offical website. Come join the community!'
        canonical='https://untcsce.club/'
      />
      <Hero data={page.hero.fields} />
      <About data={page.about.fields} />
      <Events data={page.events.fields} />
      <Workshops data={page.workshops.fields} />
      <Officers data={page.officers.fields} />
      <Contact data={page.contact.fields} />
    </>
  );
};

export default HomePage;
