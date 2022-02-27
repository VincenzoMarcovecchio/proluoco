import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Benvenuto su Proloco Fraine"
          subTitle="Il nostro obbiettivo è pruomuovere l'informazione attraverso dati reali e risorse telematiche di pubblico accesso "
        />
        <BasicTextModule
          title="Eventi e manifestazioni"
          content="Rimani informato su quello che accade nel territorio Abruzzese"
          link="/products"
          linkText="scopri di più"
        />
       
        <Features
          title="Notizie dal web"
          introduction="Raggruppiamo tutte le notizie piu importanti per te"
        />
        <LatestPosts
          title="Il nostro Blog"
          introduction="Con particolare interesse al mondo culinario"
        />
      </Layout>
    </>
  )
}

export default Index
