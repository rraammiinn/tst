// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '',
    // Keys within public, will be also exposed to the client-side
    public: {
      secret: process.env.secret
    }
  }
})
