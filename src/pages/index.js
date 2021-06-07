import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs"
import Layout from "../components/Layout"
const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services
         data-sal="slide-right"
         data-sal-duration="2000"
         // data-sal-delay="300"
         data-sal-easing="ease"
         />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects}
         data-sal="slide-down"
         data-sal-duration="2000"
         // data-sal-delay="300"
         data-sal-easing="ease"
         />
        <Blogs
          title="Latest Blogs"
          showLink
          blogs={blogs}
          data-sal="slide-left"
          data-sal-duration="3s"
          // data-sal-delay="300"
          data-sal-easing="ease"
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }

    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
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
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default IndexPage
