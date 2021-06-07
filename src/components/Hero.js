import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
const Hero = () => {
  return (
    <Wrapper>
    <div className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline underline-animate"></div>
            <h1>i'm Michael</h1>
            <h4>A web and mobile App Artisan</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero-img.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.header`
.hero {
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;
}

.hero-center {
  height: 100%;
  display: grid;
  align-items: center;
}

.hero .underline {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.hero-info {
  background: var(--clr-primary-10);
}
.hero-img {
  display: none;
}
.hero-img-svg {
  display: none;
}
.hero-img {
  display: none;
}
.hero-info h4 {
  color: var(--clr-grey-5);
}
.hero-icons {
  justify-items: flex-start;
}
.hero .btn {
  margin-top: 1.25rem;
}

@media screen and (min-width: 992px) {
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 65%;
    right: 0;
    bottom: 0;
    /* background: var(--clr-white); */
  }
  .hero-center {
    grid-template-columns: repeat(12, 1fr);
  }

  .hero h4 {
    font-size: 0.85rem;
  }
  .hero-info {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  .hero-img {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
  .hero-img-svg {
    width: 100%;
    height: 400px;
    position: relative;
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
}
@media screen and (min-width: 1170px) {
  .hero h4 {
    font-size: 1rem;
  }

  .hero-info {
    grid-column: 1 / span 8;
  }

  .hero h4 {
    line-height: 1;
  }
}

`
export default Hero
