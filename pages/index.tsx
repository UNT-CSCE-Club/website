import { GetStaticProps } from 'next';
import { HomePage } from 'components/home';
import client from 'lib/contentful';
import { Entry } from 'contentful';
import { IHomePage, IHomePageFields } from 'types/generated/contentful';

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  // let response: Entry<IHomePageFields>;
  let response: Entry<IHomePageFields>;

  try {
    response = await client.getEntry('2iws46qnea1iIVJhECoHpL', {
      include: '2',
    });
  } catch (error) {
    console.log(error.message);
  }

  // console.log(response);

  return {
    props: { page: response?.fields ?? null },
  };
};

export default HomePage;
