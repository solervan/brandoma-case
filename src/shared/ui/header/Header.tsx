import './Header.scss'
import React, { useState } from 'react';
import LogoPartner from '../../../app/assets/svg/icons/Brandma.svg'
import { Button } from 'rsuite';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '#' },
    { name: 'Заказы', href: '#' },
    { name: 'Цены', href: '#' },
    { name: 'О нас', href: '#' },
    { name: 'Контакты', href: '#' }
  ];

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип */}
        <div className="header__brand">
          <a href="#" className="header__logo-link">
            <img
              className="header__logo"
              src={LogoPartner}
              alt="Строительная компания"
            />
          </a>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navigation.map((item, index) => (
              <li key={index} className="header__nav-item">
                <a href={item.href} className="header__nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
  
          <Button
            appearance="primary" 
            size='md' 
            color='orange'
          >
            Начать работу
          </Button>
        </div>

        <button
          className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--active' : ''}`}>
          <nav className="header__mobile-nav">
            <div className="header__mobile-brand">
              <img
                className="header__mobile-logo"
                src={LogoPartner}
                alt="Строительная компания"
              />
            </div>

            <ul className="header__mobile-list">
              {navigation.map((item, index) => (
                <li key={index} className="header__mobile-item">
                  <a
                    href={item.href}
                    className="header__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="header__mobile-actions">
              <Button
                className="header__mobile-button header__mobile-button--login"
                onClick={() => setIsMenuOpen(false)}
                appearance='default'
              >
                Войти
              </Button>
              <Button
                className="header__mobile-button header__mobile-button--signup"
                onClick={() => setIsMenuOpen(false)}
                appearance='default'
              >
                Начать работу
              </Button>
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <div
            className="header__overlay"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  )
}