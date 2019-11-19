import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"

const IndexPage = ({data}) => {
  console.log(data);
 return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
{data.allStrapiArticle.edges.map(article => (
    <li key={article.node.id}>
     <h1><Link to={`${article.node.id}`}>{article.node.title}</Link></h1>
     <p>{article.node.content}</p>
    <Img fixed={article.node.image.childImageSharp.fixed}/>
    </li> 
    )) }
    </ul>
  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
 query IndexQuery {
  allStrapiArticle {
   edges {
     node {
       id
       title
       content
         image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          } 
     }
   }
  }
 }
`
