import { GetStaticProps } from 'next';
import { HomePage } from 'components/home';
import client from 'lib/contentful';
import { Entry } from 'contentful';

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  let response: Entry<unknown>;

  try {
    response = await client.getEntry('2iws46qnea1iIVJhECoHpL');
  } catch (error) {
    console.log(error.message);
  }

  // console.log(response);

  return {
    props: { page: response?.fields ?? null },
  };
};

export default HomePage;
