import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedProduct"
import Button from "../Button/Button"
import { StaticQuery, graphql } from "gatsby"


const Features = ({ title, introduction }) => {
  return (
    <StaticQuery
    query={graphql`
    query {
      articles {
        articles {
          author
          title
          description
          url
          urlToImage
          publishedAt
          content
        }
      }
    }
    `}
    render={data => (
      <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {data.articles.articles.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/products" text="Tutti gli articoli" />
      </div>
    </FeaturedProductsStyles>
    )}
  />
   
  )
}

export default Features


