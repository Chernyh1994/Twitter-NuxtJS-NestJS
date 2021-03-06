import colors from "vuetify/lib/util/colors"

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "JSN (NuxtJS)",
    title: "Test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#26c6da" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-masonry", ssr: false },
    { src: "~/plugins/google-maps", ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */

  modules: ["nuxt-vuex-localstorage", "@nuxtjs/axios", "@nuxtjs/auth"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: { customProperties: true },
      themes: {
        light: {
          primary: "#00838F",
          secondary: colors.amber.darken3,
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    transpile: [/^vue2-google-maps($|\/)/]
  },

  axios: {
    baseURL: "http://localhost:5000/"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "/auth/user",
            method: "get",
            propertyName: false
          },
          logout: false
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    }
  },

  router: {
    middleware: ["auth"]
  }
}
