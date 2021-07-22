import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import client from 'lib/contentful';
import { Entry } from 'contentful';
import { HomePageFields } from 'types';
import {
  About,
  Contact,
  Events,
  Hero,
  Officers,
  Workshops,
} from 'components/home';

interface HomePageProps {
  page: HomePageFields;
}

const HomePage = ({ page }: HomePageProps) => {
  if (!page) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <NextSeo
        title={
          process.env.NODE_ENV === 'development'
            ? '(Dev) UNT Computer Science Club'
            : 'UNT Computer Science Club'
        }
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

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  let response: Entry<HomePageFields>;

  try {
    response = await client.getEntry('2iws46qnea1iIVJhECoHpL', {
      include: '2',
    });
  } catch (error) {
    console.log(error.message);
  }

  // console.log(JSON.stringify(response.fields));
  // console.log('ran');

  return {
    props: { page: response?.fields ?? null },
    // revalidate: process.env.NODE_ENV === 'development' ? false : 1,
    revalidate: false,
  };
};

export default HomePage;
