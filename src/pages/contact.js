import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card } from "@material-ui/core"

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => (
  <Layout>
    <Seo title="Contact" />


    <h1>Contact</h1>
    <Card variant="outlined" className="card contact-card">
          <h4>Let's get in touch!</h4>
          
          <a href="https://github.com/stevebraaksma/" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;&nbsp;

          <a href="https://linkedin.com/in/stevebraaksma1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>&nbsp;&nbsp;

          <a href="mailto:stevebraaksma@hotmail.com/" target="_blank" rel="noreferrer"><EmailIcon/></a>&nbsp;&nbsp;

        </Card>



  </Layout>
)

export default Contact
