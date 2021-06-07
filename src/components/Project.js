import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"
const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  return (
    <Wrapper>
      <div className="project">
        <GatsbyImage
          image={getImage(image)}
          className="project-img"
          alt={title}
        />
        <div className="project-info">
          <span className="project-number">0{index + 1}.</span>
          <Link to={`/projects/${slug}`} className="project-slug">
            <h3>{title}</h3>
          </Link>
          <p className="project-desc">{description}</p>
          <div className="project-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <div className="project-links">
            <a href={github}>
              <FaGithubSquare className="project-icon"></FaGithubSquare>
            </a>
            <a href={url}>
              <FaShareSquare className="project-icon"></FaShareSquare>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .projects {
    background: var(--clr-grey-10);
  }
  .project {
    display: grid;
    margin-bottom: 4rem;
  }
  .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
  }
  .project-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.85;
    transition: var(--transition);
  }
  .project:hover .project-img::after {
    opacity: 0;
  }
  .project-info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .project-number {
    display: inline-block;
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  }
  .project-slug h3 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .project-slug h3:hover {
    color: var(--clr-primary-5);
  }
  .project-desc {
    word-spacing: 15px;
    color: var(--clr-grey-3);
  }
  .project-stack {
    margin-bottom: 1rem;
  }
  .project-stack span,
  .about-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  .about-stack span {
    margin-top: 0.5rem;
  }
  .project-icon {
    color: var(--clr-primary-5);
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);
  }
  .project-icon:hover {
    color: var(--clr-primary-1);
  }
  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    .project {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    .project-img {
      grid-column: 1 / span 8;
      /* grid-column-end: 8; */
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`
export default Project
