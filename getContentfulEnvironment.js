require('dotenv').config({ path: './.env.local' });

const contentfulManagement = require('contentful-management');

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  const x = async () => {
    const space = await contentfulClient
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then(space =>
        space
          .getEnvironment(process.env.CONTENTFUL_ENVIRONMENT)
          .then(env => env.getContentTypes())
      );
    console.log(space);
    return space;
  };

  console.log(x());

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
