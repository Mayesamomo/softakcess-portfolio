import React from "react"
import softakcess from "../assets/images/softakcess.png"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
import styled from 'styled-components'
const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
        <Link to="/" ><img src={softakcess} alt="soft akcess" /></Link>
          {/* <img src={softakcess} alt="soft akcess" /> */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
}
.nav-center {
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header img {
  margin-bottom: 0.375rem;
}
.toggle-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
}
.toggle-btn:hover {
  color: var(--clr-primary-2);
}
.nav-links {
  display: none;
}
@media screen and (min-width: 768px) {
  .toggle-btn {
    display: none;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }

  .nav-links a {
    margin-right: 2rem;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}

@media screen and (min-width: 992px) {
  .navbar {
    background: transparent;
  }
}
`
export default Navbar
