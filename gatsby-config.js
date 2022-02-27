/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Proloco Fraine",
    description:
      "Il nostro obbiettivo è pruomuovere l'informazione attraverso dati reali e risorse telematiche ",
    author: "Vincenzo Marcovecchio",
    twitterUsername: "_vinny92_",
    facebookUsername: "vin.ma",
    instagramUsername: "vincenzo.codes",
    linkedinUsername: "vincenzomarcovecchio",
    image: "/macbook-color.jpg",
    siteUrl: "https://barcadia.netlify.com",
    developerName: "Vincenzo Marcovecchio",
    developerUrl: "https://www.vincenzo.codes",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development:
            "https://newsapi.org/v2/top-headlines?country=it&apiKey=be0e85ab6c7c4d20ad402a0f216017c3", // on "gatsby develop"
          production:
            "https://newsapi.org/v2/top-headlines?country=it&apiKey=be0e85ab6c7c4d20ad402a0f216017c3", // on "gatsby build"
        },
        rootKey: "articles",
        schemas: {
          articles: `
                     author: String
                     title: String
                     description: String
                     url: String
                     urlToImage: String
                     publishedAt: String
                     content: String
                   
                    `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development:
            "https://newsapi.org/v2/everything?q=agricoltura&apiKey=ff2ef352b8e949b6aba7fab69ebbdfd0", // on "gatsby develop"
          production:
            "https://newsapi.org/v2/everything?q=agricoltura&apiKey=ff2ef352b8e949b6aba7fab69ebbdfd0", // on "gatsby build"
        },
        rootKey: "agri",
        schemas: {
          articles: `
                     author: String
                     title: String
                     description: String
                     url: String
                     urlToImage: String
                     publishedAt: String
                     content: String
                   
                    `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development:
            "https://newsapi.org/v2/everything?q=Abruzzo&sortBy=popularity&apiKey=7572db1197694484a7f7dafd2e6d3885", // on "gatsby develop"
          production:
            "https://newsapi.org/v2/everything?q=Abruzzo&sortBy=popularity&apiKey=7572db1197694484a7f7dafd2e6d3885", // on "gatsby build"
        },
        rootKey: "abruzzonews",
        schemas: {
          articles: `
                     author: String
                     title: String
                     description: String
                     url: String
                     urlToImage: String
                     publishedAt: String
                     content: String
                   
                    `,
        },
      },
    },

    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: {
    //       development:
    //         "https://mimmofranco.herokuapp.com/https://jobbio99.herokuapp.com/",
    //       production:
    //         "https://mimmofranco.herokuapp.com/https://jobbio99.herokuapp.com/",
    //     },
    //     rootKey: "nora",
    //   },
    // },

    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: {
    //       development: "https://leggi98.herokuapp.com/",
    //       production: "https://leggi98.herokuapp.com/", // on "gatsby build"
    //     },
    //     rootKey: "leggi",
    //   },
    // },

    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development:
            "https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&q=abruzzo",
          production:
            "https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&q=abruzzo", // on "gatsby build"
        },
        rootKey: "news",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pacific-fjord-73395.herokuapp.com/1",
          production: "https://pacific-fjord-73395.herokuapp.com/1", // on "gatsby build"
        },
        rootKey: "itiuno",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pacific-fjord-73395.herokuapp.com/2",
          production: "https://pacific-fjord-73395.herokuapp.com/2", // on "gatsby build"
        },
        rootKey: "itidue",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://sheltered-meadow-66603.herokuapp.com/1",
          production: "https://sheltered-meadow-66603.herokuapp.com/1", // on "gatsby build"
        },
        rootKey: "abrulinksuno",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://sheltered-meadow-66603.herokuapp.com/2",
          production: "https://sheltered-meadow-66603.herokuapp.com/2", // on "gatsby build"
        },
        rootKey: "abrulinksdue",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://lokkalle.herokuapp.com/tutto",
          production: "https://lokkalle.herokuapp.com/tutto", // on "gatsby build"
        },
        rootKey: "kale",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pollolo.herokuapp.com/2",
          production: "https://pollolo.herokuapp.com/2", // on "gatsby build"
        },
        rootKey: "pollo2",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pollolo.herokuapp.com/1",
          production: "https://pollolo.herokuapp.com/1", // on "gatsby build"
        },
        rootKey: "pollo1",
      },
    },
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: {
    //       development: "https://pollolo.herokuapp.com/docs",
    //       production: "https://pollolo.herokuapp.com/docs", // on "gatsby build"
    //     },
    //     rootKey: "pollodocs",
    //   },
    // },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://leggi98.herokuapp.com/eventi",
          production: "https://leggi98.herokuapp.com/eventi", // on "gatsby build"
        },
        rootKey: "puppa",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://leggi98.herokuapp.com/altri",
          production: "https://leggi98.herokuapp.com/altri", // on "gatsby build"
        },
        rootKey: "hello",
      },
    },
  ],
}
