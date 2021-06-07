import React from "react"
import { graphql } from "gatsby"
import {Blogs,Seo, Layout} from '../components'
// import Seo from "../components/SEO"
// import Layout from '../components/Layout'
const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="All Blogs" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiBlogs {
    nodes {
      slug
      content
      description
      date(formatString: "MMM Do, YYYY")
      id
      title
      category
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
}
`
export default Blog
