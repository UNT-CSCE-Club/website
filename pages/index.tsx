import { GetStaticProps } from 'next';
import { HomePage } from 'components/home';
import client from 'lib/contentful';
import { Entry } from 'contentful';
import { HomePageFields } from 'types';

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
