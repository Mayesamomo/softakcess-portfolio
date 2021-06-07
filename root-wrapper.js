import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap");

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  /* --clr-primary-1: hsl(43, 86%, 17%); */
  --clr-primary-1: hsl(273, 91%, 17%);
  --clr-primary-2: hsl(276, 84%, 25%);
  --clr-primary-3: hsl(278, 81%, 29%);
  --clr-primary-4: hsl(273, 77%, 34%);
  --clr-primary-5: #752cba;
  /* lighter shades of primary color */
  --clr-primary-6: hsl(278, 57%, 50%);
  --clr-primary-7: hsl(273, 65%, 59%);
  --clr-primary-8: hsl(276, 80%, 74%);
  --clr-primary-9: hsl(276, 94%, 87%);
  --clr-primary-10: hsl(277, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(281, 61%, 16%);
  --clr-grey-3: hsl(295, 35%, 30%);
  --clr-grey-4: hsl(257, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(266, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-green-dark: hsl(91, 67%, 35%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-white: #fff;
  --ff-primary: "Poppins", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
  margin-top: 5rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-8);
}
.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
}
/* section */
.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
/* uderline============================= */
.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
}

.underline-animate {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  animation: mymove 5s alternate infinite ease-in-out;

}

/*animate underlines*/
@keyframes mymove {
  from {
    left: 0px;
  }

  to {
    left: 120px;
  }
}

.section-title {
  margin-bottom: 4rem;
  text-align: center;
}
.bg-grey {
  background: var(--clr-grey-10);
}
/* page links */

/* social links */
.social-links {
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
}
.social-link {
  font-size: 1.75rem;
  color: var(--clr-grey-1);
  transition: var(--transition);
}
.social-link:hover {
  color: var(--clr-primary-5);
}

/* underline added to globals */

/*
=============== 
Services
===============
*/
.service {
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service-icon {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.service .underline {
  width: 3rem;
  height: 0.12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
}
.service:hover p {
  color: var(--clr-primary-9);
}
.service:hover .underline {
  background: var(--clr-primary-9);
}
@media screen and (min-width: 676px) {
  .services-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/*
=============== 
Blog
===============
*/
.blog {
  display: block;
  margin-bottom: 2rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
}

.blog:hover {
  box-shadow: var(--dark-shadow);
  transform: scale(1.02);
}

.blog article {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}

.blog-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.blog-img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 15rem;
}

.blog-card {
  padding: 1.5rem 1rem;
}

.blog-card h4 {
  color: var(--clr-grey-1);
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-footer p {
  margin-bottom: 0;
  font-weight: bold;
  color: var(--clr-grey-5);
}

.blog-footer p:first-of-type {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}

@media screen and (min-width: 576px) {
  .blogs-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }

  .blog-img {
    height: 17.5rem;
  }
}

@media screen and (min-width: 850px) {
  .blog-img {
    height: 13.75rem;
  }
}

/*
===============
Footer
===============
*/
.footer {
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
}

.footer h4 {
  margin-top: 0.5rem;
  color: var(--clr-white);
  font-weight: normal;
  text-transform: uppercase;
}

.footer h4 span {
  color: var(--clr-primary-5);
}

.footer-links {
  margin: 0 auto 1rem auto;
}

.footer .social-link {
  color: var(--clr-white);
}

.footer .social-link:hover {
  color: var(--clr-primary-5);
}

/*
===============
Pages
===============
*/

.project-template-page,
.blog-template,
.projects-page,
.blog-page,
.error-page,
.about-page,
.contact-page {
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
}

.error-page {
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
}

.error-page h1 {
  text-transform: uppercase;
  color: var(--clr-primary-1);
  margin-bottom: 2rem;
}

/*
===============
Blog Page
===============
*/
.blog-page .blog {
  background: var(--clr-white);
}

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
/* ===============
Project Template Page
=============== */

.project-template-page {
  padding-top: 3rem;
  text-align: center;
}
.project-template-page h2 {
  text-transform: uppercase;
}
.project-template-page p {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
}
/*
===============
Blog Template
===============
*/
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


::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #b2a9c0;
  box-shadow: inset 0 0 5px rgb(112, 95, 131);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(111, 60, 204);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(195, 152, 221);
}

`

export const wrapRootElement = ({ element }) => {
    return (
      <>
        <GlobalStyle />
       {element}
      </>
    )
}