// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [['github:matter-labs/docs-nuxt-template', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
  runtimeConfig: {
    public: {
      app: 'sdk',
    },
  },
  nitro: {
    prerender: {
      routes: ['/sdk'],
    },
  },
  routeRules: {
    '/': { redirect: '/sdk' },
  },
});
