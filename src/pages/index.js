import React from "react"
import AOS from "aos";
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs"
import Layout from "../components/Layout"
// internal imports
import "aos/dist/aos.css";
AOS.init();
const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <Hero 
         data-aos="zoom-out-up"
         data-aos-delay="50"
         data-aos-duration="2000"
         data-aos-easing="ease-in-out-cubic"
        />
        <Services
         data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-delay="300"
         data-aos-offset="0"
         />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects}
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-cubic"
         />
        <Blogs
          title="Latest Blogs"
          showLink
          blogs={blogs}
          data-aos="zoom-out-down"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-cubic"
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
