import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>About</h1>
    <p>
    I enjoy helping tech companies solve challenges. As a full stack software engineer with a background in electronics manufacturing I bring an eye for detail as well as a big picture perspective to each project. In my free time I enjoy floating down rivers and longboarding. I like to balance facing new challenges with appreciating simplicity both as an engineer and in my hobbies.
    <br />
    <br />
    TECHNICAL SKILLS:<br />
    HTML | CSS | JAVASCRIPT | NODEJS | REACT | PYTHON | DJANGO <br />
    <br />
    Currently in an effort to use creative problem solving and unique code to find a simple solution to a complex problem I am working on a project to streamline purchasing of electronic components, called Thresher EMS Solutions.
    <br />
    <br />
    GITHUB:<br />
    https://github.com/SteveBraaksma
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
