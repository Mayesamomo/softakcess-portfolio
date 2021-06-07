import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url:
      "https://business.facebook.com/latest/home?asset_id=109501307096990&nav_id=1613782838&nav_ref=bm_home_redirect",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/pulse/5-functions-management-henri-fayol-kalpesh-shah/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Mayesamomo",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/michaeljaems/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/michaeljaems16",
  },
]

export default data
