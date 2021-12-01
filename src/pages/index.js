import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import { Paper } from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles"

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
      paragraph
    </p>
    
  </Layout>
  
)

export default IndexPage

