import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import LatestPosts from "../components/Post/LatestPosts"
import RichText from "../components/RichText"

const Notia = ({ pageContext }) => {
  let url = pageContext.data.url.split("/")[3]
  let tempo = new Date()
  return (
    <>
      <GatsbySeo
        title={pageContext.data.title}
        description={pageContext.data.description}
        canonical={`https://www.prolocofraine.org/${url}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${url}`,
          type: "article",
          article: {
            publishedTime: tempo.today(),
            modifiedTime: tempo.today(),
            expirationTime: tempo.today(),
            section: "",
            authors: ["zonalocale"],
            tags: [
              "News",
              "Abruzzo",
              "Cronaca",
              "Zona Locale",
              "Pescara",
              "Lanciano",
              "Fraine",
              "Carabinieri",
            ],
          },
          title: `${pageContext.data.title}`,
          description: `${pageContext.data.description}`,
          images: [
            {
              url: `${pageContext.data.ima}`,
              width: 800,
              height: 600,
              alt: "proloco fraine",
            },
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Vincenzo Marcovecchio",
          site: "Proloco Fraine",
          cardType: "summary_large_image",
        }}
      />

      <section>
        <PostSingleStyles>
          {pageContext.data.title && <h1 className="blogsingle__title">{title}</h1>}

          {pageContext.data.description && (
            <article className="blogsingle__content">
              {pageContext.data.ima && (
                <img
                  style={{ width: "100%", height: "65vh", objectFit: "cover" }}
                  alt={pageContext.data.title}
                  src={pageContext.data.ima}
                />
              )}
              <h1 style={{ margin: "2rem auto 2rem 0" }}>
                {pageContext.data.title}
              </h1>
              <div style={{ marginBottom: "2rem" }}>
                <span>
                  <b>Autore:</b>&nbsp;{" "}
                  <a
                    rel="canonicale noopener noreferrer"
                    target="_blank"
                    href="https://zonalocale.it"
                  >
                    Zona Locale
                  </a>
                </span>
              </div>
              <time dateTime={tempo.today()}></time>
              <RichText richText={pageContext.data.description} />

              <div className="blogsingle__back">
                <Button to="/news" text="Torna alle news" as={Link} />
              </div>
            </article>
          )}
        </PostSingleStyles>
      </section>
      <LatestPosts title="Ulteriori notizie" />
    </>
  )
}

export default Notia
