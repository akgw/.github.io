// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: "Ryunosuke's portfolio",
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '赤川龍之介の自己紹介ポートフォリオです。' },
      { hid: 'keywords', name: 'keywords', content: '赤川,龍之介,赤川龍之介,ポートフォリオ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://akgw.github.io' },
      { hid: 'og:title', property: 'og:title', content: 'portfolio' },
      { hid: 'og:description', property: 'og:description', content: '赤川龍之介の自己紹介ポートフォリオです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://akgw.github.io' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://akgw.github.io',
    path: '/sitemap.xml',
    exclude: []
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          background: '#f8f5f2',
          headline: '#232323',
          paragraph: '#232323',
          button: '#078080',
          buttonText: '#232323',
          stroke: '#232323',
          main: '#fffffe',
          highlight: '#078080',
          secondary: '#f45d48',
          tertiary: '#f8f5f2'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir: 'docs'
  },

  buildDir: 'docs',

  alias: {
    '~': path.resolve(__dirname),
    '@': path.resolve(__dirname)
  }
}
