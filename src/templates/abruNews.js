import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import RichText from "../components/RichText"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import LatestPosts from "../components/Post/LatestPosts"
const Abruzzio = ({ pageContext }) => {
  console.log(pageContext)

  React.useEffect(() => {
    let ciao = document.querySelectorAll("img")
    ciao.forEach((io, i) => {
      io.src = `https://abruzzoturismo.it${ciao[i].src}`
    })
  }, [])
  let image = pageContext.data.results.ima ? pageContext.data.results.ima : ""
  let tempo = new Date();
  return (
    <>
      <GatsbySeo
        title={`${pageContext.data.results.title.substring(3)}`}
        description={`${pageContext.data.results.title.substring(3)}`}
        canonical={`https://www.prolocofraine.org/${pageContext.figa}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${pageContext.figa}`,
          title: `${pageContext.data.results.title.substring(3)}`,
          description: `${pageContext.data.results.title.substring(3)}`,
          images: [
            {
              url: `${image}`,
              width: 800,
              height: 600,
              alt: `abruzzo itinerari e scoperte`,
            },
            {
              url: `${image}`,
              width: 900,
              height: 800,
              alt: `abruzzo turismo`,
            },
            { url: `${image}` },
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Proloco Fraine",
          site: "https://prolocofraine.org",
          cardType: "summary_large_image",
        }}
      />
      <section>
        <PostSingleStyles>
          <article>
            <time dateTime={tempo.today()}></time>
            <RichText richText={pageContext.data.results.title} />

            <div className="blogsingle__back">
              <Button to="/news" text="Torna alle news" as={Link} />
            </div>
          </article>
        </PostSingleStyles>
      </section>
      <LatestPosts title="Ulteriori notizie" />
    </>
  )
}

export default Abruzzio
