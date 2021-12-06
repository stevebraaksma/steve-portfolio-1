import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Card } from "@material-ui/core"
import { Grid } from "@material-ui/core"

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import GithubIcon from '@mui/icons-material/Github';
import GitHubIcon from '@material-ui/icons/GitHub';
// import icons8-node-js-48 from "/static/icons8-node-js-48.png"


const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Projects</h1>


    <Grid container spacing={2}>
      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>BuyerNode Task Manager</h4>
          <p>Designed for purchasing/supply chain departments</p>
          <a href="https://github.com/stevebraaksma/buyernode-frontend/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://buyernode.netlify.app/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
          <img src={'/nodeicon.png'} alt="NodeJS" />
        </Card>
      </Grid>

      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>Thresher EMS Solutions</h4>
          <p>Designed for tracking electronic component purchases</p>
          <a href="https://github.com/stevebraaksma/thresher/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://thresherapp.herokuapp.com/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / Node / Auth0</h6>
        </Card>
      </Grid>

      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>Triplog</h4>
          <p>Trip planner with comment feature</p>
          <a href="https://github.com/stevebraaksma/Triplog/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://triplogapp.herokuapp.com/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
        </Card>
      </Grid>


      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>festivalRambler</h4>
          <p>Displays festivals sorted by region</p>
          <a href="https://github.com/stevebraaksma/festivalRambler/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://festivalrambler.netlify.app/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node</h6>
        </Card>
      </Grid>







    </Grid>

  </Layout>
)

export default Projects
