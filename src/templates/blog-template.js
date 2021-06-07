import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import styled from "styled-components"
import gfm from "remark-gfm"
import {PrismAsyncLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism'
const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={okaidia} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props} />
    )
  }
}
const BlogTemplate = ({ data }) => {
  const { content, title, description } = data.blog
  return (
    <Layout>
      <Seo title={title} description={description} />
      <Wrapper>
        <div className="blog-template">
          <div className="section-center">
            <article className="blog-content">
              {/* <p>{content}</p> */}
              {/* <ReactMarkdown source={content}> */}
              <ReactMarkdown components={components} remarkPlugins={[gfm]}>
                {content}
              </ReactMarkdown>
            </article>
            <Link to="/blog" className="btn center-btn">
              blogs
            </Link>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  .blog-template {
    padding: 5rem 0;
  }

  .blog-template h1,
  .blog-template h2 {
    text-align: center;
  }

  .blog-template ul {
    margin-top: 2rem;
    display: inline-block;
  }

  .blog-template ul li {
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }

  .blog-template blockquote {
    background: var(--clr-primary-9);
    border-radius: var(--radius);
    padding: 1rem;
    line-height: 2;
    color: var(--clr-primary-5);
    margin: 2rem 0;
  }

  .blog-template pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
  }

  .blog-template img {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0;
  }
`

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default BlogTemplate
