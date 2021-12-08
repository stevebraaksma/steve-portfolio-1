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
    

    <p>
    Transitioning from supply chain to developer, I am eager to use a new set of tools
    to solve business challenges.
    Open to frontend, backend and full stack opportunities.
    </p>  
    <br />
    <Link className="resume-button nav" to="/projects">
      SEE MY PROJECTS
    </Link>
  </Layout>
)

export default IndexPage

