import path from "path"
import strutto from "./src/components/strutture.json"
import axios from "axios"
//JKJKJ
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const locaNews = path.resolve("src/templates/locaNews.js")
  const abruNews = path.resolve("src/templates/abruNews.js")

  const struttoTemplate = path.resolve("src/templates/struttoTemplate.js")

  await strutto.forEach(async (dis) => {
    let luca = await dis[Object.keys(dis)[2]]
    let franco = await luca.toString().toLowerCase()
    let giggio = await franco.replace(/\s+/g, "-")

    await createPage({
      path: `/${giggio}/`,
      component: struttoTemplate,
      context: {
        data: dis,
        giggi: giggio,
      },
    })
  })

  const lokka = await graphql(`
    {
      kale {
        results {
          links
        }
      }
    }
  `)

  for (let i = 0; i < lokka.data.kale.results.links.length; i++) {
    try {
      let ciao = await lokka.data.kale.results.links[i]

      let rollot = await axios(`https://lokkalle.herokuapp.com/?q=${ciao}`)

      let gigi = await rollot.data.text()

      const duto = await JSON.parse(gigi)

      await createPage({
        path: `/${ciao}`,
        component: locaNews,
        context: {
          data: duto,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const abrulinks = await graphql(`
    {
      abrulinksuno {
        results {
          links
        }
      }
    }
  `)

  for (let i = 0; i < abrulinks.data.abrulinksuno.results.links.length; i++) {
    try {
      let figa = await abrulinks.data.abrulinksuno.results.links[i].split(
        "/"
      )[4]

      let rollot = await axios(
        `https://sheltered-meadow-66603.herokuapp.com/noti/${luca}`
      )

      let gigi = await rollot.data.text()

      const son = await JSON.parse(gigi)

      await createPage({
        path: `/${figa}`,
        component: abruNews,
        context: {
          data: { son, figa },
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
