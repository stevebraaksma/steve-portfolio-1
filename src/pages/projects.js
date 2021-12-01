import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Card } from "@material-ui/core"
import { Grid } from "@material-ui/core"

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GithubIcon from '@mui/icons-material/Github';


const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Projects</h1>


    <Grid container spacing={2}>
      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>BuyerNode Task Manager</h4>
          <p>Designed for purchasing/supply chain departments</p>
          <a href="https://www.google.com/" target="_blank"><GithubIcon/></a>&nbsp;&nbsp;
          <a href="https://www.google.com/" target="_blank"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
        </Card>
      </Grid>

      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>BuyerNode Task Manager</h4>
          <p>Designed for purchasing/supply chain departments</p>
          <a href="https://www.google.com/" target="_blank"><GithubIcon/></a>&nbsp;&nbsp;
          <a href="https://www.google.com/" target="_blank"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
        </Card>
      </Grid>

      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>BuyerNode Task Manager</h4>
          <p>Designed for purchasing/supply chain departments</p>
          <a href="https://www.google.com/" target="_blank"><GithubIcon/></a>&nbsp;&nbsp;
          <a href="https://www.google.com/" target="_blank"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
        </Card>
      </Grid>


      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>BuyerNode Task Manager</h4>
          <p>Designed for purchasing/supply chain departments</p>
          <a href="https://www.google.com/" target="_blank"><GithubIcon/></a>&nbsp;&nbsp;
          <a href="https://www.google.com/" target="_blank"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
        </Card>
      </Grid>







    </Grid>



    <p>Here are my projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
