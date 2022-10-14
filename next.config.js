/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "th",
    locales: ["en", "th"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
