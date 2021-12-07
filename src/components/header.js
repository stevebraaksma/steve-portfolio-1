import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import resume from "/static/resume.pdf"
// import { Drawer } from "@material-ui/core"
// import { Drawer } from '@mui/material'
import { Hidden } from "@material-ui/core"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { SwipeableDrawer } from '@mui/material'
import { Divider } from '@mui/material'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronRight from "@mui/icons-material/ChevronRight"
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
// import { makeStyles } from "@material-ui/core"





//      ********works

// const useStyles = makeStyles({
//     paper: {
//       // background: "blue",
//       color: "blue"
//     }
// });



const Header = ({ siteTitle }) => {

  const [ open, setOpen ] = useState(false)
  // const classes = useStyles()

  return (
  
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
            <MenuIcon onClick={() => setOpen(true)}/>
          </IconButton>
      </Hidden>
      <SwipeableDrawer 
        // className={classes.paper} 
        anchor="right" 
        open={open} 
        onOpen={() => setOpen(true)} 
        onClose={() => setOpen(false)}
      >
        <IconButton>
          <ChevronRight onClick={() => setOpen(false)}/>
        </IconButton>
        
        <Divider className="mobile-menu"/>


        <List>
              <ListItem><h3 style={{ color: "red" }}>
                <Link className="nav" to="/">HOME</Link>
              </h3></ListItem>


              <ListItem><h3 style={{ margin: 0 }}>
                <Link className="nav" to="/projects">PROJECTS</Link>
              </h3></ListItem>      

              <ListItem><h3 style={{ margin: 0 }}>
                <Link className="nav" to="/about">ABOUT</Link>
              </h3></ListItem>

              <ListItem><h3 style={{ color: "red" }}>
                <Link className="nav" to="/contact">CONTACT</Link>
              </h3></ListItem>

              <ListItem><h3>
    <a type='button' className='resume-button nav' rel="noreferrer" target="_blank" href={resume}>RESUME</a>
              </h3></ListItem>
        </List>
      </SwipeableDrawer>
      
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
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
