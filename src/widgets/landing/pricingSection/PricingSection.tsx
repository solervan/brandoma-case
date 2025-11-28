import React, { useState } from 'react';
import { Button } from 'rsuite';
import './PricingSection.scss';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Эконом+",
      description: "Надежная основа для вашего строительства",
      monthlyPrice: "от 35 000 ₽/м²",
      yearlyPrice: "индивидуальный расчет",
      features: [
        "Устройство фундамента (ленточный, плитный)",
        "Возведение коробки дома",
        "Монтаж кровли (металлочерепица, профнастил)",
        "Установка окон и входной двери",
        "Базовая наружная отделка",
        "Технический надзор"
      ],
      cta: "Рассчитать проект",
      popular: false
    },
    {
      name: "Комфорт",
      description: "Сбалансированное решение под ключ",
      monthlyPrice: "от 55 000 ₽/м²",
      yearlyPrice: "индивидуальный расчет",
      features: [
        "Все услуги из тарифа 'Эконом+'",
        "Утепление и улучшенная фасадная отделка",
        "Разводка инженерных систем",
        "Монтаж канализации и сантехники",
        "Черновая внутренняя отделка",
        "Полный технический надзор"
      ],
      cta: "Выбрать тариф",
      popular: true
    },
    {
      name: "Премиум",
      description: "Элитное строительство с полным сопровождением",
      monthlyPrice: "от 80 000 ₽/м²",
      yearlyPrice: "индивидуальный расчет",
      features: [
        "Все услуги из тарифа 'Комфорт'",
        "Чистовая отделка премиальными материалами",
        "Монтаж сложных элементов (лестницы, арки)",
        "Система 'Умный дом' (базовые сценарии)",
        "Авторский надзор и подбор материалов",
        "Гарантия 5 лет на все работы"
      ],
      cta: "Обсудить проект",
      popular: false
    }
  ];

  return (
    <div className="pricing">
      <div className="pricing__header">
        <h1 className="pricing__title">
          Выберите подходящий вариант строительства
        </h1>
        <p className="pricing__subtitle">
          Мы предлагаем прозрачные цены и индивидуальный подход к каждому проекту
        </p>
        
        <div className="pricing__toggle">
          <span className={!isYearly ? 'pricing__toggle-active' : ''}>За м²</span>
          <button 
            className="pricing__toggle-switch"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={`pricing__toggle-slider ${isYearly ? 'pricing__toggle-slider--yearly' : ''}`} />
          </button>
          <span className={isYearly ? 'pricing__toggle-active' : ''}>Под ключ</span>
        </div>
      </div>

      <div className="pricing__plans">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
          >
            {plan.popular && (
              <div className="pricing__badge">Популярный выбор</div>
            )}
            
            <div className="pricing__card-header">
              <h3 className="pricing__plan-name">{plan.name}</h3>
              <p className="pricing__plan-description">{plan.description}</p>
              
              <div className="pricing__price">
                <span className="pricing__price-amount">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                {isYearly && (
                  <span className="pricing__price-note">Полная смета после замеров</span>
                )}
              </div>
            </div>

            <ul className="pricing__features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="pricing__feature">
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              appearance={plan.popular ? "primary" : "subtle"}
              className={`pricing__cta ${plan.popular ? 'pricing__cta--primary' : ''}`}
              block
              
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;