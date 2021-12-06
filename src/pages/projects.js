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
          <h6 className="stack-card"> HTML / CSS / JavaScript / React / Node / MongoDB / Express / Heroku / Netlify</h6>
          <img src={'/nodejs.svg'} alt="NodeJS" />
          <img src={'/mongodb.svg'} alt="MongoDB" />
          <img className="express-icon" src={'/expressjs.svg'} alt="Express" />
          <img src={'/react.svg'} alt="React" />
          <img src={'/javascript.svg'} alt="JavaScript" />
          <img src={'/css3.svg'} alt="css3" />
          <img src={'/html5.svg'} alt="html5" />
        </Card>
      </Grid>

      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>Thresher EMS Solutions</h4>
          <p>Designed for tracking electronic component purchases</p>
          <a href="https://github.com/stevebraaksma/thresher/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://thresherapp.herokuapp.com/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / Node / MongoDB / Express / Auth0 / Heroku</h6>
          <img src={'/nodejs.svg'} alt="NodeJS" />
          <img src={'/mongodb.svg'} alt="MongoDB" />
          <img className="express-icon" src={'/expressjs.svg'} alt="Express" />
          <img className="auth0-icon" src={'/auth0.svg'} alt="auth0" />
          <img src={'/javascript.svg'} alt="JavaScript" />
          <img src={'/css3.svg'} alt="css3" />
          <img src={'/html5.svg'} alt="html5" />
        </Card>
      </Grid>

      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>Triplog</h4>
          <p>Trip planner with comment feature</p>
          <a href="https://github.com/stevebraaksma/Triplog/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://triplogapp.herokuapp.com/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / Python / Django / Heroku</h6>
          <img src={'/python.svg'} alt="Python" />
          <img src={'/django.svg'} alt="Django" />
          <img src={'/javascript.svg'} alt="JavaScript" />
          <img src={'/css3.svg'} alt="css3" />
          <img src={'/html5.svg'} alt="html5" />
        </Card>
      </Grid>


      <Grid item xs={10} md={5}>
        <Card variant="outlined" className="card">
          <h4>festivalRambler</h4>
          <p>Displays festivals sorted by region</p>
          <a href="https://github.com/stevebraaksma/festivalRambler/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;
          <a href="https://festivalrambler.netlify.app/" target="_blank" rel="noreferrer"><OpenInNewIcon/></a><br />
          <h6 className="stack-card"> HTML / CSS / JavaScript / jQuery / EDMtrain API / Netlify</h6>
          <img src={'/jquery.svg'} alt="jquery" />
          <img src={'/javascript.svg'} alt="JavaScript" />
          <img src={'/css3.svg'} alt="css3" />
          <img src={'/html5.svg'} alt="html5" />
        </Card>
      </Grid>







    </Grid>

  </Layout>
)

export default Projects
