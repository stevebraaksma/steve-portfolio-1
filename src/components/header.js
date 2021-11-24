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
        <Link className="nav" to="/">{/* {siteTitle} */}HOME</Link>
      </h3>


      <h3 style={{ margin: 0 }}>
        <Link className="nav" 
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          PROJECTS
        </Link>
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
