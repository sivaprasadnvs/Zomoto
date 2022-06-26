import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="zomoto"
        className="logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      />
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link id="use-app" to="/">
          Use App
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
