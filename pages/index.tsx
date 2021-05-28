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

  return {
    props: { page: response?.fields ?? null },
    revalidate: 1,
  };
};

export default HomePage;
