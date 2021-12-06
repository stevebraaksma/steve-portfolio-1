import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import resume from "/static/resume.pdf"
// import { Drawer } from "@material-ui/core"
// import { Drawer } from '@mui/material'
import { Hidden } from "@material-ui/core"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { SwipeableDrawer } from "@material-ui/core"
import { Divider } from "@material-ui/core"
import { ChevronRight } from "@material-ui/icons"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    
    <div className="navbar"
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        background: `grey`,
      }}
    >
      <Hidden smUp>
        <IconButton>
          <MenuIcon/>
        </IconButton>
      </Hidden>

      <Hidden xsDown>
      <h3 style={{ margin: 0 }}>
        <Link className="nav" to="/">HOME</Link>
      </h3>


      <h3 style={{ margin: 0 }}>
        <Link className="nav" to="/projects">PROJECTS</Link>
      </h3>      

      <h3 style={{ margin: 0 }}>
        <Link className="nav" to="/about">ABOUT</Link>
      </h3>

      <h3 style={{ margin: 0 }}>
        <Link className="nav" to="/contact">CONTACT</Link>
      </h3>

      <h3 style={{ margin: 0 }}>
        {/* <Link className="button" to="/public/Steve_Braaksma_resume.pdf">RESUME</Link> */}
        
<a type='button' className='resume-button nav' rel="noreferrer" target="_blank" href={resume}>RESUME</a>

      </h3>
      </Hidden>



    </div>

      <SwipeableDrawer anchor="right" open={true}>
        

      </SwipeableDrawer>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
