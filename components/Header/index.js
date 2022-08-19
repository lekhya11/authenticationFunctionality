import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="app-container">
    <ul className="link-style">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
