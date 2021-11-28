import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi, my name is Steve Braaksma.</h1>
    <h2>Software Engineer / Full Stack Developer</h2>
    <Button variant="contained">Hello World</Button>;

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />


      <Link to="/projects/">Projects</Link> <br />



      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
