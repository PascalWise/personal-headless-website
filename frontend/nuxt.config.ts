// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
});
