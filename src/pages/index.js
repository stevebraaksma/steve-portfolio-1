import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// const useStyles = makeStyles((theme) => ({
//   section: {
//     height: "90vh",
//     backgroundColor: "green"
//   }
// }))



const IndexPage = () => (
  <Layout>
    
    <Seo title="Home" />
    <h1>Hi, my name is Steve Braaksma.</h1>
    <h2>Software Engineer / Full Stack Developer</h2>
    

    {/* <p>
    Transitioning from supply chain to developer, I am eager to use a new set of tools
    to solve business challenges.
    Open to frontend, backend and full stack opportunities.
    </p>   */}
    <p>I’m a web developer with InterVarsity Christian Fellowship/USA.</p>
    <p>Currently I work mostly with Drupal on the frontend, with JavaScript and Bootstrap. I am also enjoying learning headless Drupal with Drupal’s JSON API module, as well as module building.</p>
    <p>I’m also interested in side projects, get in touch if you have a website or app idea you’d like to discuss!</p>
    <br />
    <Link className="resume-button nav" to="/projects">
      SEE MY PROJECTS
    </Link>
  </Layout>
)

export default IndexPage

