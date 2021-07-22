import contentful, { createClient } from 'contentful';

interface CustomNodeJsGlobal extends NodeJS.Global {
  contentful: contentful.ContentfulClientApi;
}

declare const global: CustomNodeJsGlobal;

const client =
  global.contentful ||
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

if (process.env.NODE_ENV === 'development') global.contentful = client;

export default client;
