import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Типы строительства', href: '#' },
      { name: 'Услуги', href: '#' },
      { name: 'Цены', href: '#' },
      { name: 'Объекты', href: '#' },
      { name: 'Отзывы', href: '#' }
    ],
    company: [
      { name: 'О компании', href: '#' },
      { name: 'Вакансии', href: '#' },
      { name: 'Новости', href: '#' },
      { name: 'Портфолио', href: '#' },
      { name: 'Контакты', href: '#' }
    ],
    resources: [
      { name: 'Блог о строительстве', href: '#' },
      { name: 'Технологии', href: '#' },
      { name: 'Сертификаты', href: '#' },
      { name: 'Гарантии', href: '#' },
      { name: 'Партнеры', href: '#' }
    ],
    documents: [
      { name: 'Договор', href: '#' },
      { name: 'Конфиденциальность', href: '#' },
      { name: 'Лицензии', href: '#' },
      { name: 'СРО', href: '#' },
      { name: 'Документы', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'VK', href: '#', icon: '📘' },
    { name: 'Telegram', href: '#', icon: '✈️' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'WhatsApp', href: '#', icon: '💬' }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <h3 className="footer__logo">Brandom</h3>
            <p className="footer__tagline">
              Строительная компания полного цикла. Создаем надежные и качественные объекты 
              с использованием современных технологий и материалов.
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  <span className="footer__social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Услуги</h4>
              <ul className="footer__column-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index} className="footer__column-item">
                    <a href={link.href} className="footer__column-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Компания</h4>
              <ul className="footer__column-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index} className="footer__column-item">
                    <a href={link.href} className="footer__column-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Ресурсы</h4>
              <ul className="footer__column-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index} className="footer__column-item">
                    <a href={link.href} className="footer__column-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Документы</h4>
              <ul className="footer__column-list">
                {footerLinks.documents.map((link, index) => (
                  <li key={index} className="footer__column-item">
                    <a href={link.href} className="footer__column-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} Brandom. Все права защищены.
          </div>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Политика конфиденциальности</a>
            <a href="#" className="footer__legal-link">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;