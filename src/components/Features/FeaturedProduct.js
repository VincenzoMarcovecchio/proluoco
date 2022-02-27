import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"
import { MdImage } from "react-icons/md"

const FeaturedProduct = ({ feature }) => {
  const { description, urlToImage, author, content, title, url } = feature
  const image = getImage(urlToImage)
  const urla = new URL(url)
  const cazzo = urla.toString().substring(29)
  const rel = cazzo.replace("#", "").replace("?", "")
  return (
    <FeaturedProductStyles>
      <Link to={rel}>
        <img
          className="features__item--img"
          src={urlToImage}
          alt={title}
        />
        {title && description && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {author && <h6>{author}</h6>}
            {description && <p>{description}</p>}
            <Button text="Leggi di più" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
