import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Button } from '@mui/material'


const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <div className="flex-center-content">
      <h1>Projects</h1>
    </div>
    <Grid className="flex-center-content" container spacing={2}>
      <Grid item xs={15} md={5}>
        <Card variant="outlined" className="card">
          <h4>BuyerNode Task Manager</h4>
          <p>Designed for purchasing/supply chain departments</p>
          <Button href="https://github.com/stevebraaksma/buyernode-frontend/" target="_blank" rel="noreferrer" variant="contained" startIcon={<GitHubIcon />}>
            View GitHub
          </Button>
          <br />
          <br />
          <Button href="https://buyernode.netlify.app/" target="_blank" rel="noreferrer" variant="contained" startIcon={<RocketLaunchIcon />}>
            Launch App&nbsp;
          </Button>
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

      <Grid item xs={15} md={5}>
        <Card variant="outlined" className="card">
          <h4>Thresher EMS Solutions</h4>
          <p>Designed for tracking electronic component purchases</p>
          <Button href="https://github.com/stevebraaksma/thresher/" target="_blank" rel="noreferrer" variant="contained" startIcon={<GitHubIcon />}>
            View GitHub
          </Button>
          <br />
          <br />
          <Button href="https://thresherapp.herokuapp.com/" target="_blank" rel="noreferrer" variant="contained" startIcon={<RocketLaunchIcon />}>
            Launch App&nbsp;
          </Button>
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

      <Grid item xs={15} md={5}>
        <Card variant="outlined" className="card">
          <h4>Triplog</h4>
          <p>Trip planner with comment feature</p>
          <Button href="https://github.com/stevebraaksma/Triplog/" target="_blank" rel="noreferrer" variant="contained" startIcon={<GitHubIcon />}>
            View GitHub
          </Button>
          <br />
          <br />
          <Button href="https://triplogapp.herokuapp.com/" target="_blank" rel="noreferrer" variant="contained" startIcon={<RocketLaunchIcon />}>
            Launch App&nbsp;
          </Button>
          <h6 className="stack-card"> HTML / CSS / JavaScript / Python / Django / Heroku</h6>
          <img src={'/python.svg'} alt="Python" />
          <img src={'/django.svg'} alt="Django" />
          <img src={'/javascript.svg'} alt="JavaScript" />
          <img src={'/css3.svg'} alt="css3" />
          <img src={'/html5.svg'} alt="html5" />
        </Card>
      </Grid>

      <Grid item xs={15} md={5}>
        <Card variant="outlined" className="card">
          <h4>festivalRambler</h4>
          <p>Displays festivals sorted by region</p>
          <Button href="https://github.com/stevebraaksma/festivalRambler/" target="_blank" rel="noreferrer" variant="contained" startIcon={<GitHubIcon />}>
            View GitHub
          </Button>
          <br />
          <br />
          <Button href="https://festivalrambler.netlify.app/" target="_blank" rel="noreferrer" variant="contained" startIcon={<RocketLaunchIcon />}>
            Launch App&nbsp;
          </Button>
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
