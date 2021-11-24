import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >


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
        {/* <Link className="button" to="/contact">CONTACT</Link> */}
        
<a type='button' className='resume-button nav' rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/11K5zQL3JQGUcldIgM1I9gW6QBpwrQ-Sx/view?usp=sharing'>RESUME</a>

      </h3>


    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
