/** @type {import('next').NextConfig} */

const { config } = require("dotenv");

config();
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_EMAIL_SERVICE_ID: "service_jhwnnbq",
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: "RDJt-8tkgDjqROGoT",
    NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID: "publicwebsite",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
