// import React from "react"
// import { graphql, Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
// import { Seo, Layout } from "../../components"
// export const query = graphql`
// query GetSingleBlog($slug: String) {
//     blog:strapiBlogs(slug: { eq: $slug }) {
//       content
//       title
//       description
//     }
//   }
// `
// const BlogTemplate = ({ data }) => {
//   const { content, title, description} = data.blog
//   return (
//     <Layout>
//       <Seo
//         title={title}
//         description={description}
//         //  image={image}
//       />
//       <section className="blog-template">
//         <div className="section-center">
//           <article className="blog-content">
//             <ReactMarkdown source={content} />
//           </article>
//           <Link to="/blog" className="btn center-btn">
//             blogs
//           </Link>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export default BlogTemplate
