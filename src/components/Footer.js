import React from "react"
import socialLinks from "../constants/social_links"
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
    <div className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>Soft Akcess</span> all rights reserved
        </h4>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
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
`

export default Footer
