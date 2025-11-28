import './Header.scss'
import { navigationItems } from '../../config/navigation'
import { Link } from '@tanstack/react-router';




export default function Header() {
  return (
   <header className="header header--home">
  <div className="header__container">
    <div className="header__content">

      <div className="header__main-area">
        <nav className="header__list">
        {navigationItems.map(item => (
          <Link to={item.to}><li className="header__list-item">
            {item.label}
          </li></Link>
        ))}
        </nav>
      </div>
    </div>
  </div>
</header>

  )
}
