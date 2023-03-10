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
    JAVASCRIPT | DRUPAL | BOOTSTRAP | HTML | CSS | NODEJS | REACT | PYTHON | DJANGO
    <br />
    <br />
    {/* Currently in an effort to use creative problem solving and unique code to find a simple solution to a complex problem I am working on a project to streamline purchasing of electronic components, called Thresher EMS Solutions. */}
    <br />
    I spend most of my time with JavaScript and Drupal. After some years studying up on JavaScript, I joined 
    <a href="https://generalassemb.ly/">General Assembly</a>'s coding bootcamp, and have been a developer at <a href="https://intervarsity.org/">InterVarsity Christian Fellowship/USA</a> for over a year now.
    <br />
    GITHUB:<br />
    <a href="https://github.com/SteveBraaksma">https://github.com/SteveBraaksma</a>
    </p>
  </Layout>
)

export default About
