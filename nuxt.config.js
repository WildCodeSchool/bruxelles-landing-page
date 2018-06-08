module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Formation développeur web Bruxelles',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
        integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/main.scss', lang: 'scss' }
  ],
  modules: [
    ['nuxt-i18n', {
      locales: [
        { code: 'be', iso: 'fr-BE', file: 'be.js' },
        { code: 'en', iso: 'en-UK', file: 'en.js' },
      ],
      defaultLocale: 'be',
      seo: true,
      lazy: true,
      langDir: 'lang/'
    }]
  ],
  plugins: ['~plugins/vue-googlemaps'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fba858' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
