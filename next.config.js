const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  images: {
    domains: ['images.unsplash.com', 'cdn.chec.io'],
  },
  target: 'serverless',
});
