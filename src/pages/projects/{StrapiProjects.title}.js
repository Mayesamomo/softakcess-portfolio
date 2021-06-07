import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import Layout from '../../components/Layout'
const ProjectTemplate = ({ pageContext: { title}, data }) => {
  // const stack = data.strapiProjects.stack
  return (
    <Layout>
      <Seo
        title={data.strapiProjects.title.toUpperCase()}
        description={data.strapiProjects.description}
        image={data.strapiProjects.image.publicURL}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <br/>
        <br/>
        <div>
        <img src={data.strapiProjects.image.publicURL} alt={title} className="project-img"/>
        </div>
      
        <p>{data.strapiProjects.description}</p>
       <br/>
       <br/>
        <div className="project-links">
          <a href={data.strapiProjects.github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={data.strapiProjects.url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
        <br/>
      </main>
     
    </Layout>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      description
      title
      image {
        publicURL
      }
    }
  }
`

export default ProjectTemplate