// require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

// const { getDb } = require("./lib/db.js");
import { getDb } from "./lib/db.js";

export default {
  server: {
    port: 8080, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  publicRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL
  },
  privateRuntimeConfig: {
    dbUser: process.env.DB_USER,
    dbPasswd: process.env.DB_PASSWORD
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: "server",
  target: "static",
  generate: {
    fallback: false
  },
  generate: {
    routes: ["/email-confirm"]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "email-confirm/:confirmId",
        component: resolve(__dirname, "pages/email-confirm/_confirmId/index.vue")
      });
    }
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title:
      "Blog.twelvepics.com - Photography, programming and more - Home page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "It is an illusion that photos are made with the camera... they are made with the eye, heart and head. - Henri Cartier-Bresson"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/styles/common.css" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  // css: ["@/assets/scss/main.scss"],
  // css: ["@/assets/styles/common.css", "@/assets/scss/main.scss"],
  // css: ["bulma", "@/assets/styles/common.css", "@/assets/styles/common.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~plugins/date-filter.js",
    "~plugins/Vuelidate",
    "~plugins/VClickOutside"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/style-resources"
    // [
    //   "@nuxtjs/dotenv",
    //   { filename: `.env.${process.env.NODE_ENV}`, systemvars: true }
    // ]
  ],
  /*
   ** Nuxt.js modules
   */
  // https://nuxtjs.org/guide/modules
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // "@nuxtjs/bulma",
    // "@nuxtjs/style-resources",
    "nuxt-fontawesome",
    "@nuxt/http",
    "@nuxtjs/sitemap"
  ],
  styleResources: {
    // your settings here
    // ?????
    scss: ["~assets/scss/main.scss"]
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons", // Solid icons
        icons: [
          "faCamera", "faEnvelope", "faPrint", "faFilePdf", "faPlay",
          "faPause", "faStepForward", "faStepBackward", "faFastBackward",
          "faFileDownload"
        ]
      },
      {
        set: "@fortawesome/free-brands-svg-icons", // Brand icons
        icons: ["faTwitter"]
      }
    ]
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    // UNCOMMENT FOR PROD
    // babel: {
    //   plugins: ['babel-plugin-transform-remove-console']
    // }

    // extend(config, ctx) {
    //   // Includes the Compiler version of Vue.
    //   // If you don't use the <wp-content> component, then you can delete this safely.
    //   config.resolve.alias["vue$"] = "vue/dist/vue.esm.js"
    // }
    // analyze: true

  },
  sitemap: {
    hostname: "https://blog.twelvepics.com",
    exclude: ["/email-confirm"],
    routes: async () => {
      const dbHandle = getDb();
      const cursor = await dbHandle().query(
        "FOR d IN posts FILTER d.publish==true SORT d.createdDate DESC RETURN d"
      );
      const posts = await cursor.all();

      return posts.map(post => `/blog-posts/${post.slug}`);
    }
  }
};
