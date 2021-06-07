import React from "react"
import { graphql } from "gatsby"
import {Projects,Seo,Layout} from "../components"
// import Seo from "../components/Seo"
// import Layout from '../components/Layout'
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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
  }
`

export default ProjectsPage